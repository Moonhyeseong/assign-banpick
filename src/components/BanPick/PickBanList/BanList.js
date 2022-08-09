import React from 'react';
import styled from 'styled-components';
import BanCard from './BanCard';

const BanList = ({ side, banList, selectedChampion }) => {
  return (
    <BanListLayout>
      {banList.map((champion, idx) => {
        return (
          <BanCard
            key={idx}
            champion={champion}
            side={side}
            selecting={true}
            selectedChampion={selectedChampion}
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
