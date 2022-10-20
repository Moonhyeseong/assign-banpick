import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { socket } from '../../../../lib/socket';
import { PHASEDATA } from '../../CONSTDATA/CONSTDATA';

const ChampionCard = ({
  champion,
  name,
  selectedChampions,
  setSelectedChampion,
  phaseCounter,
  isEditable,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (phaseCounter === PHASEDATA.swapPhase || !isEditable) {
      setIsSelected(true);
    } else {
      setIsSelected(selectedChampions.includes(champion));
    }
  }, [champion, isEditable, phaseCounter, selectedChampions]);

  return (
    <ChampionCardLayout
      isSelected={isSelected}
      disabled={isSelected || phaseCounter === PHASEDATA.swapPhase}
      onClick={() => {
        setSelectedChampion(champion);
        socket.emit('selectChampion', {
          gameId: sessionStorage.getItem('GAME_ID'),
          champion: champion,
        });
      }}
    >
      <ChampionIcon>
        <Image
          src={
            champion &&
            `http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion}.png`
          }
          width="80"
          height="80"
          priority
        />
      </ChampionIcon>
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

const ChampionIcon = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid ${props => props.theme.black.black85};
  margin-bottom: 4px;
`;
