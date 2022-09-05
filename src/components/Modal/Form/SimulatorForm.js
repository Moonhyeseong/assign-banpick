import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { BASE_URL } from '../../../config';
import { CgClose } from 'react-icons/cg';

const SimulatorForm = ({
  simulatorFormData,
  setSimulatorFormData,
  userData,
  setUserData,
  setGameId,
  initModalState,
}) => {
  const handleTeamName = (e, team) => {
    setSimulatorFormData({ ...simulatorFormData, [team]: e.target.value });
  };

  const handleMode = option => {
    option >= 1
      ? setSimulatorFormData({ ...simulatorFormData, mode: option, time: true })
      : setSimulatorFormData({ ...simulatorFormData, mode: option });
  };

  // const handleTime = option => {
  //   setSimulatorFormData({ ...simulatorFormData, time: option });
  // };

  // const handleUserData = option => {
  //   setUserData({ ...userData, side: option });
  // };

  // const storeGameId = respnse => {
  //   setGameId(respnse);
  //   sessionStorage.setItem('GAME_ID', respnse);
  // };

  // const formValidator = () => {
  //   const formValues = Object.values(simulatorFormData);

  //   if (simulatorFormData.mode === CONSTDATA.MODEDATA.solo) {
  //     return formValues.includes('');
  //   } else {
  //     return userData.side === '' || formValues.includes('');
  //   }
  // };

  // const startSimulator = () => {
  //   const { blue, red, mode, time } = simulatorFormData;
  //   !formValidator() &&
  //     fetch(`${BASE_URL}:8080/start`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         blueTeam: blue,
  //         redTeam: red,
  //         mode: mode,
  //         timer: time,
  //       }),
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         storeGameId(res._id);
  //       });
  // };

  useEffect(() => {
    sessionStorage.removeItem('GAME_ID');
    // localStorage.removeItem('USER_ID');
  }, []);

  return (
    <LandingLayout>
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
      <Title>방 만들기 </Title>
      <NameInputContainer>
        방 제목을 입력해주세요.
        <NameInput
          side="blue"
          // value={simulatorFormData.blue}
          onChange={e => {
            handleTeamName(e, 'blue');
          }}
          style={{ marginTop: 16 }}
        />
      </NameInputContainer>
      <NameInputContainer>
        진영별 팀 이름을 입력해주세요.
        <TeamNameInputContainer style={{ marginTop: 16 }}>
          <TeamNameLabel side="blue">BLUE</TeamNameLabel>
          <NameInput
            side="blue"
            // value={simulatorFormData.blue}
            onChange={e => {
              handleTeamName(e, 'blue');
            }}
          />
        </TeamNameInputContainer>
        <TeamNameInputContainer>
          <TeamNameLabel side="red">RED</TeamNameLabel>
          <NameInput
            side="red"
            // value={simulatorFormData.red}
            onChange={e => {
              handleTeamName(e, 'red');
            }}
          />
        </TeamNameInputContainer>
      </NameInputContainer>
      <ModeForm>
        참가 인원을 선택해 주세요.
        <ModeList>
          <ModeItem
            // selectedOption={simulatorFormData.mode}
            onClick={() => {
              handleMode(1);
            }}
            itemID={1}
          >
            1 : 1
          </ModeItem>
          <ModeItem
            // selectedOption={simulatorFormData.mode}
            onClick={() => {
              handleMode(2);
            }}
            itemID={2}
          >
            5 : 5
          </ModeItem>
        </ModeList>
      </ModeForm>

      <StartBtn
      // // disabled={formValidator()}
      // isDisabled={formValidator()}
      // onClick={() => {
      //   !formValidator() && setIsFormReady(prev => !prev);
      //   formValidator() && alert('모든 항목을 입력, 선택해주세요');
      //   startSimulator();
      //   simulatorFormData.mode === CONSTDATA.MODEDATA.solo &&
      //     setIsPlayersReady(true);
      // }}
      >
        CREATE
      </StartBtn>
    </LandingLayout>
  );
};

export default SimulatorForm;

const LandingLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 64px;

  border: 1px solid whitesmoke;
  border-radius: 30px;
  background-color: ${props => props.theme.black.black93};
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: 600;
`;

const NameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  font-size: 20px;
  font-weight: 600;
`;

const TeamNameLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60px;
  line-height: 1;
  padding-left: 4px;
  ${props =>
    props.side === 'blue'
      ? css`
          border-left: 4px solid ${props => props.theme.blue.blueB70};
        `
      : css`
          border-left: 4px solid ${props => props.theme.red.redB70};
        `};
`;

const NameInput = styled.input`
  width: 300px;
  height: 30px;
  margin: 8px 20px;
  font-size: 24px;
  background-color: white;
  &:focus-visible {
    outline: none;
  }
`;

const TeamNameInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
`;

const ModeForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 600px;
  font-size: 20px;
  font-weight: 600;
  margin: 40px 0;
`;

const ModeList = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 100px;
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

  ${props =>
    props.side === props.selectedOption &&
    css`
      opacity: 1;
    `}
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
