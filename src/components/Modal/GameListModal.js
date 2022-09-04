import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PlayerForm from './PlayerForm';
import SimulatorForm from './SimulatorForm';

const GameListModal = ({ initModalState, modalType: { type, gameMode } }) => {
  const [simulatorFormData, setSimulatorFormData] = useState({
    blue: '',
    red: '',
    mode: '',
    time: '',
  });

  const modalBackgroundRef = useRef();

  const closeModal = e => {
    if (e.target === modalBackgroundRef.current) {
      initModalState();
    }
    setSimulatorFormData({
      blue: '',
      red: '',
      mode: '',
      time: '',
    });
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
