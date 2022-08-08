import React from 'react';
import styled from 'styled-components';
import BanCard from './BanCard';

const BanList = ({ side, banList }) => {
  return (
    <>
      <EmptyCards>
        {DEFAULT_LIST.map(idx => {
          return <BanCard key={idx} side={side} selecting={true} />;
        })}
      </EmptyCards>
      <BanListLayout>
        {banList.map((champion, idx) => {
          return (
            <BanCard
              key={idx}
              champion={champion}
              side={side}
              selecting={true}
            />
          );
        })}
      </BanListLayout>
    </>
  );
};

export default BanList;

const BanListLayout = styled.div`
  position: absolute;
  display: flex;
  bottom: 8px;
`;

const EmptyCards = styled.div`
  position: absolute;
  display: flex;
  bottom: 8px;
`;

const DEFAULT_LIST = [0, 1, 2, 3, 4];
