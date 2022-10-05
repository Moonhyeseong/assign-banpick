import { BASE_URL } from '../src/config';
//전체 게임 리스트 GET
export async function getAllGames() {
  const res = await fetch(`${BASE_URL}:8080/game`);
  const data = await res.json();

  return data;
}

//단일 게임 데이터 GET
export async function getGameData(id: string) {
  const res = id !== undefined && (await fetch(`${BASE_URL}:8080/game/${id}`));
  const data = await res.json();
  return data;
}

export async function getChampionList() {
  const res = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/12.16.1/data/ko_KR/champion.json'
  );
  const data = await res.json();
  return data;
}
