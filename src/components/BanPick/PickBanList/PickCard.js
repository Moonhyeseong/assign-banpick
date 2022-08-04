import React from 'react';
import styled, { css } from 'styled-components';

const PickCard = ({ position }) => {
  return (
    <PickCardLayout>
      <PlayerName position={position}>Player 1</PlayerName>
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
  font-size: 24px;
  bottom: 16px;
  ${props =>
    props.position === 'left'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `}
`;
