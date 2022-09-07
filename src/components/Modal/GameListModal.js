import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PlayerForm from './Form/PlayerForm';
import SimulatorForm from './Form/SimulatorForm';
import { initUserData } from './Form/userDataSlice';

const GameListModal = ({
  initModalState,
  showModal,
  selectedGameData: { type, gameMode },
}) => {
  const dispatch = useDispatch();
  const [simulatorFormData, setSimulatorFormData] = useState({
    title: '',
    blueTeamName: '',
    redTeamName: '',
    mode: '',
  });

  const modalBackgroundRef = useRef();

  const closeModal = e => {
    if (e.target === modalBackgroundRef.current) {
      initModalState();
      sessionStorage.removeItem('GAME_ID');
      if (type === 'simulatorForm') {
        setSimulatorFormData({
          title: '',
          blueTeamName: '',
          redTeamName: '',
          mode: '',
        });
      } else if (type === 'playerForm') {
        dispatch(initUserData());
      }
    }
  };

  return (
    <ModalBackGround ref={modalBackgroundRef} onClick={e => closeModal(e)}>
      {type === 'playerForm' && (
        <PlayerForm initModalState={initModalState} gameMode={gameMode} />
      )}
      {type === 'simulatorForm' && (
        <SimulatorForm
          initModalState={initModalState}
          simulatorFormData={simulatorFormData}
          setSimulatorFormData={setSimulatorFormData}
          showModal={showModal}
        />
      )}
    </ModalBackGround>
  );
};

export default GameListModal;

const ModalBackGround = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);

  top: 0;
  left: 0;
  /* background-color: red; */
  z-index: 10;
`;
