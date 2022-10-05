import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { CgClose } from 'react-icons/cg';
import { MODEDATA, ROLEDATA } from '../../CONSTDATA/CONSTDATA';
import { BASE_URL } from '../../../config';
import { initUserData, updateUserData } from './userDataSlice';

const PlayerForm = ({
  selectedGameData: { gameMode, initModalState, userList },
}) => {
  const userData = useSelector(state => state.userFormData.userData);

  const dispatch = useDispatch();
  const router = useRouter();
  const isFormReady = () => {
    const formValues = Object.values(userData);

    return formValues.indexOf('') === -1;
  };

  const handleIsAleadyExistRoleData = (role, side) => {
    const teamUserList = userList[side];

    if (gameMode === MODEDATA.fiveOnfive) {
      if (teamUserList[ROLEDATA[role]] !== '') {
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

  const postUserJoin = async () => {
    const fetchOption = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gameId: sessionStorage.getItem('GAME_ID'),
        userId: userData.user_id,
        name: userData.name,
        side: userData.side,
        role: userData.role,
        mode: gameMode,
        isReady: userData.isReady,
      }),
    };

    const res = await fetch(`${BASE_URL}:8080/game/join`, fetchOption);
    const result = await res.json();
    console.log(result);
    // .then(res => {
    //   // socket.emit(
    //   //   'user-join',
    //   //   sessionStorage.getItem('GAME_ID'),
    //   //   res,
    //   //   userData.user_id
    //   // );
    // });
    router.push(sessionStorage.getItem('GAME_ID'));
    // navigate(sessionStorage.getItem('GAME_ID'));
  };

  useEffect(() => {
    dispatch(initUserData());
    if (gameMode === MODEDATA.oneOnOne) {
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
      {MODEDATA.oneOnOne === gameMode ? (
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

                if (gameMode === MODEDATA.oneOnOne) {
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

                if (gameMode === MODEDATA.oneOnOne) {
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
                    if (userData.side === '') {
                      alert('진영을 먼저 선택해주세요');
                    } else {
                      dispatch(
                        updateUserData({ type: 'role', value: `${role}` })
                      );
                    }

                    if (
                      gameMode === MODEDATA.fiveOnfive &&
                      userData.side !== ''
                    ) {
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
