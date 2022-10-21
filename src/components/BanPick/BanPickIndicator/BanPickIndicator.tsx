import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { IGame } from '../../../interfaces/game.interface';
import { MODEDATA } from '../../CONSTDATA/CONSTDATA';
import TeamInfoCard from './TeamInfoCard';
import Timer from './Timer';

type BanPickIndicatorProps = {
  phaseTitle: any;
  leftTime: number;
  gameData: IGame;
  setLeftTime: Dispatch<SetStateAction<number>>;
  initialTime: any;
};

const BanPickIndicator = ({
  phaseTitle,
  leftTime,
  setLeftTime,
  gameData,
  initialTime,
}: BanPickIndicatorProps) => {
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
