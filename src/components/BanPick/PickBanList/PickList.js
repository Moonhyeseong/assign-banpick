import React from 'react';
import styled from 'styled-components';
import PickCard from './PickCard';
import BanList from './BanList';
const PickList = ({
  banPickList: { banList, pickList },
  side,
  selectedChampion,
  turn,
  phaseInfo,
}) => {
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
