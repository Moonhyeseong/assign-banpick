import React from 'react';
import styled, { css } from 'styled-components';
import { CONSTDATA } from '../CONSTDATA';
import { useSelector } from 'react-redux';

const WatingPlayer = ({ side, role, mode, playerData }) => {
  const userData = useSelector(state => state.userFormData.userData);
  console.log('playerData', playerData);
  console.log('userData', userData);
  const playerRoleData = userData.role === role || playerData.role === role;
  const playerSideData = userData.side === side || playerData.side === side;
  const userIndicateData =
    playerData.user_id === sessionStorage.getItem('USER_ID');
  console.log(userIndicateData);
  const isOneOneOneMode = CONSTDATA.MODEDATA.oneOnOne === mode;

  return (
    <PlayerCard role={role}>
      {playerSideData && playerRoleData ? (
        <PlayerName side={side} userIndicateData={userIndicateData}>
          {playerData?.name ? playerData?.name : userData.name}
        </PlayerName>
      ) : (
        playerSideData &&
        isOneOneOneMode && (
          <PlayerName side={side} userIndicateData={userIndicateData}>
            {playerData?.name ? playerData?.name : userData.name}
          </PlayerName>
        )
      )}

      {playerData?.role && (
        <PlayerRole side={side} userIndicateData={userIndicateData}>
          {role}
        </PlayerRole>
      )}
      {playerData.isReady && <ReadyText>Ready!</ReadyText>}
    </PlayerCard>
  );
};

export default WatingPlayer;

const PlayerCard = styled.div`
  position: relative;
  display: felx;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 140px;
  background-color: black;
  border: 2px solid ${props => props.theme.black.black80};
  border-top: none;
`;

const PlayerRole = styled.p`
  position: absolute;
  top: 14px;
  z-index: 10;
  color: white;
  font-size: 16px;
  font-weight: 700;
  opacity: 0.6;

  ${props =>
    props.side === 'red'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `}
  ${props =>
    props.userIndicateData &&
    css`
      opacity: 1;
    `}
`;

const PlayerName = styled.p`
  position: absolute;
  bottom: 12px;
  z-index: 10;
  color: white;

  font-size: 24px;
  font-weight: 700;

  ${props =>
    props.side === 'red'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `}

  ${props =>
    props.isPlayerReady ||
    css`
      /* animation: blink-effect 1s ease-in-out infinite; */
    `}

  ${props =>
    props.userIndicateData
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.6;
        `}
`;

const ReadyText = styled.span`
  font-weight: 700;
  font-size: 40px;
`;
