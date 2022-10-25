import React from 'react';
import styled from 'styled-components';
import { IUser } from '../../interfaces/user.interface';
import WatingPlayer from './WatingPlayer';

type WatingListProps = {
  mode: number;
  side: string;
  userList: IUser[] | string[];
};

const WatingList = ({ mode, side, userList }: WatingListProps) => {
  return (
    <WatingListLayout>
      {userList?.map((playerData, idx: number) => {
        return (
          <WatingPlayer
            key={idx}
            role={ROLE_INFO[idx]}
            mode={mode}
            side={side}
            playerData={playerData}
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
