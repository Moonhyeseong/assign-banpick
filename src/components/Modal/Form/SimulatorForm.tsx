import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { BASE_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { initUserData } from './userDataSlice';
import { MODEDATA } from '../../CONSTDATA/CONSTDATA';
import { socket } from '../../../../lib/socket';

type SideProps = {
  side: string;
};

type ModeItemProps = {
  mode: number;
  selectedOption: number | string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const SimulatorForm = ({
  simulatorFormData,
  setSimulatorFormData,
  initModalState,
  showModal,
  setSelectedGameData,
  selectedGameData,
}) => {
  const dispatch = useDispatch();

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSimulatorFormData({ ...simulatorFormData, title: event.target.value });
  };

  const handleTeamName = (
    event: React.ChangeEvent<HTMLInputElement>,
    side: string
  ) => {
    setSimulatorFormData({
      ...simulatorFormData,
      [`${side}TeamName`]: event.target.value,
    });
  };

  const handleMode = (option: number) => {
    setSimulatorFormData({ ...simulatorFormData, mode: option });

    if (option === MODEDATA.oneOnOne) {
      setSelectedGameData({
        ...selectedGameData,
        gameMode: option,
        userList: { blue: [''], red: [''] },
      });
    } else if (option === MODEDATA.fiveOnfive) {
      setSelectedGameData({
        ...selectedGameData,
        gameMode: option,
        userList: { blue: ['', '', '', '', ''], red: ['', '', '', '', ''] },
      });
    }
  };

  const isFormReady = (): boolean => {
    const formValues = Object.values(simulatorFormData);

    return formValues.indexOf('') === -1;
  };

  const createGame = () => {
    const { title, blueTeamName, redTeamName, mode } = simulatorFormData;

    const fetchOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        blueTeamName: blueTeamName,
        redTeamName: redTeamName,
        mode: mode,
        isProceeding: false,
      }),
    };

    fetch(`${BASE_URL}:8080/game`, fetchOption)
      .then(res => res.json())
      .then(res => {
        sessionStorage.setItem('GAME_ID', res._id);
      });

    showModal('playerForm', mode, selectedGameData.userList);
    socket.emit('createGame', sessionStorage.getItem('GAME_ID'));
  };

  useEffect(() => {
    dispatch(initUserData());
  }, [dispatch]);

  return (
    <LandingLayout>
      <Title>방 만들기 </Title>
      <NameInputContainer>
        방 제목을 입력해주세요.
        <NameInput
          value={simulatorFormData.title}
          onChange={e => {
            handleTitle(e);
          }}
          style={{ marginTop: 16 }}
        />
      </NameInputContainer>
      <NameInputContainer>
        진영별 팀 이름을 입력해주세요.
        <TeamNameInputContainer style={{ marginTop: 16 }}>
          <TeamNameLabel side="blue">BLUE</TeamNameLabel>
          <NameInput
            value={simulatorFormData.blueTeamName}
            onChange={e => {
              handleTeamName(e, 'blue');
            }}
          />
        </TeamNameInputContainer>
        <TeamNameInputContainer>
          <TeamNameLabel side="red">RED</TeamNameLabel>
          <NameInput
            value={simulatorFormData.redTeamName}
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
            selectedOption={simulatorFormData.mode}
            onClick={() => {
              handleMode(1);
            }}
            mode={1}
          >
            1 : 1
          </ModeItem>
          <ModeItem
            selectedOption={simulatorFormData.mode}
            onClick={() => {
              handleMode(2);
            }}
            mode={2}
          >
            5 : 5
          </ModeItem>
        </ModeList>
      </ModeForm>

      <StartBtn
        disabled={!isFormReady()}
        onClick={() => {
          !isFormReady() && alert('모든 항목을 입력, 선택해주세요');
          createGame();
        }}
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

const TeamNameLabel = styled.div<SideProps>`
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

const ModeItem = styled.span<ModeItemProps>`
  opacity: 0.3;
  border-bottom: 3px solid white;
  cursor: pointer;

  :hover {
    opacity: 1;
  }

  ${props =>
    props.selectedOption === props.mode &&
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
  opacity: 1;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.3;
    `}
`;
