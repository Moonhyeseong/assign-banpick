import React from 'react';
import styled from 'styled-components';
import PickCard from './PickCard';
import BanList from './BanList';
const PickList = ({
  side,
  banPickList,
  phase,
  phaseCounter,
  selectedChampion,
}) => {
  return (
    <PickListLayout>
      <PickListWrapper>
        {banPickList.pickList[side].map((champion, idx) => {
          return (
            <PickCard
              key={idx}
              side={side}
              index={idx}
              champion={champion}
              pickList={banPickList.pickList[side]}
              phaseCounter={phaseCounter}
              role={ROLE_INFO[idx]}
              selectedChampion={selectedChampion}
            />
          );
        })}
      </PickListWrapper>
      <BanList
        side={side}
        banList={banPickList.banList[side]}
        phase={phase}
        selectedChampion={selectedChampion}
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
