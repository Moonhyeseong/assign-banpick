import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import WatingList from '../components/WatingRoom/WatingList';
import { SocketContext } from '../context/socket';
import LiftUserIndicator from '../components/WatingRoom/LiftUserIndicator';

const WatingRoom = ({ gameData, setGameData }) => {
  const socket = useContext(SocketContext);

  socket.emit('joinRoom', sessionStorage.getItem('GAME_ID'));

  //유저 준비 여부 검사
  useEffect(() => {
    if (gameData) {
      const blueTeamUserList = gameData?.userList.blue;
      const redTeamUserList = gameData?.userList.red;
      const allUserList = [...blueTeamUserList, ...redTeamUserList];

      const userCount = allUserList.length;
      const preparedUsers = allUserList.filter(user => user.isReady);

      if (userCount === preparedUsers.length) {
        socket.emit('start-simulator', sessionStorage.getItem('GAME_ID'));
      }
    }
  }, [gameData, gameData?.userList, socket]);

  return (
    <WatingListLayout>
      <WatingList
        mode={gameData?.mode}
        side="blue"
        userList={gameData?.userList.blue}
        setGameData={setGameData}
      />
      <LiftUserIndicator mode={gameData?.mode} userList={gameData?.userList} />
      <WatingList
        mode={gameData?.mode}
        side="red"
        userList={gameData?.userList.red}
        setGameData={setGameData}
      />
    </WatingListLayout>
  );
};

export default WatingRoom;

const WatingListLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 776px;
`;
