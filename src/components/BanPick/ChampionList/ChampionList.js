import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChampionCard from './ChampionCard';
import ChampionFilter from './ChampionFilter';

const ChampionList = () => {
  const [championData, setChampionData] = useState([]);
  const championList = Object.values(championData);
  championList.sort((a, b) => a.name.localeCompare(b.name));

  console.log(championList);
  useEffect(() => {
    fetch(
      'https://ddragon.leagueoflegends.com/cdn/12.14.1/data/ko_KR/champion.json'
    )
      .then(response => response.json())
      .then(data => setChampionData(data.data));
  }, []);

  return (
    <ChampionListLayout>
      <ChampionFilter />
      <ListLayout>
        {championList.map((champion, idx) => {
          return <ChampionCard key={idx} champion={champion} />;
        })}
      </ListLayout>
      <SelectBtn>선택</SelectBtn>
    </ChampionListLayout>
  );
};

export default ChampionList;

const ChampionListLayout = styled.div`
  text-align: center;
  height: 100%;
`;

const ListLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 12px;
  padding-left: 32px;
  width: 700px;
  height: 630px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${props => props.theme.white.white50};
  }
`;

const SelectBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 16px;
  width: 280px;
  height: 50px;
  background-color: ${props => props.theme.black.black70};
  border-radius: 20px;

  font-weight: 500;
  font-size: 22px;
`;
