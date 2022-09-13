import React, { useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { CONSTDATA } from '../../CONSTDATA';
import { BASE_URL } from '../../../config';
import { initUserData, updateUserData } from './userDataSlice';
import { SocketContext } from '../../../context/socket';

const PlayerForm = ({
  selectedGameData: { gameMode, initModalState, userList },
}) => {
  const userData = useSelector(state => state.userFormData.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const socket = useContext(SocketContext);

  const isFormReady = () => {
    const formValues = Object.values(userData);

    return formValues.indexOf('') === -1;
  };

  const handleIsAleadyExistRoleData = (role, side) => {
    const teamUserList = userList[side];

    if (gameMode === CONSTDATA.MODEDATA.fiveOnfive) {
      if (teamUserList[CONSTDATA.ROLEDATA[role]] !== '') {
        alert('이미 다른 유저가 선택한 포지션 입니다.');
        dispatch(updateUserData({ type: 'role', value: '' }));
      }
    }
  };

  const handleIsAleadyExistSideData = side => {
    const teamUserList = userList[side];

    if (teamUserList[0] !== '') {
      alert('이미 다른 유저가 선택한 팀 입니다.');
      dispatch(updateUserData({ type: 'side', value: '' }));
    }
  };

  const postUserJoin = () => {
    if (gameMode === CONSTDATA.MODEDATA.oneOnOne) {
      fetch(`${BASE_URL}:8080/user/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          game_id: sessionStorage.getItem('GAME_ID'),
          user_id: userData.user_id,
          name: userData.name,
          side: userData.side,
          role: userData.role,
          mode: gameMode,
          isReady: userData.isReady,
        }),
      })
        .then(res => res.json())
        .then(res => {});
    } else if (gameMode === CONSTDATA.MODEDATA.fiveOnfive) {
      fetch(`${BASE_URL}:8080/user/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          game_id: sessionStorage.getItem('GAME_ID'),
          user_id: userData.user_id,
          name: userData.name,
          side: userData.side,
          role: userData.role,
          roleIndex: CONSTDATA.ROLEDATA[userData.role],
          mode: gameMode,
          isReady: userData.isReady,
        }),
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
        });
    }
    socket.emit('user-join', sessionStorage.getItem('GAME_ID'));
    navigate(sessionStorage.getItem('GAME_ID'));
  };

  useEffect(() => {
    dispatch(initUserData());
    if (gameMode === CONSTDATA.MODEDATA.oneOnOne) {
      dispatch(updateUserData({ type: 'role', value: 'solo' }));
    }

    const newUuid = uuid();
    sessionStorage.setItem('USER_ID', newUuid);
    dispatch(updateUserData({ type: 'user_id', value: newUuid }));
  }, [dispatch, gameMode]);

  return (
    <PlayerFormLayout>
      <CgClose
        style={{
          position: 'absolute',
          right: '20',
          top: '20',
          cursor: 'pointer',
        }}
        size={32}
        onClick={initModalState}
      />
      {CONSTDATA.MODEDATA.oneOnOne === gameMode ? (
        <FormContainer>
          <NameInputContainer>
            대표 소환사명을 입력해 주세요.
            <PlayerNameInput
              onChange={e =>
                dispatch(
                  updateUserData({ type: 'name', value: e.target.value })
                )
              }
            />
          </NameInputContainer>
          <BtnContainer>
            진영을 선택해 주세요.
            <FormOptionBtn
              onClick={() => {
                dispatch(updateUserData({ type: 'side', value: 'blue' }));

                if (gameMode === CONSTDATA.MODEDATA.oneOnOne) {
                  handleIsAleadyExistSideData('blue');
                }
              }}
              isSelected={userData.side === 'blue'}
            >
              BLUE
            </FormOptionBtn>
            <FormOptionBtn
              onClick={() => {
                dispatch(updateUserData({ type: 'side', value: 'red' }));

                if (gameMode === CONSTDATA.MODEDATA.oneOnOne) {
                  handleIsAleadyExistSideData('red');
                }
              }}
              isSelected={userData.side === 'red'}
            >
              RED
            </FormOptionBtn>
          </BtnContainer>
        </FormContainer>
      ) : (
        <FormContainer>
          <NameInputContainer>
            소환사명을 입력해 주세요.
            <PlayerNameInput
              onChange={e =>
                dispatch(
                  updateUserData({ type: 'name', value: e.target.value })
                )
              }
            />
          </NameInputContainer>
          <BtnContainer>
            진영을 선택해 주세요.
            <FormOptionBtn
              onClick={() =>
                dispatch(updateUserData({ type: 'side', value: 'blue' }))
              }
              isSelected={userData.side === 'blue'}
            >
              BLUE
            </FormOptionBtn>
            <FormOptionBtn
              onClick={() =>
                dispatch(updateUserData({ type: 'side', value: 'red' }))
              }
              isSelected={userData.side === 'red'}
            >
              RED
            </FormOptionBtn>
          </BtnContainer>
          <BtnContainer>
            포지션을 선택해 주세요.
            {ROLE_INFO.map((role, idx) => {
              return (
                <FormOptionBtn
                  key={idx}
                  onClick={() => {
                    dispatch(
                      updateUserData({ type: 'role', value: `${role}` })
                    );
                    if (gameMode === CONSTDATA.MODEDATA.fiveOnfive) {
                      handleIsAleadyExistRoleData(role, userData.side);
                    }
                  }}
                  isSelected={role === userData.role}
                >
                  {role}
                </FormOptionBtn>
              );
            })}
          </BtnContainer>
        </FormContainer>
      )}
      <ReadyBtn
        disabled={!isFormReady()}
        onClick={() => {
          isFormReady() && postUserJoin();
        }}
      >
        JOIN
      </ReadyBtn>
    </PlayerFormLayout>
  );
};

export default PlayerForm;

const PlayerFormLayout = styled.div`
  position: relative;
  width: 640px;
  height: auto;
  padding: 64px;
  text-align: center;

  border: 1px solid whitesmoke;
  border-radius: 30px;
  background-color: ${props => props.theme.black.black93};
  z-index: 2000;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  font-size: 20px;
`;

const NameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const PlayerNameInput = styled.input`
  width: 200px;
  height: 30px;
  margin: 16px 40px;
  background-color: white;
  font-size: 24px;
  &:focus-visible {
    outline: none;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const FormOptionBtn = styled.span`
  opacity: 0.3;
  border-bottom: 3px solid white;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  ${props =>
    props.isSelected &&
    css`
      opacity: 1;
    `}
`;

const ReadyBtn = styled.button`
  width: 170px;
  height: 50px;
  margin-top: 60px;
  background-color: gray;
  border-radius: 25px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.3;
      cursor: default;
    `}
`;

const ROLE_INFO = ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT'];
