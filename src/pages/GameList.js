import React from 'react';
import styled from 'styled-components';
import ListFillter from '../components/GameList/ListFillter';

const GameList = () => {
  return (
    <GameListLayout>
      <ListFillter />
    </GameListLayout>
  );
};

export default GameList;

const GameListLayout = styled.div`
  padding: 4px;
`;
