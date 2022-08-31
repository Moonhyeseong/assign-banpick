import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { CONSTDATA } from '../CONSTDATA';
import { BASE_URL } from '../../../config';
const PickCard = ({
  side,
  champion,
  pickList,
  role,
  index,
  selectedChampion,
  phaseInfo,
  turn,
  swapItems,
  setSwapItems,
  phaseCounter,
  leftTime,
  playerData,
  userData,
}) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [playerInfo, setPlayerInfo] = useState();
  console.log(playerInfo);
  const currentIndex = pickList.indexOf('');
  const isSwapPhase =
    phaseCounter === CONSTDATA.PHASEDATA.swapPhase && leftTime > 0;

  const imgURL = champion
    ? `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`
    : selectedChampion &&
      `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${selectedChampion}_0.jpg`;

  const handleSwapItems = () => {
    if (userData.side === side) {
      if (swapItems.currentIndex === '') {
        setSwapItems({ ...swapItems, side: side, currentIndex: index });
      } else {
        setSwapItems({ ...swapItems, side: side, replaceIndex: index });
      }
    }
  };

  useEffect(() => {
    setIsSelecting(false);
    if (phaseInfo === 'pickList') {
      if (turn === side) setIsSelecting(currentIndex === index);
    }
  }, [currentIndex, index, phaseInfo, side, turn]);

  useEffect(() => {
    fetch(`${BASE_URL}:8080/user/${localStorage.getItem('USER_ID')}`)
      .then(res => res.json())
      .then(res => setPlayerInfo(res));
  }, []);

  return (
    <PickCardLayout
      isSwapPhase={isSwapPhase}
      onClick={() => {
        isSwapPhase && handleSwapItems();
      }}
    >
      {playerData?.role === role && (
        <PlayerName side={side}>{playerData?.name}</PlayerName>
      )}

      <PlayerRole side={side}>{role}</PlayerRole>
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
      {isSwapPhase &&
        swapItems.currentIndex !== index &&
        swapItems.currentIndex !== '' && (
          <SwapBackground>
            <SwapIconWrapper
              onClick={() => {
                handleSwapItems();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="50"
              >
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
              </svg>
            </SwapIconWrapper>
          </SwapBackground>
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

  ${props =>
    props.isSwapPhase &&
    css`
      cursor: pointer;
    `}
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
      animation: blink 0.5s ease-in-out infinite alternate;
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
      animation: blink 0.5s ease-in-out infinite alternate;
    `};
`;

const PlayerName = styled.p`
  position: absolute;
  bottom: 12px;
  z-index: 10;
  color: white;
  font-size: 26px;
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

const PlayerRole = styled.p`
  position: absolute;
  top: 14px;
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
  font-size: 26px;
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

const SwapBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  width: 100%;
  height: 100%;
`;

const SwapIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
