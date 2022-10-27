import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { SideProps } from '../../types/component.type';

type BanCardProps = SideProps & {
  index: number;
  champion: string;
  selectedChampion: string;
  banList: string[];
  turn: string;
  phaseInfo: string;
};

type GradientMaskProps = SideProps & {
  isSelecting: boolean;
  isSelected: boolean;
  champion: string;
  index: number;
};

const BanCard = ({
  index,
  champion,
  side,
  selectedChampion,
  banList,
  turn,
  phaseInfo,
}: BanCardProps) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const currentIndex = banList.indexOf('');
  const isSelected = (): boolean => {
    if (champion) {
      return true;
    } else {
      return false;
    }
  };

  const getImgURL = () => {
    if (champion === 'NO DATA') {
      return 'https://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/29.png';
    } else if (champion) {
      return `http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion}.png`;
    } else if (selectedChampion) {
      return `http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${selectedChampion}.png`;
    }
  };

  useEffect(() => {
    setIsSelecting(false);
    if (phaseInfo === 'ban') {
      if (turn === side) {
        setIsSelecting(currentIndex === index);
      }

      if (champion) {
        setIsSelecting(true);
      }
    }
  }, [champion, currentIndex, index, phaseInfo, side, turn]);

  return (
    <BanCardLayout>
      {(isSelecting || champion) && (
        <ChampionIcon>
          {(champion || selectedChampion) && (
            <Image width="66" height="66" priority src={getImgURL()} />
          )}
          <GradientMask
            side={side}
            isSelecting={isSelecting}
            isSelected={isSelected()}
            champion={champion}
            index={index}
          />
        </ChampionIcon>
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

const ChampionIcon = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const GradientMask = styled.div<GradientMaskProps>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  ${props =>
    props.side === 'blue' &&
    props.isSelecting &&
    !props.isSelected &&
    css`
      background: linear-gradient(
        to top,
        ${props => props.theme.blue.blueB40} 5%,
        rgba(0, 0, 0, 0)
      );
      animation: blink 0.5s ease-in-out infinite alternate;
    `}

  ${props =>
    props.side === 'red' &&
    props.isSelecting &&
    !props.isSelected &&
    css`
      background: linear-gradient(
        to top,
        ${props => props.theme.red.redB40} 5%,
        rgba(0, 0, 0, 0)
      );
      animation: blink 0.5s ease-in-out infinite alternate;
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
