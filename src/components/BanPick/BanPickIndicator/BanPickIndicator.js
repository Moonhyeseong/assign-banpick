import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Timer from './Timer';

const BanPickIndicator = ({
  simulatorFormData: { blue, red, mode, time },
  phaseTitle,
  leftTime,
  setLeftTime,
  isPlayersReady,
}) => {
  return (
    <IndicatorLayout>
      <TeamInfo side="blue">
        <TeamName side="blue">
          <TeamSide>BLUE</TeamSide>
          {blue === '' ? 'BLUE TEAM' : blue}
        </TeamName>
      </TeamInfo>
      {isPlayersReady && (
        <TimerContainer>
          <PatchVersion> Patch 12.5.1</PatchVersion>
          <LeftTime>
            {time ? (
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
          {red === '' ? 'RED TEAM' : red}
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
