export async function getNewlyReleasedGames() {
  try {
    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": "52hlh9173llxwqnwf0bn21bidmbuvy",
        Authorization: "Bearer 066prgyp81ivkciz0b1vktemgdxzkz",
      },
      body: `fields name,rating,cover.*,artworks.*,platforms; where game_type = 0 & first_release_date < ${Math.round(
        Date.now() / 1000
      )}; sort first_release_date desc; limit 5;`,
    });

    const data = await response.json();
    console.log("games data:", data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getMostAnticipatedGames() {}

export async function getPopularGames() {}
