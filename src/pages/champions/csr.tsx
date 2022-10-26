import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { BASE_URL } from '../../config';
import { RenderTestLayout, ChampionDataCard, ChampionName } from './index';

const Csr = () => {
  const [championList, setChampionList] = useState(null);

  useEffect(() => {
    const getChampionData = async () => {
      const res = await fetch(`${BASE_URL}:8080/game/champions`);
      const championData = await res.json();
      const championListData = Object.values(championData);

      setChampionList(championListData);
    };
    getChampionData();
  }, []);

  return (
    <RenderTestLayout>
      <Head>
        {championList ? (
          <title>Render Test | CSR</title>
        ) : (
          <title>Loading...</title>
        )}
      </Head>
      {championList?.map((champion: any) => {
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

export default Csr;
