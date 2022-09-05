import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { CONSTDATA } from '../../CONSTDATA';
import { CgClose } from 'react-icons/cg';
import { BASE_URL } from '../../../config';

const PlayerForm = ({
  gameMode,
  playerList,
  initModalState,
  setPlayerList,
  sendReadyEvent,
}) => {
  const [userData, setUserData] = useState({
    name: '',
    side: '',
    role: '',
  });

  const handleNameInput = e => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleRoleBtn = option => {
    // if (playerList[userData.side][CONSTDATA.ROLEDATA[option]] !== '') {
    //   alert('이미 선택된 포지션 입니다. 다른 포지션을 선택해 주세요');
    //   setUserData({ ...userData, role: '' });
    // } else {
    //   setUserData({ ...userData, role: option });
    // }
    setUserData({ ...userData, role: option });
  };

  const handleSideBtn = option => {
    setUserData({ ...userData, side: option });
  };

  // const roleValidator = () => {
  //   if (mode === CONSTDATA.MODEDATA.fiveOnfive) {
  //     if (playerList[userData.side][CONSTDATA.ROLEDATA[userData.role]] !== '') {
  //       return false;
  //     }
  //   }
  // };

  const formValidator = () => {
    const isFormValuesPassed = Object.values(userData).includes('');

    return isFormValuesPassed;
  };

  // const updatePlayerList = (res, side, role) => {
  //   if (mode === CONSTDATA.MODEDATA.oneOnOne) {
  //     return { ...playerList, [side]: [res] };
  //   } else if (mode === CONSTDATA.MODEDATA.fiveOnfive) {
  //     const index = CONSTDATA.ROLEDATA[role];
  //     playerList[side][index] = res;

  //     return { ...playerList, [side]: playerList[side] };
  //   }
  // };
  //유저정보 추가 함수
  // const postAddUser = () => {
  //   const { name, side, role } = userData;

  //   fetch(`${BASE_URL}:8080/add/user`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       game_id: sessionStorage.getItem('GAME_ID'),
  //       name: name,
  //       side: side,
  //       role: role,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       localStorage.setItem('USER_ID', res._id);
  //       sessionStorage.setItem('USER_ID', res._id);
  //       // setUserData({ ...userData, user_id: res._id });
  //       sendReadyEvent(
  //         updatePlayerList(res, side, role),
  //         sessionStorage.getItem('GAME_ID')
  //       );
  //       setPlayerList(prev => (prev = updatePlayerList(res, side, role)));
  //     });

  //   setIsReady(true);
  // };

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
            <PlayerNameInput onChange={e => handleNameInput(e)} />
          </NameInputContainer>
          <BtnContainer>
            진영을 선택해 주세요.
            <FormOptionBtn
              onClick={() => handleSideBtn('blue')}
              isSelected={userData.side === 'blue'}
            >
              BLUE
            </FormOptionBtn>
            <FormOptionBtn
              onClick={() => handleSideBtn('red')}
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
            <PlayerNameInput onChange={e => handleNameInput(e)} />
          </NameInputContainer>
          <BtnContainer>
            진영을 선택해 주세요.
            <FormOptionBtn
              onClick={() => handleSideBtn('blue')}
              isSelected={userData.side === 'blue'}
            >
              BLUE
            </FormOptionBtn>
            <FormOptionBtn
              onClick={() => handleSideBtn('red')}
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
                  onClick={() => handleRoleBtn(role)}
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
        disabled={formValidator()}
        onClick={() => {
          // !isReady && !formValidator() && postAddUser();
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
