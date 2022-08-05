import React from 'react';
import styled, { css } from 'styled-components';

const PickCard = ({ position }) => {
  return (
    <PickCardLayout>
      <PlayerName position={position}>Player Name</PlayerName>
      <ChampionName position={position}>Champion</ChampionName>
    </PickCardLayout>
  );
};

export default PickCard;

const PickCardLayout = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  border-bottom: 2px solid ${props => props.theme.black.black80};
`;

const PlayerName = styled.p`
  position: absolute;
  color: white;
  font-size: 16px;
  bottom: 12px;
  ${props =>
    props.position === 'left'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `}
`;

const ChampionName = styled.p`
  position: absolute;
  bottom: 12px;
  color: white;
  font-size: 24px;
  font-weight: 700;

  ${props =>
    props.position === 'left'
      ? css`
          right: 16px;
        `
      : css`
          left: 16px;
        `}
`;
