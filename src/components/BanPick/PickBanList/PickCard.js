import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const PickCard = ({
  side,
  champion,
  pickList,
  role,
  index,
  selectedChampion,
  phaseInfo,
  turn,
}) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const currentIndex = pickList.indexOf('');

  useEffect(() => {
    setIsSelecting(false);
    if (phaseInfo === 'pickList') {
      if (turn === side) setIsSelecting(currentIndex === index);
    }
  }, [currentIndex, index, phaseInfo, side, turn]);

  const imgURL = champion
    ? `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`
    : selectedChampion &&
      `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${selectedChampion}_0.jpg`;

  return (
    <PickCardLayout>
      <PlayerName side={side}>{role}</PlayerName>
      <ChampionName side={side}>
        {champion ? champion : isSelecting && selectedChampion}
      </ChampionName>
      {(isSelecting || champion) && (
        <BackgroundImage side={side} imgURL={imgURL}>
          <GradientMask
            side={side}
            isSelecting={isSelecting}
            champion={champion}
          />
        </BackgroundImage>
      )}
    </PickCardLayout>
  );
};

export default PickCard;

const PickCardLayout = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  border-bottom: 2px solid ${props => props.theme.black.black80};
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.imgURL})`};
  background-repeat: no-repeat;
  background-position: 80% 10%;
  background-size: 350px;

  ${props =>
    props.side === 'blue' &&
    css`
      transform: scaleX(-1); ;
    `}
`;

const GradientMask = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: linear-gradient(
    180deg,
    rgba(19, 19, 16, 0.5) 10%,
    rgba(19, 19, 16, 0.5) 50%
  );

  ${props =>
    props.isSelecting &&
    props.side === 'blue' &&
    !props.champion &&
    css`
      background: linear-gradient(
        to left,
        ${props => props.theme.blue.blueB50} 5%,
        rgba(0, 0, 0, 0)
      );
      animation: blink 1s ease-in-out infinite alternate;
    `};

  ${props =>
    props.isSelecting &&
    props.side === 'red' &&
    !props.champion &&
    css`
      background: linear-gradient(
        to left,
        ${props => props.theme.red.redB50} 5%,
        rgba(0, 0, 0, 0)
      );
      animation: blink 1s ease-in-out infinite alternate;
    `};
`;

const PlayerName = styled.p`
  position: absolute;
  bottom: 12px;
  z-index: 10;
  color: white;
  font-size: 16px;
  font-weight: 700;

  ${props =>
    props.side === 'red'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `}
`;

const ChampionName = styled.p`
  position: absolute;
  bottom: 12px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  z-index: 10;

  ${props =>
    props.side === 'red'
      ? css`
          right: 16px;
        `
      : css`
          left: 16px;
        `}
`;
