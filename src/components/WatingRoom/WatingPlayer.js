import React, { useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { CONSTDATA } from '../CONSTDATA';
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL } from '../../config';
import { getUserData, userReadyAction } from '../Modal/Form/userDataSlice';
import { SocketContext } from '../../context/socket';

const WatingPlayer = ({ side, role, mode, playerData, setGameData }) => {
  const userData = useSelector(state => state.userFormData.userData);
  const dispatch = useDispatch();
  // console.log(userData);
  // console.log(playerData);
  const socket = useContext(SocketContext);

  const playerRoleData = userData?.role === role || playerData?.role === role;
  const playerSideData = userData?.side === side || playerData?.side === side;
  const userIndicateData = playerData?.user_id === userData?.user_id;

  const isOneOneOneMode = CONSTDATA.MODEDATA.oneOnOne === mode;

  const postUserReadyData = () => {
    // if (mode === CONSTDATA.MODEDATA.oneOnOne) {
    //   socket.emit(
    //     'userReady',
    //     sessionStorage.getItem('GAME_ID'),
    //     sessionStorage.getItem('USER_ID'),
    //     userData?.side,
    //     0
    //   );
    // } else if (mode === CONSTDATA.MODEDATA.fiveOnfive) {
    //   socket.emit(
    //     'userReady',
    //     sessionStorage.getItem('GAME_ID'),
    //     sessionStorage.getItem('USER_ID'),
    //     userData?.side,
    //     CONSTDATA.ROLEDATA[playerData.role]
    //   );
    // }
    if (mode === CONSTDATA.MODEDATA.oneOnOne) {
      fetch(`${BASE_URL}:8080/user/ready`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          game_id: sessionStorage.getItem('GAME_ID'),
          user_id: userData.user_id,
          userSide: userData.side,
          userIndex: 0,
          mode: mode,
        }),
      })
        .then(res => res.json())
        .then(res => {
          socket.emit('userReadyEvent', sessionStorage.getItem('GAME_ID'), res);
          setGameData(res);
        });
    } else if (mode === CONSTDATA.MODEDATA.fiveOnfive) {
      fetch(`${BASE_URL}:8080/user/ready`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          game_id: sessionStorage.getItem('GAME_ID'),
          user_id: userData.user_id,
          userSide: userData.side,
          userIndex: CONSTDATA.ROLEDATA[userData.role],
          mode: mode,
        }),
      })
        .then(res => res.json())
        .then(res => {
          socket.emit('userReadyEvent', sessionStorage.getItem('GAME_ID'), res);
          setGameData(res);
        });
    }
    dispatch(userReadyAction());
  };

  useEffect(() => {
    sessionStorage.getItem('USER_ID') &&
      fetch(`${BASE_URL}:8080/user/${sessionStorage.getItem('USER_ID')}`)
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

      {playerData?.role && (
        <PlayerRole side={side} userIndicateData={userIndicateData}>
          {role}
        </PlayerRole>
      )}
      {playerData.isReady && <ReadyText>Ready!</ReadyText>}
      {userIndicateData && userData?.isReady === false && (
        <ReadyBtn
          onClick={() => {
            postUserReadyData();
          }}
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

const PlayerRole = styled.p`
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

const PlayerName = styled.p`
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
    props.isPlayerReady ||
    css`
      /* animation: blink-effect 1s ease-in-out infinite; */
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
