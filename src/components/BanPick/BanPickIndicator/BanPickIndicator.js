import React, { useEffect, useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import Timer from './Timer';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../../../context/socket';

const BanPickIndicator = ({
  simulatorFormData: { blue, red, mode, time },
  phaseTitle,
  leftTime,
  setLeftTime,
  isPlayersReady,
  playerList,
  gameId,
}) => {
  const [gameInfo, setGameInfo] = useState();
  const socket = useContext(SocketContext);

  const params = useParams();

  const notReadyPlayers = side => {
    const teamSide = side;
    return (
      playerList &&
      playerList[teamSide].length -
        playerList[teamSide].filter(element => '' === element).length
    );
  };

  socket.on('gmaeID', payload => {
    console.log(payload);
    sessionStorage.setItem('GAME_ID', payload);
  });

  useEffect(() => {
    gameId &&
      fetch(`http://192.168.0.117:8080/game/info/${gameId}`)
        .then(res => res.json())
        .then(res => setGameInfo(res));
  }, [gameId]);

  return (
    <IndicatorLayout>
      <TeamInfo side="blue">
        <TeamName side="blue">
          <TeamSide>BLUE</TeamSide>
          {params.id ? gameInfo?.blueTeam : blue}{' '}
          {isPlayersReady ||
            `(${notReadyPlayers('blue')}/${playerList?.blue.length})`}
        </TeamName>
      </TeamInfo>
      {isPlayersReady && (
        <TimerContainer>
          <PatchVersion> Patch 12.5.1</PatchVersion>
          <LeftTime>
            {gameInfo?.timer ? (
              <Timer leftTime={leftTime} setLeftTime={setLeftTime} />
            ) : (
              ':∞'
            )}
          </LeftTime>

          <PhaseInfo>{phaseTitle()}</PhaseInfo>
        </TimerContainer>
      )}

      <TeamInfo side="red">
        <TeamName side="blue">
          <TeamSide>RED</TeamSide>
          {isPlayersReady ||
            `(${notReadyPlayers('red')}/${playerList?.red.length})`}{' '}
          {params.id ? gameInfo?.redTeam : red}
        </TeamName>
      </TeamInfo>
    </IndicatorLayout>
  );
};

export default BanPickIndicator;

const IndicatorLayout = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
  width: 100%;
  height: 100px;
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
