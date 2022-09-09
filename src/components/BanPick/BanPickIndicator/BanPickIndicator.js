import React, { useEffect, useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import Timer from './Timer';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../../../context/socket';
import { BASE_URL } from '../../../config';

const BanPickIndicator = ({
  phaseTitle,
  leftTime,
  setLeftTime,
  isPlayersReady,
  setIsModalActive,
  gameData,
}) => {
  const socket = useContext(SocketContext);

  const notReadyPlayers = side => {
    const teamSide = side;
    return (
      gameData?.userList &&
      gameData?.userList[teamSide].length -
        gameData?.userList[teamSide].filter(element => '' === element).length
    );
  };

  socket.on('gmaeID', payload => {
    sessionStorage.setItem('GAME_ID', payload);
  });

  return (
    <IndicatorLayout>
      <TeamInfo side="blue">
        <TeamName side="blue">
          <TeamSide>BLUE</TeamSide>
          {gameData?.blueTeamName}
          {gameData?.isProceeding ||
            `(${notReadyPlayers('blue')}/${gameData?.userList?.blue.length})`}
        </TeamName>
      </TeamInfo>
      {gameData?.isProceeding ? (
        <TimerContainer>
          <PatchVersion> Patch 12.5.1</PatchVersion>
          <LeftTime>
            <Timer leftTime={leftTime} setLeftTime={setLeftTime} />
          </LeftTime>

          <PhaseInfo>{phaseTitle()}</PhaseInfo>
        </TimerContainer>
      ) : (
        <GameInfoContainer>
          <GameTitleText>방 제목 : {gameData?.title}</GameTitleText>
          <GameModeText>1 : 1</GameModeText>
        </GameInfoContainer>
      )}

      <TeamInfo side="red">
        <TeamName side="blue">
          <TeamSide>RED</TeamSide>
          {gameData?.redTeamName}
          {gameData?.isProceeding ||
            `(${notReadyPlayers('red')}/${gameData?.userList.red.length})`}
        </TeamName>
      </TeamInfo>
    </IndicatorLayout>
  );
};

export default BanPickIndicator;

const IndicatorLayout = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 70px;
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 100%;
  background-color: black;
  padding-top: 4px;
`;

const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  ${props =>
    props.side === 'blue'
      ? css`
          background: linear-gradient(
            to right,
            ${props => props.theme.blue.blueB40},
            black
          );
          text-align: left;
          justify-content: flex-start;
        `
      : css`
          background: linear-gradient(
            to left,
            ${props => props.theme.red.redB40},
            black
          );
          text-align: right;
          justify-content: flex-end;
        `}
`;

const TeamName = styled.div`
  color: white;
  font-size: 32px;
  font-weight: 700;
  padding: 32px;
`;

const TeamSide = styled.p`
  font-size: 16px;
`;

const PatchVersion = styled.p`
  text-align: center;
  color: ${props => props.theme.white.white60};
`;

const LeftTime = styled.div`
  font-size: 50px;
  color: ${props => props.theme.white.white100};
  font-weight: 700;
  text-align: center;
`;

const GameInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  background-color: black;
`;

const GameTitleText = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const GameModeText = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const PhaseInfo = styled.p`
  padding: 4px;
  text-align: center;
  font-weight: 700;
`;

// 타임아웃이 되었을때 루트 컴포넌트에 위치한 handleSelectBtn 함수가 실행
// 밴페이즈일때 밴 리스트에 null 넣기
// 픽 페이즈일때 픽 리스트에 랜덤으로 추출한 챔피언 넣기
// handleSelectBtn함수에서 어느 문자열을 넣을지는 selectedChampion state에 저장된 문자열을 넣는다.
//
