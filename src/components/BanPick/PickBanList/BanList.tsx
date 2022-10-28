import React from 'react';
import styled from 'styled-components';
import BanCard from './BanCard';
import { SideProps } from '../../types/component.type';

type BanListProps = SideProps & {
  selectedChampion: string;
  banList: string[];
  turn: string;
  phaseInfo: string;
};

const BanList = ({
  side,
  banList,
  selectedChampion,
  turn,
  phaseInfo,
}: BanListProps) => {
  return (
    <BanListLayout>
      {banList.map((champion: string, idx: number) => {
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
