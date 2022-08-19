import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CONSTDATA } from '../BanPick/CONSTDATA';
import WatingPlayer from './WatingPlayer';

const WatingList = ({ mode, side, gameID, userData }) => {
  const [playerList, setPlayerList] = useState();

  useEffect(() => {
    mode === CONSTDATA.MODEDATA.oneOnOne
      ? setPlayerList([''])
      : setPlayerList(['', '', '', '', '']);
  }, [mode]);

  return (
    <WatingListLayout>
      {playerList?.map((playerData, idx) => {
        return (
          <WatingPlayer
            key={idx}
            role={ROLE_INFO[idx]}
            mode={mode}
            userData={userData}
            side={side}
          />
        );
      })}
    </WatingListLayout>
  );
};

export default WatingList;

const WatingListLayout = styled.div`
  position: relative;
  width: 330px;
  height: 776px;
`;

const ROLE_INFO = ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT'];
