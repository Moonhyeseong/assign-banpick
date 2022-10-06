import { GetServerSideProps } from 'next';

import { getGameData, getInitialGameData } from '../../lib/games';
import BanPickSimulator from '../components/BanPick/BanPickSimulator';

const Simulator = ({ game, championList }) => {
  return <BanPickSimulator game={game} championList={championList} />;
};

export default Simulator;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const gameId = params?.id?.toString();

  // const [game, championList] = await Promise.all([
  //   getGameData(gameId),
  //   getChampionList(gameId),
  // ]);

  // const gamedata = await getGameData(gameId);
  // console.log(gamedata.game);

  // const championList = await getChampionList();

  const initalGameData = await getInitialGameData(gameId);

  return {
    props: {
      game: initalGameData.game,
      championList: initalGameData.championList,
    },
  };
};
