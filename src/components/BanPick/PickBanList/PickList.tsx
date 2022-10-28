import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PickCard from './PickCard';
import BanList from './BanList';
import { BanPickList } from '../../../interfaces/game.interface';
import { IUser } from '../../../interfaces/user.interface';
import { SideProps } from '../../types/component.type';

export type SwapItems = SideProps & {
  currentIndex: number | string;
  replaceIndex: number | string;
};

type PickListProps = SideProps & {
  banPickList: BanPickList;
  selectedChampion: string;
  turn: string;
  phaseInfo: string;
  phaseCounter: number;
  isFinish: boolean;
  postBanPickList: () => void;
  playerList: IUser[];
};

const PickList = ({
  banPickList: { ban, pick },
  side,
  selectedChampion,
  turn,
  phaseInfo,
  phaseCounter,
  isFinish,
  postBanPickList,
  playerList,
}: PickListProps) => {
  const [swapItems, setSwapItems] = useState({
    side: '',
    currentIndex: '',
    replaceIndex: '',
  });

  const swapListItem = useCallback(() => {
    [pick[side][swapItems.currentIndex], pick[side][swapItems.replaceIndex]] = [
      pick[side][swapItems.replaceIndex],
      pick[side][swapItems.currentIndex],
    ];
    setSwapItems({
      side: '',
      currentIndex: '',
      replaceIndex: '',
    });
  }, [pick, side, swapItems.currentIndex, swapItems.replaceIndex]);

  useEffect(() => {
    if (swapItems.replaceIndex !== '') {
      swapListItem();
      postBanPickList();
    }
  });

  return (
    <PickListLayout>
      <PickListWrapper>
        {pick[side].map((champion: string, idx: number) => {
          return (
            <PickCard
              key={idx}
              side={side}
              index={idx}
              champion={champion}
              pickList={pick[side]}
              phaseInfo={phaseInfo}
              role={ROLE_INFO[idx]}
              selectedChampion={selectedChampion}
              turn={turn}
              swapItems={swapItems}
              setSwapItems={setSwapItems}
              phaseCounter={phaseCounter}
              isFinish={isFinish}
              playerData={playerList && playerList[idx]}
            />
          );
        })}
      </PickListWrapper>
      <BanList
        side={side}
        banList={ban[side]}
        selectedChampion={selectedChampion}
        turn={turn}
        phaseInfo={phaseInfo}
      />
    </PickListLayout>
  );
};

export default React.memo(PickList);

const PickListLayout = styled.div`
  position: relative;
  background-color: #090909;
  width: 330px;
  height: 776px;
`;

const PickListWrapper = styled.div``;

const ROLE_INFO = ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT'];
