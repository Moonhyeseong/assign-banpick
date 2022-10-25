import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { BASE_URL } from '../../config';

const Ssr = ({ championData }) => {
  const championList = Object.values(championData);

  return (
    <RenderTestLayout>
      {championList.map((champion: any) => {
        return (
          <ChampionDataCard key={champion.key}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion.id}.png`}
                    width="100"
                    height="100"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </ChampionDataCard>
        );
      })}
    </RenderTestLayout>
  );
};

export default Ssr;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${BASE_URL}:8080/game/champions`);
  const championData = await res.json();

  return { props: { championData: championData } };
};

export const RenderTestLayout = styled.div`
  width: 1360px;
  height: auto;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ChampionDataCard = styled.div``;

// /* -card */
// .flip-card {
//   background-color: transparent;
//   width: 300px;
//   height: 200px;
//   border: 1px solid #f1f1f1;
//   perspective: 1000px; /* Remove this if you don't want the 3D effect */
// }

// /* This container is needed to position the front and back side */
// .flip-card-inner {
//   position: relative;
//   width: 100%;
//   height: 100%;
//   text-align: center;
//   transition: transform 0.8s;
//   transform-style: preserve-3d;
// }

// /* Do an horizontal flip when you move the mouse over the flip box container */
// .flip-card:hover .flip-card-inner {
//   transform: rotateY(180deg);
// }

// /* Position the front and back side */
// .flip-card-front,
// .flip-card-back {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   -webkit-backface-visibility: hidden; /* Safari */
//   backface-visibility: hidden;
// }

// /* Style the front side (fallback if image is missing) */
// .flip-card-front {
//   background-color: #bbb;
//   color: black;
// }

// /* Style the back side */
// .flip-card-back {
//   background-color: dodgerblue;
//   color: white;
//   transform: rotateY(180deg);
// }
