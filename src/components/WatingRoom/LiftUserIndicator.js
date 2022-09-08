import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { CONSTDATA } from '../CONSTDATA';

const LiftUserIndicator = ({ userList, mode }) => {
  const userData = useSelector(state => state.userFormData.userData);
  return (
    <LiftBackGround>
      <Filter />
      {CONSTDATA.MODEDATA.oneOnOne === mode && (
        <>
          <RoleIcon side="blue" src="/images/ROLE/solo.png" />
          <RoleIcon side="red" src="/images/ROLE/solo.png" />
        </>
      )}

      {CONSTDATA.MODEDATA.fiveOnfive === mode && (
        <>
          {userList.blue.map((playerData, idx) => {
            <RoleIcon side="blue" src={`/images/ROLE/${ROLE_INFO[idx]}.png`} />;
          })}

          <RoleIcon side="red" src="/images/ROLE/solo.png" />
        </>
      )}
    </LiftBackGround>
  );
};

export default LiftUserIndicator;

const LiftBackGround = styled.div`
  position: relative;
  width: 700px;
  height: auto;

  background: url('./images/lift.png') no-repeat;
  background-position: top;
  background-size: cover;
  opacity: 0.8;
`;

const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
`;

const RoleIcon = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
  padding: 10px;
  border-radius: 35px;
  border: 3px solid white;
  z-index: 10;
  opacity: 0.6;
  ${props =>
    props.side === 'blue'
      ? css`
          bottom: 380px;
          left: 210px;
        `
      : css`
          top: 170px;
          right: 190px;
        `}
`;

const ROLE_INFO = ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT'];
