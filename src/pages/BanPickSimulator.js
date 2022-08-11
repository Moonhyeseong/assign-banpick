import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChampionList from '../components/BanPick/ChampionList/ChampionList';
import PickList from '../components/BanPick/PickBanList/PickList';
import BanPickIndicator from '../components/BanPick/BanPickIndicator';
import SimulatorForm from '../components/SimulatorForm';

const BanPickSimulator = () => {
  const [isReady, setIsReady] = useState(false);
  // const [isFinish, setIsFinish] = useState(false);
  const [simulatorFormData, setSimulatorFormData] = useState({
    blue: '',
    red: '',
    mode: '',
    time: '',
  });

  const [selectedChampion, setSelectedChampion] = useState('');
  const [phaseCounter, setPhaseCounter] = useState(0);
  const [banPickList, setBanPickList] = useState({
    banList: {
      blue: ['', '', '', '', ''],
      red: ['', '', '', '', ''],
    },
    pickList: {
      blue: ['', '', '', '', ''],
      red: ['', '', '', '', ''],
    },
  });

  // swap Test
  // const [banPickList, setBanPickList] = useState({
  //   banList: {
  //     blue: ['Teemo', 'Vi', 'Galio', 'Ashe', 'Ahri'],
  //     red: ['Teemo', 'Vi', 'Galio', 'Ashe', 'Ahri'],
  //   },
  //   pickList: {
  //     blue: ['Teemo', 'Vi', 'Galio', 'Ashe', 'Ahri'],
  //     red: ['Teemo', 'Vi', 'Galio', 'Ashe', 'Ahri'],
  //   },
  // });

  const [turn, setTurn] = useState('blue');
  const [turnData, setTurnData] = useState({
    turn: [],
  });

  const handleTurn = () => {
    setTurn(turnData.turn.shift());
  };

  const phaseInfo =
    phaseCounter === 0 || phaseCounter === 2 ? 'banList' : 'pickList';

  const handleSelectBtn = () => {
    const index = banPickList[phaseInfo][turn].indexOf('');
    banPickList[phaseInfo][turn][index] = selectedChampion;
    handleTurn();
    setSelectedChampion('');
  };

  //phaseCounter 업데이트
  const updatePhaseCounter = () => {
    if (
      banPickList.banList.blue.indexOf('') === 3 &&
      banPickList.banList.red.indexOf('') === 3
    ) {
      setPhaseCounter(1);
    }

    if (
      banPickList.pickList.blue.indexOf('') === 3 &&
      banPickList.pickList.red.indexOf('') === 3
    ) {
      setPhaseCounter(2);
    }

    if (
      banPickList.banList.blue.indexOf('') === -1 &&
      banPickList.banList.red.indexOf('') === -1
    ) {
      setPhaseCounter(3);
    }

    if (
      banPickList.pickList.blue.indexOf('') === -1 &&
      banPickList.pickList.red.indexOf('') === -1
    ) {
      setPhaseCounter(4);
    }
  };

  useEffect(() => {
    updatePhaseCounter();
  });

  useEffect(() => {
    setTurnData({
      turn: [
        'red',
        'blue',
        'red',
        'blue',
        'red',
        'blue',
        'red',
        'red',
        'blue',
        'blue',
        'red',
        'red',
        'blue',
        'red',
        'blue',
        'red',
        'blue',
        'blue',
        'red',
      ],
    });
  }, []);

  const getPhaseTitle = () => {
    if (phaseCounter === 0) {
      return '1st BAN PHASE';
    } else if (phaseCounter === 1) {
      return '1st PICK PHASE';
    } else if (phaseCounter === 2) {
      return '2nd BAN PHASE';
    } else if (phaseCounter === 3) {
      return '2nd PICK PHASE';
    } else if (phaseCounter === 4) {
      return 'SWAP PHASE';
    }
  };

  return !isReady ? (
    <SimulatorForm
      simulatorFormData={simulatorFormData}
      setSimulatorFormData={setSimulatorFormData}
      setIsReady={setIsReady}
    />
  ) : (
    <BanPickLayout>
      <BanPickIndicator
        simulatorFormData={simulatorFormData}
        phaseTitle={getPhaseTitle}
      />
      <ListLayout>
        <PickList
          side="blue"
          banPickList={banPickList}
          selectedChampion={selectedChampion}
          phaseInfo={phaseInfo}
          phaseCounter={phaseCounter}
          turn={turn}
        />
        <ChampionList
          setBanPickList={setBanPickList}
          banPickList={banPickList}
          selectedChampion={selectedChampion}
          setSelectedChampion={setSelectedChampion}
          handleSelectBtn={handleSelectBtn}
          phaseCounter={phaseCounter}
        />
        <PickList
          side="red"
          banPickList={banPickList}
          selectedChampion={selectedChampion}
          phaseInfo={phaseInfo}
          phaseCounter={phaseCounter}
          turn={turn}
        />
      </ListLayout>
    </BanPickLayout>
  );
};

export default BanPickSimulator;

const BanPickLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 870px;
`;

const ListLayout = styled.div`
  display: flex;
  flex-direction: row;
`;
