import { GetServerSideProps } from 'next';
import { getGameData } from '../../lib/games';

const Simulator = () => {
  return <div>Enter</div>;
};

export default Simulator;

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   console.log(params);

//   // const game = await getGameData(params._id);

//   return {
//     props: null,
//   };
// };
