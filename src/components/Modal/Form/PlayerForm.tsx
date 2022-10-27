import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import uuid from 'react-uuid';
import { MODEDATA, ROLEDATA } from '../../CONSTDATA/CONSTDATA';
import { BASE_URL } from '../../../config';
import { initUserData, updateUserData } from './userDataSlice';
import { socket } from '../../../../lib/socket';
import { FormOptionBtnProps } from '../GameListModal';
import { IUser } from '../../../interfaces/user.interface';

type PlayerFormProps = {
  selectedGameData: {
    gameMode: number;
    userList: {
      blue: IUser[] | string[];
      red: IUser[] | string[];
    };
    type: string;
  };
};

const PlayerForm = ({
  selectedGameData: { gameMode, userList },
}: PlayerFormProps) => {
  const userData = useAppSelector(state => state.userFormData.userData);

  const dispatch = useDispatch();
  const router = useRouter();
  const isFormReady = () => {
    const formValues = Object.values(userData);

    return formValues.indexOf('') === -1;
  };

  const handleIsAleadyExistRoleData = (role: string, side: string) => {
    const teamUserList = userList[side];

    if (gameMode === MODEDATA.fiveOnfive) {
      if (teamUserList[ROLEDATA[role]] !== '') {
        alert('이미 다른 유저가 선택한 포지션 입니다.');
        dispatch(updateUserData({ type: 'role', value: '' }));
      }
    }
  };

  const handleIsAleadyExistSideData = (side: string) => {
    const teamUserList = userList[side];

    if (teamUserList[0] !== '') {
      alert('이미 다른 유저가 선택한 팀 입니다.');
      dispatch(updateUserData({ type: 'side', value: '' }));
    }
  };

  const createUser = async () => {
    const fetchOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gameId: sessionStorage.getItem('GAME_ID'),
        userId: userData.userId,
        clientId: socket.id,
        name: userData.name,
        side: userData.side,
        role: userData.role,
        mode: gameMode,
        isReady: userData.isReady,
      }),
    };

    await fetch(`${BASE_URL}:8080/user`, fetchOption);
  };

  const postUserJoin = async () => {
    const fetchOption = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gameId: sessionStorage.getItem('GAME_ID'),
        userId: userData.userId,
        clientId: socket.id,
        name: userData.name,
        side: userData.side,
        role: userData.role,
        mode: gameMode,
        isReady: userData.isReady,
      }),
    };

    await fetch(`${BASE_URL}:8080/game/join`, fetchOption)
      .then(response => {
        // reponse가 ok가 아닐 때
        if (!response.ok) {
          throw new Error('400 or 500 에러 발생');
        }
        return response.json();
      })
      .then(response => {
        createUser();
        socket.emit('userJoinGame', sessionStorage.getItem('GAME_ID'));
        router.push(sessionStorage.getItem('GAME_ID'));
      })
      .catch(() => {
        alert('참여가 불가능한 게임입니다.');
      });
  };

  useEffect(() => {
    dispatch(initUserData());
    if (gameMode === MODEDATA.oneOnOne) {
      dispatch(updateUserData({ type: 'role', value: 'solo' }));
    }

    const newUuid = uuid();
    sessionStorage.setItem('USER_ID', newUuid);
    dispatch(updateUserData({ type: 'userId', value: newUuid }));
  }, [dispatch, gameMode]);

  return (
    <PlayerFormLayout>
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

const FormOptionBtn = styled.span<FormOptionBtnProps>`
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
