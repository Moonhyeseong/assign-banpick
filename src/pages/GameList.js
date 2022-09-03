import React, { useState } from 'react';
import styled from 'styled-components';
import ListFillter from '../components/GameList/ListFilter';
import GameRoom from '../components/GameList/GameRoom';
import GameListModal from '../components/Modal/GameListModal';
const GameList = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <GameListLayout>
      {isModalActive && <GameListModal setIsModalActive={setIsModalActive} />}
      <ListFillter setIsModalActive={setIsModalActive} />
      <GameRoomsLayout>
        <GameRoomContainer>
          <GameRoom mode={1} setIsModalActive={setIsModalActive} />
          <GameRoom mode={2} />
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
  height: 80vh;

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
