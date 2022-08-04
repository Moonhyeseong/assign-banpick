import React from 'react';
import styled, { css } from 'styled-components';

const BanPickIndicator = () => {
  return (
    <IndicatorLayout>
      <TeamInfo side="blue">
        <TeamName side="blue">
          <TeamSide>BLUE</TeamSide>TEAM1
        </TeamName>
      </TeamInfo>
      <Timer>
        <PatchVersion> Patch 12.4</PatchVersion>
        <LeftTime>:17</LeftTime>
        <PaseInfo>1st BAN PHASE</PaseInfo>
      </Timer>
      <TeamInfo side="red">
        <TeamName side="blue">
          <TeamSide>RED</TeamSide>TEAM2
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

const Timer = styled.div`
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

const LeftTime = styled.p`
  font-size: 50px;
  text-align: center;
  color: ${props => props.theme.white.white100};
  font-weight: 700;
`;

const PaseInfo = styled.p`
  padding: 4px;
  background-color: ${props => props.theme.black.black93};
  text-align: center;
  font-weight: 700;
`;
