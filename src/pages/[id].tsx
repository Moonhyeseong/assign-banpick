import { GetServerSideProps } from 'next';
import { getGameData } from '../../lib/games';
import BanPickSimulator from '../components/BanPick/BanPickSimulator';

const Simulator = ({ game }) => {
  return <BanPickSimulator game={game} />;
};

export default Simulator;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const gameId: string = query?.id?.toString();

  const initalGameData = await getGameData(gameId);
  //선택된 챔피언 목록

  return {
    props: {
      game: initalGameData,
    },
  };
};
