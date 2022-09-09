import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import WatingList from '../components/WatingRoom/WatingList';

import { CONSTDATA } from '../components/CONSTDATA';
import { SocketContext } from '../context/socket';
import { BASE_URL } from '../config';
import LiftUserIndicator from '../components/WatingRoom/LiftUserIndicator';

const WatingRoom = ({ gameData }) => {
  const socket = useContext(SocketContext);

  socket.emit('joinRoom', sessionStorage.getItem('GAME_ID'));

  // const sendReadyEvent = (playerList, gameId) => {
  //   socket.emit('ready', playerList, gameId);
  // };

  // useEffect(() => {
  //   socket.on('ready', payload => {
  //     setPlayerList(payload);
  //   });
  // }, [setPlayerList, playerList, socket]);

  // useEffect(() => {
  //   playerList?.red.indexOf('') === -1 &&
  //     playerList?.blue.indexOf('') === -1 &&
  //     setIsPlayersReady(prev => !prev);
  // }, [playerList, setIsPlayersReady]);

  // useEffect(() => {
  //   if (mode === CONSTDATA.MODEDATA.fiveOnfive) {
  //     setUserData({ ...userData, role: '' });
  //   } else {
  //     setUserData({ ...userData, role: 'solo' });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // //선수들이 준비를 하고 있는 상태애서 입장할때
  // useEffect(() => {
  //   sessionStorage.getItem('GAME_ID') &&
  //     fetch(`${BASE_URL}:8080/list/player/${params.id}`)
  //       .then(res => res.json())
  //       .then(res => {
  //         setTimeout(() => {
  //           setPlayerList(res);
  //         }, 10);
  //       });
  // }, [params.id, setPlayerList]);

  useEffect(() => {}, []);

  return (
    <WatingListLayout>
      <WatingList
        mode={gameData?.mode}
        side="blue"
        userList={gameData?.userList.blue}
      />
      <LiftUserIndicator mode={gameData?.mode} userList={gameData?.userList} />
      <WatingList
        mode={gameData?.mode}
        side="red"
        userList={gameData?.userList.red}
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
