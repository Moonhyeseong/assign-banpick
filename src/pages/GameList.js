import React from 'react';
import styled from 'styled-components';
import ListFillter from '../components/GameList/ListFillter';
import GameRoom from '../components/GameList/GameRoom';

const GameList = () => {
  return (
    <GameListLayout>
      <ListFillter />
      <GameRoomsLayout>
        <GameRoomContainer>
          <GameRoom />
          <GameRoom />
          <GameRoom />
          <GameRoom />
          <GameRoom />
          <GameRoom />
          <GameRoom />
          <GameRoom />
          <GameRoom />
        </GameRoomContainer>
      </GameRoomsLayout>
    </GameListLayout>
  );
};

export default GameList;

const GameListLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

const GameRoomsLayout = styled.div`
  text-align: center;
  width: 100%;
  height: 800px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${props => props.theme.white.white80};
  }
`;

const GameRoomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 16px;
  width: 1332px;
  margin: auto;
  margin-top: 16px;
`;
