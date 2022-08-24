import React from 'react';
import styled, { css } from 'styled-components';
import { CONSTDATA } from '../BanPick/CONSTDATA';

const WatingPlayer = ({ side, role, mode, userData, playerData }) => {
  const playerRoleData = userData.role === role;
  const playerSideData = playerData.side || userData.side === side;

  const isOneOneOneMode = CONSTDATA.MODEDATA.oneOnOne === mode;

  const isPlayerReady = playerData !== '';

  return (
    <PlayerCard role={role}>
      {playerRoleData && playerSideData ? (
        <PlayerName side={side}>
          {playerData.name ? playerData.name : userData.name}
        </PlayerName>
      ) : (
        playerSideData &&
        isOneOneOneMode && (
          <PlayerName side={side} isPlayerReady={isPlayerReady}>
            {playerData.name ? playerData.name : userData.name}
          </PlayerName>
        )
      )}

      {!isOneOneOneMode && <PlayerRole side={side}>{role}</PlayerRole>}
      {isPlayerReady && <ReadyText>Ready!</ReadyText>}
      <GradientMask />
    </PlayerCard>
  );
};

export default WatingPlayer;

const PlayerCard = styled.div`
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

  ${props =>
    props.side === 'red'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
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

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }

  ${props =>
    props.isPlayerReady ||
    css`
      animation: blink-effect 1s ease-in-out infinite;
    `}
`;

const ReadyText = styled.span`
  font-weight: 700;
  font-size: 40px;
`;

const GradientMask = styled.div``;
