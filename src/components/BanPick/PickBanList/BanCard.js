import React from 'react';
import styled, { css } from 'styled-components';

const BanCard = ({ champion, side, selecting }) => {
  const imgURL =
    champion &&
    `http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${champion}.png`;
  return (
    <BanCardLayout imgURL={imgURL}>
      <GradientMask side={side} selecting={selecting} champion={champion} />
    </BanCardLayout>
  );
};

export default BanCard;

const BanCardLayout = styled.div`
  width: 66px;
  height: 66px;
  border: 1px solid ${props => props.theme.black.black85};
  background-image: ${props => `url(${props.imgURL})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const GradientMask = styled.div`
  width: 100%;
  height: 100%;

  ${props =>
    props.side === 'blue' &&
    props.selecting &&
    !props.champion &&
    css`
      background: linear-gradient(
        to top,
        ${props => props.theme.blue.blueB40} 5%,
        rgba(0, 0, 0, 0)
      );
      animation: blink 1s ease-in-out infinite alternate;
    `}

  ${props =>
    props.side === 'red' &&
    props.selecting &&
    !props.champion &&
    css`
      background: linear-gradient(
        to top,
        ${props => props.theme.red.redB40} 5%,
        rgba(0, 0, 0, 0)
      );
      animation: blink 1s ease-in-out infinite alternate;
    `}

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
