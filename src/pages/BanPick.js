import React from 'react';
import styled from 'styled-components';
import ChampionList from '../components/BanPick/ChampionList/ChampionList';
import PickList from '../components/BanPick/PickBanList/PickList';
import BanPickIndicator from '../components/BanPick/BanPickIndicator';

const BanPick = () => {
  return (
    <BanPickLayout>
      <BanPickIndicator />
      <ListLayout>
        <PickList position="left" />
        <ChampionList />
        <PickList position="right" />
      </ListLayout>
    </BanPickLayout>
  );
};

export default BanPick;

const BanPickLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 870px;
`;

const ListLayout = styled.div`
  display: flex;
  flex-direction: row;
`;
