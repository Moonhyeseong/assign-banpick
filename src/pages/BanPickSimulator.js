import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChampionList from '../components/BanPick/ChampionList/ChampionList';
import PickList from '../components/BanPick/PickBanList/PickList';
import BanPickIndicator from '../components/BanPick/BanPickIndicator';
import SimulatorForm from '../components/SimulatorForm';

const BanPickSimulator = () => {
  const [isReady, setIsReady] = useState(true);
  const [simulatorFormData, setSimulatorFormData] = useState({
    blue: '',
    red: '',
    mode: '',
    time: '',
  });

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
  const [selectedChampion, setSelectedChampion] = useState('');
  // console.log(banPickList.banList.blue.indexOf(''));

  const [phaseCounter, setPhaseCounter] = useState(0);

  //state일 필요가 있을까?
  //선택 버튼 클릭시 각 페이즈에 따라 배열의 첫번쨰 요소 shift
  const [phaseIndicator, setPhaseIndicator] = useState({
    phase1: {
      banPhase1: ['blue', 'red', 'blue', 'red', 'blue', 'red'],
      pickPhase1: ['blue', 'red', 'red', 'blue', 'blue', 'red'],
    },
    phase2: {
      banPhase2: ['red', 'blue', 'red', 'blue'],
      pickPhase2: ['red', 'blue', 'blue', 'red'],
    },
  });
  //pickPhase1: ['blue', 'red', 'red', 'blue', 'blue', 'red', 'red', 'blue', 'blue', 'red'],
  //               0       1      1      0       0       1      1      0       0       1
  //               0       1      2      3       4       5      6      7       8       9

  // 각 밴, 픽 리스트 컴포넌트에 팀 턴 정보 배열로 미리 정의

  // useEffect(() => {
  //   if (phaseIndicator.phase1.banPhase1.length === 0) {
  //     setPhaseCounter(prev => prev + 1);
  //   }

  //   if (phaseIndicator.phase1.pickPhase1.length === 0) {
  //     setPhaseCounter(prev => prev + 1);
  //   }

  //   if (phaseIndicator.phase2.banPhase2.length === 0) {
  //     setPhaseCounter(prev => prev + 1);
  //   }

  //   if (phaseIndicator.phase2.pickPhase2.length === 0) {
  //     setPhaseCounter(prev => prev + 1);
  //   }
  // }, [
  //   phaseIndicator.phase1.banPhase1.length,
  //   phaseIndicator.phase1.pickPhase1.length,
  //   phaseIndicator.phase2.banPhase2.length,
  //   phaseIndicator.phase2.pickPhase2.length,
  // ]);

  useEffect(() => {
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
  }, [
    banPickList.banList.blue,
    banPickList.banList.red,
    banPickList.pickList.blue,
    banPickList.pickList.red,
  ]);

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
        phase={getPhaseTitle}
      />
      <ListLayout>
        <PickList
          side="blue"
          banPickList={banPickList}
          selectedChampion={selectedChampion}
          phaseCounter={phaseCounter}
        />
        <ChampionList
          setBanPickList={setBanPickList}
          banPickList={banPickList}
          phaseCounter={phaseCounter}
          selectedChampion={selectedChampion}
          setSelectedChampion={setSelectedChampion}
        />
        <PickList
          side="red"
          banPickList={banPickList}
          selectedChampion={selectedChampion}
          phaseCounter={phaseCounter}
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
