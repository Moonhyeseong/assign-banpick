import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import GameList from '../components/GameList/GameList';
import { getAllGames } from '../../lib/games';

export default function Home({
  gameData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <GameList gameData={gameData} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const gameData = await getAllGames();

  return {
    props: { gameData },
  };
};
