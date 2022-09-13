import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../config';

const SoloModeForm = () => {
  const [timerOption, setTimerOption] = useState(null);
  const navigate = useNavigate();

  const createSoloUser = game_id => {
    fetch(`${BASE_URL}:8080/user/solo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        game_id: game_id,
      }),
    })
      .then(res => res.json())
      .then(res => {});
  };

  const createGame = () => {
    fetch(`${BASE_URL}:8080/start`, {
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
    })
      .then(res => res.json())
      .then(res => {
        sessionStorage.setItem('GAME_ID', res._id);
        createSoloUser(res._id);
        navigate(res._id);
      });
  };

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
