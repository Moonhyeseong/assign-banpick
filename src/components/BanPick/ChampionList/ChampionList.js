import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import ChampionCard from './ChampionCard';
import ChampionFilter from './ChampionFilter';
import { CONSTDATA } from '../CONSTDATA';
import { SocketContext } from '../../../context/socket';

const ChampionList = ({
  setBanPickList,
  championData,
  selectedChampion,
  setSelectedChampion,
  selectedChampions,
  handleSelectBtn,
  phaseCounter,
  postBanPickList,
  setTurn,
  setTurnData,
  userData,
  turn,
  setLeftTime,
}) => {
  const [search, setSearch] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const championList = Object.values(championData);
  championList.sort((a, b) => a.name.localeCompare(b.name));

  const searchList = championList.filter(champion => {
    return (
      champion.name.includes(search) ||
      champion.id.toLowerCase().includes(search.toLowerCase())
    );
  });

  const socket = useContext(SocketContext);

  socket.on('banpick', payload => {
    setBanPickList(payload);
    console.log(phaseCounter !== 4);
    //페이즈 정보애따라 setLeftTime 여부 확인
    phaseCounter !== 4 && setLeftTime(30);
  });

  socket.on('updateTurn', turnData => {
    setTurn(turnData.nextTurn);
    setTurnData(turnData.nextTurnData);
  });

  useEffect(() => {
    userData.side !== ''
      ? setIsEditable(userData.side === turn)
      : setIsEditable(true);
  }, [turn, userData.role, userData.side]);

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
              phaseCounter={phaseCounter}
              selectedChampions={selectedChampions}
              setSelectedChampion={setSelectedChampion}
              isEditable={isEditable}
            />
          );
        })}
      </ListLayout>

      <SelectBtn
        selectedChampion={selectedChampion}
        disabled={
          phaseCounter === CONSTDATA.PHASEDATA.swapPhase ||
          selectedChampion === ''
        }
        onClick={() => {
          handleSelectBtn();
          postBanPickList();
        }}
      >
        선택
      </SelectBtn>
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

const SelectBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 16px;
  width: 280px;
  height: 50px;
  background-color: ${props => props.theme.black.black70};
  border-radius: 25px;
  color: white;
  font-weight: 500;
  font-size: 22px;

  ${props =>
    props.disabled
      ? css`
          opacity: 0.3;
        `
      : css`
          cursor: pointer;
        `}
`;
