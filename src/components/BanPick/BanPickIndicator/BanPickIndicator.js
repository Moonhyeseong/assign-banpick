import React from 'react';
import styled from 'styled-components';
import { MODEDATA } from '../../CONSTDATA/CONSTDATA';
import TeamInfoCard from './TeamInfoCard';
import Timer from './Timer';

const BanPickIndicator = ({
  phaseTitle,
  leftTime,
  setLeftTime,
  gameData,
  initialTime,
}) => {
  return (
    <IndicatorLayout>
      <TeamInfoCard side="blue" gameData={gameData} />

      {gameData?.isProceeding ? (
        <TimerContainer>
          <PatchVersion> Patch 12.5.1</PatchVersion>
          <LeftTime>
            {gameData?.timer ? (
              <Timer
                leftTime={leftTime}
                setLeftTime={setLeftTime}
                initialTime={initialTime}
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
            {gameData?.mode === MODEDATA.oneOnOne ? `1 : 1` : `5 : 5`}
          </GameModeText>
        </GameInfoContainer>
      )}

      <TeamInfoCard side="red" gameData={gameData} />
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
