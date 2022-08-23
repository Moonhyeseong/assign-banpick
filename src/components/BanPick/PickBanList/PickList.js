import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PickCard from './PickCard';
import BanList from './BanList';

const PickList = ({
  banPickList: { banList, pickList },
  side,
  selectedChampion,
  turn,
  phaseInfo,
  phaseCounter,
  leftTime,
  postBanPickList,
}) => {
  const [swapItems, setSwapItems] = useState({
    side: '',
    currentIndex: '',
    replaceIndex: '',
  });

  const swapListItem = useCallback(() => {
    [
      pickList[side][swapItems.currentIndex],
      pickList[side][swapItems.replaceIndex],
    ] = [
      pickList[side][swapItems.replaceIndex],
      pickList[side][swapItems.currentIndex],
    ];
    setSwapItems({
      side: '',
      currentIndex: '',
      replaceIndex: '',
    });
  }, [pickList, side, swapItems.currentIndex, swapItems.replaceIndex]);

  useEffect(() => {
    if (swapItems.replaceIndex !== '') {
      swapListItem();
      postBanPickList();
    }
  });

  return (
    <PickListLayout>
      <PickListWrapper>
        {pickList[side].map((champion, idx) => {
          return (
            <PickCard
              key={idx}
              side={side}
              index={idx}
              champion={champion}
              pickList={pickList[side]}
              phaseInfo={phaseInfo}
              role={ROLE_INFO[idx]}
              selectedChampion={selectedChampion}
              turn={turn}
              swapItems={swapItems}
              setSwapItems={setSwapItems}
              phaseCounter={phaseCounter}
              leftTime={leftTime}
            />
          );
        })}
      </PickListWrapper>
      <BanList
        side={side}
        banList={banList[side]}
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
