/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { UUID } from "crypto";

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

export async function getGameById(id: number) {
  try {
    const language_support_field =
      "language_supports.language.*,language_supports.language_support_type.*";
    const involved_companies_field =
      "involved_companies.company.*, involved_companies.publisher, involved_companies.developer";

    const ratings_field =
      "rating,hypes,aggregated_rating,rating,rating_count,aggregated_rating_count,total_rating,total_rating_count";

    const age_rating_field = `age_ratings.*, age_ratings.rating_category.*, age_ratings.rating_content_descriptions.*`;

    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": `${process.env.NEXT_CLIENT_ID}`,
        Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
      },
      body: `fields id,game_localizations,similar_games.*,storyline,similar_games.cover.*,dlcs.*, dlcs.cover.*,updated_at,websites.*,summary,videos.*,name,${language_support_field},game_engines.*,game_type,game_status,${involved_companies_field},${ratings_field},${age_rating_field},genres.*,themes.*,game_modes.*,parent_game.*,multiplayer_modes.*,player_perspectives.*,cover.*,artworks.*,screenshots.*,platforms.*,first_release_date; where id = ${id};`,
    });

    if (!response.ok) {
      console.log("External api error:", response);
    }
    const data = await response.json();

    await sleep(100000);
    return { ...data[0] };
  } catch (err) {
    console.error(err);
  }
}
export async function getNewlyReleasedGames(limit: number) {
  try {
    const response = await fetch("https://api.igdb.com/v4/games", {
      next: { revalidate: 3600 },
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": `${process.env.NEXT_CLIENT_ID}`,
        Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
      },
      body: `fields name,game_type,rating,total_rating,total_rating_count,cover.*,artworks.*,platforms,first_release_date; where game_type = 0 & first_release_date < ${Math.round(
        Date.now() / 1000
      )}; sort first_release_date desc; limit ${limit};`,
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
      )}; sort hypes desc; limit 6;`,
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

// Utility function to delay execution
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

    console.log("the popular games:", json);

    const popularGames: any[] = [];

    if (Array.isArray(json)) {
      for (const d of json.filter((d: any) => d.game_id && d.game_id > 0)) {
        const gameData = await fetchGameData(d.game_id);
        popularGames.push(gameData);
      }
    }

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
