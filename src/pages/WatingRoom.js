import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WatingList from '../components/WatingRoom/WatingList';
import PlayerForm from '../components/WatingRoom/PlayerForm';
import { CONSTDATA } from '../components/BanPick/CONSTDATA';
import { io } from 'socket.io-client';

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
  gameId,
}) => {
  const socket = io.connect('http://localhost:8080', {
    path: '/socket.io',
    transports: ['websocket'],
  });

  socket.emit('news', '서버야 안녕');
  socket.on('reply', payload => {
    console.log(payload);
  });

  useEffect(() => {
    parseInt(mode) !== parseInt(CONSTDATA.MODEDATA.oneOnOne)
      ? setPlayerList({ blue: ['', '', '', '', ''], red: ['', '', '', '', ''] })
      : setPlayerList({ blue: [''], red: [''] });
  }, [mode, setPlayerList]);

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
        gameId={gameId}
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
