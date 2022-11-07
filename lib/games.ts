//전체 게임 리스트 GET
export async function getAllGames() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/game`
  );
  const data = await res.json();

  return data;
}

//단일 게임 데이터 GET
export async function getGameData(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/game/${id}`
  );
  const data = await res.json();
  return data;
}

export async function getChampionList() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/game/champion`
  );
  const data = await res.json();
  return data;
}

//초기 게임 데이터
export async function getInitialGameData(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/game/initalGameData/${id}`
  );
  const data = await res.json();
  return data;
}
