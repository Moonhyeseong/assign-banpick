import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import uuid from 'react-uuid';
import { socket } from '../../../../lib/socket';
import { FormOptionBtnProps } from '../GameListModal';

const SoloModeForm = () => {
  const [timerOption, setTimerOption] = useState(null);

  const router = useRouter();

  const createSoloUser = async (gameId: string) => {
    const fetchOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gameId: gameId,
        userId: sessionStorage.getItem('USER_ID'),
        clientId: socket.id,
        name: 'solo',
        side: 'solo',
        role: 'solo',
        mode: 0,
        isReady: true,
      }),
    };

    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/user`,
      fetchOption
    );
  };

  const createGame = async () => {
    const fetchOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'solo game',
        blueTeamName: 'BLUE TEAM',
        redTeamName: 'RED TEAM',
        mode: 0,
        timer: timerOption,
        isProceeding: true,
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/game`,
      fetchOption
    );
    const result = await res.json();
    sessionStorage.setItem('GAME_ID', result._id);
    createSoloUser(result._id);
    socket.emit('userJoinGame', result._id);
    router.push(result._id);
  };

  useEffect(() => {
    const newUuid = uuid();
    sessionStorage.setItem('USER_ID', newUuid);
  }, []);

  return (
    <SoloModeFormLayout>
      <FormContainer>
        타이머 옵션을 선택해 주세요.
        <BtnContainer>
          <FormOptionBtn
            onClick={() => {
              setTimerOption(true);
            }}
            isSelected={timerOption === true}
            data-cy="timerOnBtn"
          >
            ON
          </FormOptionBtn>
          <FormOptionBtn
            onClick={() => {
              setTimerOption(false);
            }}
            isSelected={timerOption === false}
          >
            OFF
          </FormOptionBtn>
        </BtnContainer>
      </FormContainer>
      <StartBtn
        disabled={timerOption === null}
        onClick={() => {
          if (timerOption === null) {
            alert('타이머 옵션을 선택해 주세요.');
          } else {
            createGame();
          }
        }}
        data-cy="startBtn"
      >
        START
      </StartBtn>
    </SoloModeFormLayout>
  );
};

export default SoloModeForm;

const SoloModeFormLayout = styled.div`
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
  gap: 32px;
  font-size: 20px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
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

const StartBtn = styled.button`
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
