import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MODEDATA } from '../CONSTDATA/CONSTDATA';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getUserData, userReadyAction } from '../Modal/Form/userDataSlice';
import { socket } from '../../../lib/socket';
import { SideProps } from '../types/component.type';

type PlayerNameProps = SideProps & {
  userIndicateData: boolean;
};

const WatingPlayer = ({ side, role, mode, playerData }) => {
  const userData = useAppSelector(state => state.userFormData.userData);
  const dispatch = useAppDispatch();

  const playerRoleData = userData?.role === role || playerData?.role === role;
  const playerSideData = userData?.side === side || playerData?.side === side;
  const userIndicateData = playerData?.userId === userData?.userId;

  const isOneOneOneMode = MODEDATA.oneOnOne === mode;

  const postUserReadyData = () => {
    socket.emit('userReadyEvent', userData);
    dispatch(userReadyAction());
  };

  useEffect(() => {
    sessionStorage.getItem('USER_ID') &&
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}:${
          process.env.NEXT_PUBLIC_API_PORT
        }/user/${sessionStorage.getItem('USER_ID')}`
      )
        .then(res => res.json())
        .then(res => {
          dispatch(getUserData(res));
        });
  }, [dispatch]);

  return (
    <PlayerCard role={role}>
      {playerSideData && playerRoleData ? (
        <PlayerName side={side} userIndicateData={userIndicateData}>
          {playerData?.name ? playerData?.name : userData.name}
        </PlayerName>
      ) : (
        playerSideData &&
        isOneOneOneMode && (
          <PlayerName side={side} userIndicateData={userIndicateData}>
            {playerData?.name ? playerData?.name : userData.name}
          </PlayerName>
        )
      )}

      {playerData?.role && !isOneOneOneMode && (
        <PlayerRole side={side} userIndicateData={userIndicateData}>
          {role}
        </PlayerRole>
      )}
      {playerData.isReady && <ReadyText>Ready!</ReadyText>}
      {userIndicateData && userData?.isReady === false && (
        <ReadyBtn
          onClick={() => {
            userData?.gameId && postUserReadyData();
          }}
          data-cy="readyBtn"
        >
          Ready
        </ReadyBtn>
      )}
    </PlayerCard>
  );
};

export default WatingPlayer;

const PlayerCard = styled.div`
  position: relative;
  display: felx;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 140px;
  background-color: black;
  border: 2px solid ${props => props.theme.black.black80};
  border-top: none;
`;

const PlayerRole = styled.p<PlayerNameProps>`
  position: absolute;
  top: 14px;
  z-index: 10;
  color: white;
  font-size: 16px;
  font-weight: 700;
  opacity: 0.6;

  ${props =>
    props.side === 'red'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `}
  ${props =>
    props.userIndicateData &&
    css`
      opacity: 1;
    `}
`;

const PlayerName = styled.p<PlayerNameProps>`
  position: absolute;
  bottom: 12px;
  z-index: 10;
  color: white;

  font-size: 24px;
  font-weight: 700;

  ${props =>
    props.side === 'red'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `}

  ${props =>
    props.userIndicateData
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.6;
        `}
`;

const ReadyText = styled.span`
  font-weight: 700;
  font-size: 40px;
`;

const ReadyBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 8px;
  width: 180px;
  height: 50px;
  background-color: ${props => props.theme.black.black70};
  border-radius: 25px;
  color: white;
  font-weight: 500;
  font-size: 22px;
  z-index: 10000;

  cursor: pointer;
`;
