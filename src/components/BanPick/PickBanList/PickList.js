import React from 'react';
import styled from 'styled-components';
import PickCard from './PickCard';
import BanList from './BanList';
const PickList = ({ side, pickList, banList, phase }) => {
  return (
    <PickListLayout>
      <EmptyCardsWrapper>
        {DEFAULT_LIST.map((player, idx) => {
          return <PickCard key={idx} side={side} player={player} />;
        })}
      </EmptyCardsWrapper>
      <PickListWrapper>
        {pickList[side].map((champion, idx) => {
          return (
            <PickCard side={side} key={idx} champion={champion} id={idx} />
          );
        })}
      </PickListWrapper>
      <BanList side={side} banList={banList[side]} phase={phase} />
    </PickListLayout>
  );
};

export default PickList;

const PickListLayout = styled.div`
  position: relative;
  background-color: #090909;
  width: 330px;
  height: 780px;
`;

const EmptyCardsWrapper = styled.div`
  position: absolute;
  width: 330px;
`;

const PickListWrapper = styled.div``;

const DEFAULT_LIST = [
  { role: 'TOP' },
  { role: 'JUNGLE' },
  { role: 'MID' },
  { role: 'ADC' },
  { role: 'SUPPORT' },
];
