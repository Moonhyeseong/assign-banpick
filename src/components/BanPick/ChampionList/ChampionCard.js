import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { CONSTDATA } from '../../CONSTDATA';
import { SocketContext } from '../../../context/socket';

const ChampionCard = ({
  champion,
  name,
  selectedChampions,
  setSelectedChampion,
  phaseCounter,
  isEditable,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const socket = useContext(SocketContext);

  useEffect(() => {
    if (phaseCounter === CONSTDATA.PHASEDATA.swapPhase || !isEditable) {
      setIsSelected(true);
    } else {
      setIsSelected(selectedChampions.includes(champion));
    }
  }, [champion, isEditable, phaseCounter, selectedChampions]);

  return (
    <ChampionCardLayout
      isSelected={isSelected}
      disabled={isSelected || phaseCounter === CONSTDATA.PHASEDATA.swapPhase}
      onClick={() => {
        setSelectedChampion(champion);
        socket.emit(
          'selectChampion',
          sessionStorage.getItem('GAME_ID'),
          champion
        );
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
