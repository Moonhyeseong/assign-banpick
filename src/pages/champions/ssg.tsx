import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { RenderTestLayout, ChampionDataCard, ChampionName } from './index';

const Ssg = ({ championData }) => {
  const championList = Object.values(championData);

  return (
    <RenderTestLayout>
      <Head>
        {championList ? (
          <title>Render Test | SSG</title>
        ) : (
          <title>Loading...</title>
        )}
      </Head>
      {championList.map((champion: any) => {
        return (
          <ChampionDataCard key={champion.key}>
            <a
              href={`https://lol.ps/ko/champ/${champion.key}/statistics/`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                width="170"
                height="300"
                alt="champion"
              />
              <ChampionName>{champion.name}</ChampionName>
            </a>
          </ChampionDataCard>
        );
      })}
    </RenderTestLayout>
  );
};

export default Ssg;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/game/champions`
  );
  const championData = await res.json();

  return { props: { championData: championData } };
};
