import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import WatingList from '../components/WatingRoom/WatingList';

import { CONSTDATA } from '../components/BanPick/CONSTDATA';
import { SocketContext } from '../context/socket';
import { BASE_URL } from '../config';

const WatingRoom = ({
  mode,
  setUserData,
  userData,
  playerList,
  setPlayerList,
  setIsPlayersReady,
}) => {
  const socket = useContext(SocketContext);
  const params = useParams();

  socket.emit('joinRoom', sessionStorage.getItem('GAME_ID'));

  socket.on('join', payload => {
    // alert('참자가자 ');
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

  //선수들이 준비를 하고 있는 상태애서 입장할때
  useEffect(() => {
    sessionStorage.getItem('GAME_ID') &&
      fetch(`${BASE_URL}:8080/list/player/${params.id}`)
        .then(res => res.json())
        .then(res => {
          setTimeout(() => {
            setPlayerList(res);
          }, 10);
        });
  }, [params.id, setPlayerList]);

  return (
    <WatingListLayout>
      <WatingList
        mode={mode}
        side="blue"
        userData={userData}
        playerList={playerList?.blue}
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
