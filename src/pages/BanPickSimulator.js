import React, { useState } from 'react';
import styled from 'styled-components';
import ChampionList from '../components/BanPick/ChampionList/ChampionList';
import PickList from '../components/BanPick/PickBanList/PickList';
import BanPickIndicator from '../components/BanPick/BanPickIndicator';
import SimulatorForm from '../components/SimulatorForm';

const BanPickSimulator = () => {
  const [isReady, setIsReady] = useState(false);
  // const [isReady, setIsReady] = useState(true);

  const [simulatorFormData, setSimulatorFormData] = useState({
    blue: '',
    red: '',
    mode: '',
    time: '',
  });

  return !isReady ? (
    <SimulatorForm
      simulatorFormData={simulatorFormData}
      setSimulatorFormData={setSimulatorFormData}
      setIsReady={setIsReady}
    />
  ) : (
    <BanPickLayout>
      <BanPickIndicator simulatorFormData={simulatorFormData} />
      <ListLayout>
        <PickList position="left" />
        <ChampionList />
        <PickList position="right" />
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
