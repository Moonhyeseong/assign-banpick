import { GetServerSideProps } from 'next';
import { getGameData } from '../../lib/games';
import BanPickSimulator from '../components/BanPick/BanPickSimulator';

const Simulator = ({ game }) => {
  return <BanPickSimulator game={game} />;
};

export default Simulator;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const gameId: string = query?.id?.toString();

  try {
    const initalGameData = await getGameData(gameId);
    if (initalGameData.statusCode === 500) {
      return { notFound: true };
    }
    return { props: { game: initalGameData } };
  } catch {
    return { notFound: true };
  }
};
