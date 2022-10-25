import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PlayerForm from './Form/PlayerForm';
import SimulatorForm from './Form/SimulatorForm';
import SoloModeForm from './Form/SoloModeForm';

export type FormOptionBtnProps = {
  isSelected: boolean;
};

const GameListModal = ({
  initModalState,
  showModal,
  setSelectedGameData,
  selectedGameData,
}) => {
  const [simulatorFormData, setSimulatorFormData] = useState({
    title: '',
    blueTeamName: '',
    redTeamName: '',
    mode: '',
  });

  const modalBackgroundRef = useRef();

  const closeModal = event => {
    if (event.target === modalBackgroundRef.current) {
      initModalState();
    }
  };

  return (
    <ModalBackGround ref={modalBackgroundRef} onClick={e => closeModal(e)}>
      {selectedGameData.type === 'playerForm' && (
        <PlayerForm selectedGameData={selectedGameData} />
      )}
      {selectedGameData.type === 'simulatorForm' && (
        <SimulatorForm
          initModalState={initModalState}
          simulatorFormData={simulatorFormData}
          setSimulatorFormData={setSimulatorFormData}
          showModal={showModal}
          selectedGameData={selectedGameData}
          setSelectedGameData={setSelectedGameData}
        />
      )}
      {selectedGameData.type === 'soloModeForm' && <SoloModeForm />}
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
  z-index: 10;
`;
