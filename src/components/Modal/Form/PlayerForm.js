import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CONSTDATA } from '../../CONSTDATA';
import { CgClose } from 'react-icons/cg';
import { BASE_URL } from '../../../config';
import { updateUserData } from './userDataSlice';

const PlayerForm = ({
  gameMode,
  playerList,
  initModalState,
  setPlayerList,
  sendReadyEvent,
}) => {
  const userFormData = useSelector(state => state.userFormData);
  console.log(userFormData.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFormReady = () => {
    const formValues = Object.values(userFormData.userData);

    return formValues.indexOf('') === -1;
  };
  console.log(isFormReady());
  // const updatePlayerList = (res, side, role) => {
  //   if (mode === CONSTDATA.MODEDATA.oneOnOne) {
  //     return { ...playerList, [side]: [res] };
  //   } else if (mode === CONSTDATA.MODEDATA.fiveOnfive) {
  //     const index = CONSTDATA.ROLEDATA[role];
  //     playerList[side][index] = res;

  //     return { ...playerList, [side]: playerList[side] };
  //   }
  // };
  // 유저정보 추가 함수

  const postAddJoin = () => {
    if (gameMode === CONSTDATA.MODEDATA.oneOnOne) {
      fetch(`${BASE_URL}:8080/user/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          game_id: sessionStorage.getItem('GAME_ID'),
          name: userFormData.userData.name,
          side: userFormData.userData.side,
          mode: gameMode,
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
          name: userFormData.userData.name,
          side: userFormData.userData.side,
          role: userFormData.userData.role,
          roleIndex: CONSTDATA.ROLEDATA[userFormData.userData.role],
          mode: gameMode,
        }),
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
        });
    }
    navigate(sessionStorage.getItem('GAME_ID'));
  };

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
              onClick={() =>
                dispatch(updateUserData({ type: 'side', value: 'blue' }))
              }
              isSelected={userFormData.userData.side === 'blue'}
            >
              BLUE
            </FormOptionBtn>
            <FormOptionBtn
              onClick={() =>
                dispatch(updateUserData({ type: 'side', value: 'red' }))
              }
              isSelected={userFormData.userData.side === 'red'}
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
              isSelected={userFormData.userData.side === 'blue'}
            >
              BLUE
            </FormOptionBtn>
            <FormOptionBtn
              onClick={() =>
                dispatch(updateUserData({ type: 'side', value: 'red' }))
              }
              isSelected={userFormData.userData.side === 'red'}
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
                  onClick={() =>
                    dispatch(updateUserData({ type: 'role', value: `${role}` }))
                  }
                  isSelected={role === userFormData.userData.role}
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
          isFormReady() && postAddJoin();
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
