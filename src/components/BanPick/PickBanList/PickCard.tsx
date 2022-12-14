import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useAppSelector } from '../../../app/hooks';
import { PHASEDATA } from '../../CONSTDATA/CONSTDATA';
import { SwapItems } from './PickList';
import { SideProps, RoleProps } from '../../types/component.type';

type PickCardProps = SideProps &
  RoleProps & {
    champion: string;
    pickList: string[];
    index: number;
    selectedChampion: string;
    phaseInfo: string;
    turn: string;
    swapItems: SwapItems;
    setSwapItems: any;
    phaseCounter: number;
    isFinish: boolean;
    playerData: any;
  };

type PickCardLayoutProps = {
  isSwapPhase: boolean;
};

type GradientMaskProps = SideProps & {
  isSelecting: boolean;
  champion: string;
};

type BackgroundImageProps = SideProps & {
  imgURL: null | string;
};

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
  isFinish,
  playerData,
}: PickCardProps) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [championId, setChampionId] = useState(null);
  const userData = useAppSelector(state => state.userFormData.userData);
  const currentIndex = pickList.indexOf('');
  const isSwapPhase = phaseCounter === PHASEDATA.swapPhase && !isFinish;

  const imgURL = champion
    ? `http://ddragon.leagueoflegends.com/cdn/img/champion/centered/${champion}_0.jpg`
    : selectedChampion &&
      `http://ddragon.leagueoflegends.com/cdn/img/champion/centered/${selectedChampion}_0.jpg`;

  const handleSwapItems = () => {
    if (userData?.side === side || userData?.side === 'solo') {
      if (swapItems.currentIndex === '') {
        setSwapItems({ ...swapItems, side: side, currentIndex: index });
      } else {
        setSwapItems({ ...swapItems, side: side, replaceIndex: index });
      }
    }
  };

  useEffect(() => {
    setIsSelecting(false);
    if (phaseInfo === 'pick') {
      if (turn === side) setIsSelecting(currentIndex === index);
    }
  }, [currentIndex, index, phaseInfo, side, turn]);

  useEffect(() => {
    async function getChampionId(champion: string) {
      const res = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion/${champion}.json`
      );
      const championData = await res.json();
      setChampionId(championData.data[champion].key);
    }
    isFinish && getChampionId(champion);
  }, [champion, isFinish]);

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
      {isFinish && (
        <GoToLolpsBtnBackground>
          <GoToLolps
            href={`https://lol.ps/ko/champ/${championId}/statistics/?lane=0&region=0&tier=2&version=58`}
            target="_blank"
          >
            ????????? ?????? ????????????
          </GoToLolps>
        </GoToLolpsBtnBackground>
      )}
    </PickCardLayout>
  );
};

export default PickCard;

const PickCardLayout = styled.div<PickCardLayoutProps>`
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

const BackgroundImage = styled.div<BackgroundImageProps>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.imgURL})`};
  background-repeat: no-repeat;
  background-position: 90% 0%;
  background-size: cover;

  ${props =>
    props.side === 'blue' &&
    css`
      transform: scaleX(-1); ;
    `};
`;

const GradientMask = styled.div<GradientMaskProps>`
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

const PlayerName = styled.p<SideProps>`
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

const PlayerRole = styled.p<SideProps>`
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

const ChampionName = styled.p<SideProps>`
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

const GoToLolpsBtnBackground = styled.div`
  opacity: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;
  z-index: 1;

  :hover {
    opacity: 1;
    z-index: 1000;
  }
`;

const GoToLolps = styled.a`
  font-size: 24px;
  font-weight: 700;

  cursor: pointer;
`;
