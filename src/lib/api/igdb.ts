/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function searchGame(searchText: string) {
  try {
    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": `${process.env.NEXT_CLIENT_ID}`,
        Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
      },
      body: `fields name,game_type,rating,total_rating_count,cover.*,artworks.*,platforms; where name ~ \"${searchText}\"* & game_type = 0 & cover != null & artworks != null; sort total_rating_count desc; limit 4;`,
    });

    if (!response.ok) {
      console.log("External api error:", response);
      return [];
    }

    const data = await response.json();

    return data;
  } catch (err) {
    return [];
    console.error(err);
  }
}

export async function getNewlyReleasedGames() {
  try {
    const response = await fetch("https://api.igdb.com/v4/games", {
      next: { revalidate: 3600 },
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": `${process.env.NEXT_CLIENT_ID}`,
        Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
      },
      body: `fields name,game_type,rating,total_rating_count,cover.*,artworks.*,platforms,first_release_date; where game_type = 0 & first_release_date > ${Math.round(
        Date.now() / 1000
      )}; sort first_release_date desc; limit 5;`,
    });

    if (!response.ok) {
      console.log("External api error:", response);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getMostAnticipatedGames() {
  try {
    const response = await fetch("https://api.igdb.com/v4/games", {
      next: { revalidate: 3600 }, // cache 1 hour
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": `${process.env.NEXT_CLIENT_ID}`,
        Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
      },
      body: `fields name,first_release_date,cover.*,artworks.*,platforms,hypes; where game_type = 0 & first_release_date > ${Math.round(
        Date.now() / 1000
      )}; sort hypes desc; limit 5;`,
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getPopularGames(popType: number = 1, limit: number = 20) {
  try {
    const response = await fetch(
      "https://api.igdb.com/v4/popularity_primitives",
      {
        next: { revalidate: 3600 }, // cache 1 hour
        method: "POST",
        headers: {
          Accept: "application/json",
          "Client-ID": process.env.NEXT_CLIENT_ID!,
          Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
        },
        body: `fields game_id,value,popularity_type,updated_at; sort value desc; limit ${limit}; where popularity_type = ${popType};`,
      }
    );

    const json = await response.json();

    // Fetch full data for each game in parallel
    const popularGames = await Promise.all(
      json
        .filter((d: any) => d.game_id && d.game_id > 0)
        .map((d: any) => fetchGameData(d.game_id))
    );
    return popularGames;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function fetchGameData(game_id: number) {
  const response = await fetch(`https://api.igdb.com/v4/games/`, {
    next: { revalidate: 3600 }, // cache 1 hour
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": process.env.NEXT_CLIENT_ID!,
      Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
    },
    body: `fields name,first_release_date,cover.*,artworks.*,platforms.*,genres.*,hypes,rating,total_rating,total_rating_count; where id = ${game_id};`,
  });

  const data = await response.json();

  return data[0];
}
