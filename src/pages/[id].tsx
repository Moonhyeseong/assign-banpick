import { GetServerSideProps } from 'next';

import { getGameData, getChampionList } from '../../lib/games';
import BanPickSimulator from '../components/BanPick/BanPickSimulator';

const Simulator = ({ championList }) => {
  return <BanPickSimulator championList={championList} />;
};

export default Simulator;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // const gameId = params?.id?.toString();

  // console.log('gameId', gameId);

  // const game = await getGameData(gameId);

  const championList = await getChampionList();

  return {
    props: { championList },
  };
};
