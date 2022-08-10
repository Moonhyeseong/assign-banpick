import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const BanCard = ({
  index,
  champion,
  side,
  selectedChampion,
  banList,
  turn,
  phaseInfo,
}) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const currentIndex = banList.indexOf('');

  useEffect(() => {
    setIsSelecting(false);
    if (phaseInfo === 'banList') {
      if (turn === side) {
        setIsSelecting(currentIndex === index);
      }

      if (champion) {
        setIsSelecting(true);
      }
    }
  }, [champion, currentIndex, index, phaseInfo, side, turn]);

  const imgURL = champion
    ? `http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${champion}.png`
    : selectedChampion &&
      `http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${selectedChampion}.png`;

  return (
    <BanCardLayout>
      {(isSelecting || champion) && (
        <BanCardImage imgURL={imgURL}>
          <GradientMask
            side={side}
            isSelecting={isSelecting}
            champion={champion}
            index={index}
          />
        </BanCardImage>
      )}
    </BanCardLayout>
  );
};

export default BanCard;

const BanCardLayout = styled.div`
  position: relative;
  width: 66px;
  height: 66px;
  border: 1px solid ${props => props.theme.black.black85};
`;

const BanCardImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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
    props.isSelecting &&
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
    props.isSelecting &&
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
