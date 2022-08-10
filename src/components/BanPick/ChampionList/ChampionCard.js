import React from 'react';
import styled, { css } from 'styled-components';

const ChampionCard = ({
  champion,
  name,
  selectedChampions,
  setSelectedChampion,
  phaseCounter,
}) => {
  const isSelected = selectedChampions.includes(champion);

  return (
    <ChampionCardLayout
      isSelected={isSelected}
      disabled={isSelected || phaseCounter === 4}
      onClick={() => {
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

const ChampionCardLayout = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 110px;
  color: ${props => props.theme.white.white80};
  font-size: 12px;
  font-weight: 600;

  cursor: pointer;

  :hover {
    opacity: 0.2;
  }

  ${props =>
    props.isSelected &&
    css`
      opacity: 0.2;
      cursor: default;
    `}
`;

const ChampionIcon = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid ${props => props.theme.black.black85};
  margin-bottom: 4px;
`;
