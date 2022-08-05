import React from 'react';
import styled from 'styled-components';

const ChampionCard = ({ champion }) => {
  return (
    <ChampionCardLayout>
      <ChampionIcon
        src={`http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${champion.id}.png`}
      />
      {champion.name}
    </ChampionCardLayout>
  );
};

export default ChampionCard;

const ChampionCardLayout = styled.div`
  width: 80px;
  height: 110px;
  cursor: pointer;
  text-align: center;
  color: ${props => props.theme.white.white80};
  font-size: 12px;
  font-weight: 600;

  :hover {
    opacity: 0.3;
  }
`;

const ChampionIcon = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid ${props => props.theme.black.black85};
  margin-bottom: 4px;
`;
