import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import WatingList from '../components/WatingRoom/WatingList';
import { CONSTDATA } from '../components/CONSTDATA';
import { SocketContext } from '../context/socket';
import { BASE_URL } from '../config';
import LiftUserIndicator from '../components/WatingRoom/LiftUserIndicator';

const WatingRoom = ({ gameData, setGameData }) => {
  const socket = useContext(SocketContext);

  socket.emit('joinRoom', sessionStorage.getItem('GAME_ID'));

  useEffect(() => {
    let blueTeamIsReady;
    let redTeamIsReady;
    if (gameData) {
      for (let user of gameData?.userList.blue) {
        blueTeamIsReady = user.isReady;
      }

      for (let user of gameData?.userList.red) {
        redTeamIsReady = user.isReady;
      }
    }

    if (blueTeamIsReady && redTeamIsReady) {
      socket.emit('start-simulator', sessionStorage.getItem('GAME_ID'));
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
