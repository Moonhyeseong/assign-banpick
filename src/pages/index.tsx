import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import GameList from '../components/GameList/GameList';
import { getAllGames } from '../../lib/games';
import { gameData } from '../../lib/gameData';

export default function Home({
  gameData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <GameList gameData={gameData} />;
}

export const getStaticProps: GetStaticProps = async () => {
  // const games = getAllGames();
  return {
    props: {
      gameData,
    },
  };
};
