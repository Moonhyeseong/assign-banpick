export async function getAllGames() {
  const res = await fetch('./gameData.json');
  const games = await res.json();
  return games;
}
