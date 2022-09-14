import React from 'react';
import styled, { css } from 'styled-components';
import { CONSTDATA } from '../../CONSTDATA';
import Timer from './Timer';

const BanPickIndicator = ({
  phaseTitle,
  leftTime,
  setLeftTime,
  gameData,
  curruntTime,
}) => {
  const notReadyPlayers = side => {
    const teamSide = side;
    return (
      gameData?.userList &&
      gameData?.userList[teamSide].length -
        gameData?.userList[teamSide].filter(element => '' === element).length
    );
  };

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
            {gameData?.timer ? (
              <Timer
                leftTime={leftTime}
                setLeftTime={setLeftTime}
                curruntTime={curruntTime}
              />
            ) : (
              '∞'
            )}
          </LeftTime>

          <PhaseInfo>{phaseTitle()}</PhaseInfo>
        </TimerContainer>
      ) : (
        <GameInfoContainer>
          <GameModeText>
            {gameData?.mode === CONSTDATA.MODEDATA.oneOnOne ? `1 : 1` : `5 : 5`}
          </GameModeText>
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
  height: 90px;
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

const GameModeText = styled.p`
  width: 100px;
  font-size: 30px;
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
