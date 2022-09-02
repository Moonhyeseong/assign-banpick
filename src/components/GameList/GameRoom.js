import React from 'react';
import styled from 'styled-components';

const GameRoom = () => {
  return (
    <GameRoomLayout>
      <GameTitle>방 제목: 빠른 협곡 1:1 초보만</GameTitle>
      <GameIndicator>참여가능</GameIndicator>
      <JoinBtn>JOIN</JoinBtn>
      <CurruntRoomInfo></CurruntRoomInfo>
    </GameRoomLayout>
  );
};

export default GameRoom;

const GameRoomLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 650px;
  height: 200px;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid gray;
`;

const GameIndicator = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  right: 8px;

  color: ${props => props.theme.green.greenMain};
`;

const GameTitle = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: 700;
`;

const CurruntRoomInfo = styled.div`
  display: flex;
`;

const JoinBtn = styled.button`
  position: absolute;
  width: 160px;
  height: 32px;
  bottom: 8px;
  right: 8px;
  color: white;
  border: 3px solid whitesmoke;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
`;
