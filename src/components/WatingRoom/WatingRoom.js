import { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import WatingList from './WatingList';
import LiftUserIndicator from './LiftUserIndicator';
import { socket } from '../../../lib/socket';

const WatingRoom = ({ gameData, setGameData }) => {
  //유저 준비 여부 검사
  useEffect(() => {
    if (gameData) {
      const blueTeamUserList = gameData?.userList?.blue;
      const redTeamUserList = gameData?.userList?.red;
      const allUserList = [...blueTeamUserList, ...redTeamUserList];

      const userCount = allUserList.length;
      const preparedUsers = allUserList.filter(user => user.isReady);

      if (userCount === preparedUsers.length) {
        socket.emit('startSimulator', sessionStorage.getItem('GAME_ID'));
      }
    }
  }, [gameData, gameData?.userList]);

  useEffect(() => {
    socket.emit('userJoinWatingRoom', {
      gameId: sessionStorage.getItem('GAME_ID'),
      userId: sessionStorage.getItem('USER_ID'),
    });
  }, []);

  return (
    <WatingListLayout>
      <Head>
        <title>BanPick Simulator | Wating Room</title>
      </Head>
      <WatingList
        mode={gameData?.mode}
        side="blue"
        userList={gameData?.userList?.blue}
        setGameData={setGameData}
      />
      <LiftUserIndicator mode={gameData?.mode} userList={gameData?.userList} />
      <WatingList
        mode={gameData?.mode}
        side="red"
        userList={gameData?.userList?.red}
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
