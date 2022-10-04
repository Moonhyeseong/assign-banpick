import { GetServerSideProps } from 'next';
import { getGameData } from '../../lib/games';

const Simulator = ({ game }) => {
  return <div>Simulator</div>;
};

export default Simulator;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const gameId = params.id.toString();
  const game = await getGameData(gameId);

  return {
    props: { game },
  };
};
