"use server";
export async function getNewlyReleasedGames() {
  try {
    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": `${process.env.NEXT_CLIENT_ID}`,
        Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
      },
      body: `fields name,game_type,rating,cover.*,artworks.*,platforms; where game_type = 0 & first_release_date < ${Math.round(
        Date.now() / 1000
      )} & cover != null & artworks != null; sort first_release_date desc; limit 3;`,
    });

    const data = await response.json();
    console.log("newly released games:", data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getMostAnticipatedGames() {
  try {
    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": `${process.env.NEXT_CLIENT_ID}`,
        Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
      },
      body: `fields name,first_release_date,cover.*,artworks.*,platforms,hypes; where game_type = 0 & first_release_date > ${Math.round(
        Date.now() / 1000
      )} & cover != null & artworks != null; sort hypes desc; limit 5;`,
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getPopularGames(popType: number) {
  try {
    const response = await fetch(
      "https://api.igdb.com/v4/popularity_primitives",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Client-ID": process.env.NEXT_CLIENT_ID!,
          Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
        },
        body: `fields game_id,value,popularity_type,updated_at; sort value desc; limit 18; where popularity_type = ${popType};`,
      }
    );

    const json = await response.json();

    // Fetch full data for each game in parallel
    const popularGames = await Promise.all(
      json.map((data: { game_id: number }) => fetchGameData(data.game_id))
    );

    console.log("primitive:", popType);
    console.log("games:", popularGames);
    return popularGames;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function fetchGameData(game_id: number) {
  const response = await fetch(`https://api.igdb.com/v4/games/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": process.env.NEXT_CLIENT_ID!,
      Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
    },
    body: `fields name,first_release_date,cover.*,artworks.*,platforms,hypes,rating,total_rating,total_rating_count; where id = ${game_id} & cover != null & artworks != null;`,
  });

  const data = await response.json();

  return data[0];
}
