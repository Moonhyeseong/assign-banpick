import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChampionCard from './ChampionCard';
import ChampionFilter from './ChampionFilter';

const ChampionList = ({
  setBanPickList,
  banPickList,
  phaseCounter,
  setSelectedChampion,
}) => {
  const [championData, setChampionData] = useState([]);
  const [search, setSearch] = useState('');
  const championList = Object.values(championData);
  championList.sort((a, b) => a.name.localeCompare(b.name));

  const searchList = championList.filter(champion => {
    return (
      champion.name.includes(search) ||
      champion.id.toLowerCase().includes(search.toLowerCase())
    );
  });

  const selectedChampions = [
    ...banPickList.banList.red,
    ...banPickList.banList.blue,
    ...banPickList.pickList.red,
    ...banPickList.pickList.blue,
  ];

  useEffect(() => {
    fetch(
      'https://ddragon.leagueoflegends.com/cdn/12.14.1/data/ko_KR/champion.json'
    )
      .then(response => response.json())
      .then(data => setChampionData(data.data));
  }, []);

  return (
    <ChampionListLayout>
      <ChampionFilter search={search} setSearch={setSearch} />
      <ListLayout>
        {searchList.map(champion => {
          return (
            <ChampionCard
              key={champion.key}
              champion={champion.id}
              name={champion.name}
              banPickList={banPickList}
              setBanPickList={setBanPickList}
              selectedChampions={selectedChampions}
              setSelectedChampion={setSelectedChampion}
            />
          );
        })}
      </ListLayout>
      {
        //선택 버튼 활성화 - push 되어야할 순서의 해당 인덱스가 채워져 있을때 버튼 활성화
      }
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
  align-content: flex-start;
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
  border-radius: 25px;

  font-weight: 500;
  font-size: 22px;
`;
