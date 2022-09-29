import { BASE_URL } from '../src/config';
//전체 게임 리스트 GET
export async function getAllGames() {
  const res = await fetch(`${BASE_URL}:8080/game`);
  const data = await res.json();

  return data;
}

//단일 게임 데이터 GET
export async function getGameData(id: string) {
  const res = await fetch(`${BASE_URL}:8080/game/${id}`);
  const data = await res.json();
  return data;
}

// //게임 id별 path 리턴
// export async function getAllGameIds() {
//   const res = await fetch(`${BASE_URL}:8080/game`);
//   const data = await res.json();

//   return data.map(game => {
//     return {
//       params: {
//         id: game._id,
//       },
//     };
//   });
// }
