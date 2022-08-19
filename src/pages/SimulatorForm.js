import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { CONSTDATA } from '../components/BanPick/CONSTDATA';

const SimulatorForm = ({
  simulatorFormData,
  setSimulatorFormData,
  setIsFormReady,
  setIsPlayersReady,
  setGameID,
}) => {
  const handleTeamName = (e, team) => {
    setSimulatorFormData({ ...simulatorFormData, [team]: e.target.value });
  };

  const handleMode = option => {
    setSimulatorFormData({ ...simulatorFormData, mode: option });
  };

  const handleTime = option => {
    setSimulatorFormData({ ...simulatorFormData, time: option });
  };

  const formValidator = () => {
    const formValues = Object.values(simulatorFormData);
    return formValues.includes('');
  };

  const startSimulator = () => {
    const { blue, red, mode, time } = simulatorFormData;
    fetch('http://localhost:8080/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blueTeam: blue,
        redTeam: red,
        mode: mode,
        timer: time,
      }),
    })
      .then(res => res.json())
      .then(res => setGameID(res._id));
    // .then(res => sessionStorage.setItem({ GAME_ID: res._id }));
  };

  useEffect(() => {
    sessionStorage.removeItem('GAME_ID');
  });

  return (
    <LandingLayout>
      <Title>League of Legend 밴픽 시뮬레이터</Title>
      <TeamNameForm>
        진영별 팀 이름을 입력해주세요.
        <>
          <TeamNameLabel side="blue">BLUE</TeamNameLabel>
          <TeamNameInput
            side="blue"
            value={simulatorFormData.blue}
            onChange={e => {
              handleTeamName(e, 'blue');
            }}
          />
        </>
        <>
          <TeamNameLabel side="red">RED</TeamNameLabel>
          <TeamNameInput
            side="red"
            value={simulatorFormData.red}
            onChange={e => {
              handleTeamName(e, 'red');
            }}
          />
        </>
      </TeamNameForm>
      <ModeForm>
        참가 인원을 선택해 주세요.
        <ModeList>
          <ModeItem
            selectedOption={simulatorFormData.mode}
            onClick={() => {
              handleMode(0);
            }}
            itemID={0}
          >
            SOLO
          </ModeItem>
          <ModeItem
            selectedOption={simulatorFormData.mode}
            onClick={() => {
              handleMode(1);
            }}
            itemID={1}
          >
            1 : 1
          </ModeItem>
          <ModeItem
            selectedOption={simulatorFormData.mode}
            onClick={() => {
              handleMode(2);
            }}
            itemID={2}
          >
            5 : 5
          </ModeItem>
        </ModeList>
      </ModeForm>
      <TimeForm>
        시간제한 옵션을 선택해주세요.
        <ModeList>
          <ModeItem
            selectedOption={simulatorFormData.time}
            onClick={() => {
              handleTime(true);
            }}
            isTrue={true}
          >
            ON
          </ModeItem>
          <ModeItem
            selectedOption={simulatorFormData.time}
            onClick={() => {
              handleTime(false);
            }}
            isTrue={false}
          >
            OFF
          </ModeItem>
        </ModeList>
      </TimeForm>
      <StartBtn
        // disabled={formValidator()}
        isDisabled={formValidator()}
        onClick={() => {
          !formValidator() && setIsFormReady(prev => !prev);
          formValidator() && alert('모든 항목을 입력, 선택해주세요');
          startSimulator();
          simulatorFormData.mode === CONSTDATA.MODEDATA.solo &&
            setIsPlayersReady(true);
        }}
      >
        START
      </StartBtn>
    </LandingLayout>
  );
};

export default SimulatorForm;

const LandingLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

const TeamNameForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  font-size: 20px;
  font-weight: 600;
`;

const TeamNameLabel = styled.div`
  ${props =>
    props.side === 'blue'
      ? css`
          border-left: 4px solid ${props => props.theme.blue.blueB70};
        `
      : css`
          border-left: 4px solid ${props => props.theme.red.redB70};
        `};
  padding-left: 4px;
  margin-top: 32px;
  margin-left: 16px;
`;

const TeamNameInput = styled.input`
  width: 80%;
  height: 40px;
  margin: 16px 40px;
  font-size: 24px;
  background-color: white;
  &:focus-visible {
    outline: none;
  }
`;

const ModeForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  font-size: 20px;
  font-weight: 600;
  margin: 40px 0;
`;

const ModeList = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 32px;
`;

const ModeItem = styled.span`
  opacity: 0.3;
  border-bottom: 3px solid white;
  cursor: pointer;

  :hover {
    opacity: 1;
  }

  ${props =>
    props.selectedOption === props.itemID &&
    css`
      opacity: 1;
    `}

  ${props =>
    props.isTrue === props.selectedOption &&
    css`
      opacity: 1;
    `}
`;

const TimeForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  font-size: 20px;
  font-weight: 600;
  margin: 40px 0;
`;

const StartBtn = styled.button`
  width: 170px;
  height: 50px;
  background-color: gray;
  border-radius: 25px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;

  ${props =>
    props.isDisabled &&
    css`
      opacity: 0.3;
    `}
`;
