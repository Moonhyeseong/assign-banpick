import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WatingList from '../components/WatingRoom/WatingList';
import PlayerForm from '../components/WatingRoom/PlayerForm';
import { CONSTDATA } from '../components/BanPick/CONSTDATA';
//#######################
//전부 대기실 입장
//입장시 소환사명 입력
//준비 버튼 클릭시 팀 사이드와 유저이름, 인게임 아이디 를 가진 도큐먼드 생성 or 유저정보 ingame 스키마에 추가
const WatingRoom = ({ setIsPlayserReady, mode }) => {
  const [userData, setUserData] = useState({
    side: '',
    name: '',
    role: '',
  });

  useEffect(() => {
    mode === CONSTDATA.MODEDATA.fiveOnfive
      ? setUserData({ side: 'blue', name: '', role: '' })
      : setUserData({ side: '', name: '', role: 'solo' });
  }, [mode]);

  return (
    <WatingListLayout>
      <WatingList mode={mode} side="blue" userData={userData} />
      <PlayerForm mode={mode} setUserData={setUserData} userData={userData} />
      <WatingList mode={mode} side="red" userData={userData} />
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
