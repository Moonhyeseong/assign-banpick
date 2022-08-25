import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import WatingList from '../components/WatingRoom/WatingList';
import PlayerForm from '../components/WatingRoom/PlayerForm';
import { CONSTDATA } from '../components/BanPick/CONSTDATA';
import { SocketContext } from '../context/socket';

//#######################
//전부 대기실 입장
//입장시 소환사명 입력
//준비 버튼 클릭시 팀 사이드와 유저이름, 인게임 아이디 를 가진 도큐먼드 생성 or 유저정보 ingame 스키마에 추가

//identifier
const WatingRoom = ({
  mode,
  setUserData,
  userData,
  playerList,
  setPlayerList,
  setIsPlayersReady,
}) => {
  const socket = useContext(SocketContext);

  socket.emit('news', '유저 입장');

  socket.emit('joinRoom', sessionStorage.getItem('GAME_ID'));

  socket.on('join', payload => {
    console.log(payload);
  });

  socket.on('news', payload => {
    console.log(payload);
  });

  const sendReadyEvent = (playerList, gameId) => {
    socket.emit('ready', playerList, gameId);
  };

  useEffect(() => {
    socket.on('ready', payload => {
      setPlayerList(payload);
    });
  }, [setPlayerList, playerList, socket]);

  useEffect(() => {
    playerList?.red.indexOf('') === -1 &&
      playerList?.blue.indexOf('') === -1 &&
      setIsPlayersReady(prev => !prev);
  }, [playerList, setIsPlayersReady]);

  useEffect(() => {
    if (mode === CONSTDATA.MODEDATA.fiveOnfive) {
      setUserData({ ...userData, role: '' });
    } else {
      setUserData({ ...userData, role: 'solo' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WatingListLayout>
      <WatingList
        mode={mode}
        side="blue"
        userData={userData}
        playerList={playerList?.blue}
      />
      <PlayerForm
        mode={mode}
        setUserData={setUserData}
        userData={userData}
        playerList={playerList}
        setPlayerList={setPlayerList}
        sendReadyEvent={sendReadyEvent}
      />
      <WatingList
        mode={mode}
        side="red"
        userData={userData}
        playerList={playerList?.red}
      />
    </WatingListLayout>
  );
};

export default WatingRoom;

const WatingListLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 776px;
`;
