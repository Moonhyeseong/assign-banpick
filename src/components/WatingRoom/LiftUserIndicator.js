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
          <RoleIcon
            side="blue"
            mode={mode}
            isUserPosition={
              sessionStorage.getItem('USER_ID') === userList.blue[0].user_id
            }
            src="/images/ROLE/solo.png"
          />
          <RoleIcon
            side="red"
            mode={mode}
            isUserPosition={
              sessionStorage.getItem('USER_ID') === userList.red[0].user_id
            }
            src="/images/ROLE/solo.png"
          />
        </>
      )}

      {CONSTDATA.MODEDATA.fiveOnfive === mode && (
        <>
          {userList.blue.map((playerData, idx) => {
            return (
              <RoleIcon
                side="blue"
                mode={mode}
                role={ROLE_INFO[idx]}
                isUserPosition={userData.user_id === playerData.user_id}
                src={`/images/ROLE/${ROLE_INFO[idx]}.png`}
              />
            );
          })}

          {userList.red.map((playerData, idx) => {
            return (
              <RoleIcon
                key={idx}
                side="red"
                mode={mode}
                role={ROLE_INFO[idx]}
                isUserPosition={userData.user_id === playerData.user_id}
                src={`/images/ROLE/${ROLE_INFO[idx]}.png`}
              />
            );
          })}
        </>
      )}
    </LiftBackGround>
  );
};

export default LiftUserIndicator;

const LiftBackGround = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 776px;

  background: url('./images/lift.png') no-repeat;
  background-position: top;
  background-size: contain;
  opacity: 0.8;
`;

const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1px);
`;

const RoleIcon = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  padding: 10px;
  border: 3px solid white;
  z-index: 10;
  opacity: 0.4;

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }

  ${props =>
    props.mode === CONSTDATA.MODEDATA.oneOnOne &&
    props.side === 'blue' &&
    css`
      bottom: 360px;
      left: 530px;
    `}

  ${props =>
    props.mode === CONSTDATA.MODEDATA.oneOnOne &&
    props.side === 'red' &&
    css`
      top: 170px;
      right: 490px;
    `}

  ${props =>
    props.mode === CONSTDATA.MODEDATA.fiveOnfive &&
    props.side === 'blue' &&
    props.role === 'TOP' &&
    css`
      top: 160px;
      left: 480px;
    `}  

  ${props =>
    props.mode === CONSTDATA.MODEDATA.fiveOnfive &&
    props.side === 'blue' &&
    props.role === 'JUNGLE' &&
    css`
      top: 210px;
      left: 540px;
    `}  

  ${props =>
    props.mode === CONSTDATA.MODEDATA.fiveOnfive &&
    props.side === 'blue' &&
    props.role === 'MID' &&
    css`
      top: 280px;
      left: 620px;
    `} 

  ${props =>
    props.mode === CONSTDATA.MODEDATA.fiveOnfive &&
    props.side === 'blue' &&
    props.role === 'ADC' &&
    css`
      bottom: 280px;
      left: 860px;
    `}  

  ${props =>
    props.mode === CONSTDATA.MODEDATA.fiveOnfive &&
    props.side === 'blue' &&
    props.role === 'SUPPORT' &&
    css`
      bottom: 280px;
      left: 780px;
    `}  

  ${props =>
    props.isUserPosition &&
    css`
      opacity: 1;
      width: 80px;
      height: 80px;
      border-radius: 40px;
      border: 4px solid white;
      animation: blink-effect 1s ease-in-out infinite alternate;
    `}
`;

// const TopIcon = styled.img`
//   position: absolute;
//   width: 60px;
//   height: 60px;
//   border-radius: 30px;
//   padding: 10px;
//   border: 3px solid white;
//   z-index: 10;
//   opacity: 0.4;
// `;

// const JungleIcon = styled.img`
//   position: absolute;
//   width: 60px;
//   height: 60px;
//   border-radius: 30px;
//   padding: 10px;
//   border: 3px solid white;
//   z-index: 10;
//   opacity: 0.4;
// `;

// const MidIcon = styled.img`
//   position: absolute;
//   width: 60px;
//   height: 60px;
//   border-radius: 30px;
//   padding: 10px;
//   border: 3px solid white;
//   z-index: 10;
//   opacity: 0.4;
// `;

// const AdcIcon = styled.img`
//   position: absolute;
//   width: 60px;
//   height: 60px;
//   border-radius: 30px;
//   padding: 10px;
//   border: 3px solid white;
//   z-index: 10;
//   opacity: 0.4;
// `;

// const SupportIcon = styled.img`
//   position: absolute;
//   width: 60px;
//   height: 60px;
//   border-radius: 30px;
//   padding: 10px;
//   border: 3px solid white;
//   z-index: 10;
//   opacity: 0.4;
// `;
const ROLE_INFO = ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT'];
