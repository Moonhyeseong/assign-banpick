import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PickCard from './PickCard';
import BanList from './BanList';

const PickList = ({
  banPickList: { ban, pick },
  side,
  selectedChampion,
  turn,
  phaseInfo,
  phaseCounter,
  leftTime,
  postBanPickList,
  playerList,
}) => {
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
        {pick[side].map((champion, idx) => {
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
              leftTime={leftTime}
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

export default PickList;

const PickListLayout = styled.div`
  position: relative;
  background-color: #090909;
  width: 330px;
  height: 776px;
`;

const PickListWrapper = styled.div``;

const ROLE_INFO = ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT'];
