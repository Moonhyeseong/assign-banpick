import React from 'react';
import styled, { css } from 'styled-components';

const ChampionCard = ({
  champion,
  banPickList,
  setBanPickList,
  name,
  selectedChampions,
  setSelectedChampion,
}) => {
  const isSelected = selectedChampions.includes(champion);

  const handlePickList = champion => {
    if (!isSelected && banPickList.pickList.blue.length < 5) {
      let prevArr = [...banPickList.pickList.blue];
      prevArr.push(champion);
      setBanPickList({ ...banPickList.pickList, blue: prevArr });
    }
  };

  const handleBanList = () => {
    if (!isSelected && banPickList.banList.blue.length < 5) {
      let prevArr = [...banPickList.banList.blue];
      prevArr.push(champion);
      setBanPickList({ ...banPickList.banList, blue: prevArr });
    }
  };

  return (
    <ChampionCardLayout
      isSelected={isSelected}
      onClick={() => {
        handlePickList(champion);
        setSelectedChampion(champion);
      }}
    >
      <ChampionIcon
        src={
          champion &&
          `http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${champion}.png`
        }
      />
      {name}
    </ChampionCardLayout>
  );
};

export default ChampionCard;

const ChampionCardLayout = styled.div`
  width: 80px;
  height: 110px;
  cursor: pointer;
  text-align: center;
  color: ${props => props.theme.white.white80};
  font-size: 12px;
  font-weight: 600;

  :hover {
    opacity: 0.2;
  }

  ${props =>
    props.isSelected &&
    css`
      opacity: 0.2;
    `}
`;

const ChampionIcon = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid ${props => props.theme.black.black85};
  margin-bottom: 4px;
`;
