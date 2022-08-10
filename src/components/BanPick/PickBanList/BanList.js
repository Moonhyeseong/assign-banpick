import React from 'react';
import styled from 'styled-components';
import BanCard from './BanCard';

const BanList = ({ side, banList, selectedChampion, turn, phaseInfo }) => {
  return (
    <BanListLayout>
      {banList.map((champion, idx) => {
        return (
          <BanCard
            key={idx}
            index={idx}
            champion={champion}
            side={side}
            selectedChampion={selectedChampion}
            banList={banList}
            turn={turn}
            phaseInfo={phaseInfo}
          />
        );
      })}
    </BanListLayout>
  );
};

export default BanList;

const BanListLayout = styled.div`
  position: absolute;
  display: flex;
  bottom: 4px;
`;
