import React, { useState } from 'react';
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

  //*TODO
  //1. 밴 픽 리스트 빈 배열로 전환 V
  //2. 스켈레톤 UI로 리스트 미리 띄워두기 V
  //3. 현재 선택될 리스트의 아이템 추적하기
  //3. 선택에 따라 챔피언명을 픽, 밴 배열에 push
  //4. 배열의 길이에 따라 phase 추적

  const [pickList, setPickList] = useState({
    blue: [],
    red: [],
  });

  const [banList, setBanList] = useState({
    blue: [],
    red: [],
  });

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

  //레드팀 밴 리스트가 3개 채워졌을때 픽 페이즈로 전환
  // 레드팀 픽 리스트가 3개 채워졌을때 밴 페이즈로 전환
  //블루팀 밴 리스트가 5개 채워졌을때 밴 페이즈로 전환
  //블루팀 픽 리스트가 5개 채워졌을때 스왑 페이즈로 전환

  const phase = () => {};

  return !isReady ? (
    <SimulatorForm
      simulatorFormData={simulatorFormData}
      setSimulatorFormData={setSimulatorFormData}
      setIsReady={setIsReady}
    />
  ) : (
    <BanPickLayout>
      <BanPickIndicator simulatorFormData={simulatorFormData} phase={phase} />
      <ListLayout>
        <PickList
          side="blue"
          pickList={pickList}
          banList={banList}
          phase={phase}
        />
        <ChampionList
          setPickList={setPickList}
          setBanList={setBanList}
          pickList={pickList}
          banList={banList}
          phase={phase}
        />
        <PickList
          side="red"
          pickList={pickList}
          banList={banList}
          phase={phase}
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
