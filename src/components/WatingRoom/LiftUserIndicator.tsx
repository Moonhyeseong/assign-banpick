import Image from 'next/image';
import styled, { css } from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { MODEDATA } from '../CONSTDATA/CONSTDATA';
import { SideProps, ModeProps, RoleProps } from '../types/component.type';

type RoleIconProps = SideProps &
  ModeProps &
  RoleProps & {
    isReady: any | null;
    isJoin: any;
    isUserPosition: any;
  };

const LiftUserIndicator = ({ userList, mode }) => {
  const userData = useAppSelector(state => state.userFormData.userData);

  return (
    <LiftBackGround>
      <Filter />
      {MODEDATA.oneOnOne === mode && (
        <>
          <RoleIcon
            side="blue"
            role="solo"
            mode={mode}
            isReady={userList?.blue[0].isReady}
            isJoin={userList?.blue[0] === ''}
            isUserPosition={userData?.userId === userList?.blue[0].userId}
          >
            <Image width="60" height="60" src="/images/ROLE/solo.png" />
          </RoleIcon>
          <RoleIcon
            side="red"
            role="solo"
            mode={mode}
            isReady={userList?.red[0].isReady}
            isJoin={userList?.red[0] === ''}
            isUserPosition={userData?.userId === userList?.red[0].userId}
          >
            <Image width="60" height="60" src="/images/ROLE/solo.png" />
          </RoleIcon>
        </>
      )}

      {MODEDATA.fiveOnfive === mode && (
        <>
          {userList.blue.map((playerData, idx: number) => {
            return (
              <RoleIcon
                key={idx}
                side="blue"
                mode={mode}
                role={ROLE_INFO[idx]}
                isJoin={playerData === ''}
                isReady={playerData.isReady}
                isUserPosition={userData?.userId === playerData.userId}
              >
                <Image
                  width="60"
                  height="60"
                  src={`/images/ROLE/${ROLE_INFO[idx]}.png`}
                />
              </RoleIcon>
            );
          })}

          {userList.red.map((playerData, idx: number) => {
            return (
              <RoleIcon
                key={idx}
                side="red"
                mode={mode}
                role={ROLE_INFO[idx]}
                isJoin={playerData === ''}
                isReady={playerData.isReady}
                isUserPosition={userData?.userId === playerData.userId}
              >
                <Image
                  width="60"
                  height="60"
                  src={`/images/ROLE/${ROLE_INFO[idx]}.png`}
                />
              </RoleIcon>
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

const RoleIcon = styled.div<RoleIconProps>`
  position: absolute;
  border-radius: 30px;
  padding: 10px;
  border: 3px solid white;
  z-index: 10;
  width: 60px;
  height: 60px;

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }

  ${props =>
    props.mode === MODEDATA.oneOnOne &&
    props.side === 'blue' &&
    props.role === 'solo' &&
    css`
      bottom: 360px;
      left: 530px;
    `}

  ${props =>
    props.mode === MODEDATA.oneOnOne &&
    props.side === 'red' &&
    props.role === 'solo' &&
    css`
      top: 170px;
      right: 490px;
    `}

  ${props =>
    props.mode === MODEDATA.fiveOnfive &&
    props.side === 'blue' &&
    props.role === 'TOP' &&
    css`
      top: 174px;
      left: 450px;
      border: 3px solid ${props => props.theme.blue.blueW80};
    `}  

  ${props =>
    props.mode === MODEDATA.fiveOnfive &&
    props.side === 'blue' &&
    props.role === 'JUNGLE' &&
    css`
      top: 240px;
      left: 550px;
      border: 3px solid ${props => props.theme.blue.blueW80};
    `}  

  ${props =>
    props.mode === MODEDATA.fiveOnfive &&
    props.side === 'blue' &&
    props.role === 'MID' &&
    css`
      top: 290px;
      left: 638px;
      border: 3px solid ${props => props.theme.blue.blueW80};
    `} 

  ${props =>
    props.mode === MODEDATA.fiveOnfive &&
    props.side === 'blue' &&
    props.role === 'ADC' &&
    css`
      bottom: 280px;
      left: 860px;
      border: 3px solid ${props => props.theme.blue.blueW80};
    `}  

  ${props =>
    props.mode === MODEDATA.fiveOnfive &&
    props.side === 'blue' &&
    props.role === 'SUPPORT' &&
    css`
      bottom: 280px;
      left: 780px;
      border: 3px solid ${props => props.theme.blue.blueW80};
    `}  

  ${props =>
    props.mode === MODEDATA.fiveOnfive &&
    props.side === 'red' &&
    props.role === 'TOP' &&
    css`
      top: 97px;
      right: 714px;
      border: 3px solid ${props => props.theme.red.redW80};
    `}  

  ${props =>
    props.mode === MODEDATA.fiveOnfive &&
    props.side === 'red' &&
    props.role === 'JUNGLE' &&
    css`
      top: 160px;
      right: 640px;
      border: 3px solid ${props => props.theme.red.redW80};
    `}  

  ${props =>
    props.mode === MODEDATA.fiveOnfive &&
    props.side === 'red' &&
    props.role === 'MID' &&
    css`
      top: 220px;
      right: 580px;
      border: 3px solid ${props => props.theme.red.redW80};
    `} 

  ${props =>
    props.mode === MODEDATA.fiveOnfive &&
    props.side === 'red' &&
    props.role === 'ADC' &&
    css`
      bottom: 378px;
      right: 343px;
      border: 3px solid ${props => props.theme.red.redW80};
    `}  

  ${props =>
    props.mode === MODEDATA.fiveOnfive &&
    props.side === 'red' &&
    props.role === 'SUPPORT' &&
    css`
      bottom: 456px;
      right: 353px;
      border: 3px solid ${props => props.theme.red.redW80};
    `}  

  ${props =>
    props.isUserPosition &&
    props.side === 'red' &&
    css`
      opacity: 1;
      width: 80px;
      height: 80px;
      border-radius: 40px;
      border-width: 4px;
      border-color: ${props => props.theme.red.redW80}; ;
    `}

  ${props =>
    props.isUserPosition &&
    props.side === 'blue' &&
    css`
      opacity: 1;
      width: 80px;
      height: 80px;
      border-radius: 40px;
      border-width: 4px;
      border-color: ${props => props.theme.blue.blueW60}; ;
    `}

  ${props =>
    props.isReady ||
    (props.isUserPosition &&
      css`
        animation: blink-effect 1.5s ease-in-out infinite alternate;
      `)}  

  ${props =>
    props.isJoin &&
    css`
      opacity: 0.4;
    `}
`;

const ROLE_INFO = ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT'];
