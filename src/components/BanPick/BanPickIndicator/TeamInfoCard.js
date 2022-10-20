import React from 'react';
import styled, { css } from 'styled-components';

const TeamInfoCard = ({ side, gameData }) => {
  const notReadyPlayers = side => {
    return (
      gameData?.userList &&
      gameData?.userList[side].length -
        gameData?.userList[side].filter(element => '' === element).length
    );
  };

  return (
    <TeamInfo side={side}>
      <TeamName side={side}>
        <TeamSide>{side.toUpperCase()}</TeamSide>
        {gameData?.[`${side}TeamName`]}
        {gameData?.isProceeding ||
          `(${notReadyPlayers(side)}/${gameData?.userList?.[side].length})`}
      </TeamName>
    </TeamInfo>
  );
};

export default React.memo(TeamInfoCard);

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
