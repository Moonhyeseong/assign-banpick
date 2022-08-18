import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChampionList from '../components/BanPick/ChampionList/ChampionList';
import PickList from '../components/BanPick/PickBanList/PickList';
import BanPickIndicator from '../components/BanPick/BanPickIndicator/BanPickIndicator';
import SimulatorForm from './SimulatorForm';
import WatingRoom from './WatingRoom';
import { PHASEDATA } from '../components/BanPick/PHASEDATA';

const BanPickSimulator = () => {
  const [isFormReady, setIsFormReady] = useState(false);
  const [isPlayserReady, setIsPlayserReady] = useState(false);
  const [gameID, setGameID] = useState('');

  // const [isFinish, setIsFinish] = useState(false);

  const [simulatorFormData, setSimulatorFormData] = useState({
    blue: '',
    red: '',
    mode: '',
    time: '',
  });

  const [championData, setChampionData] = useState([]);
  const [selectedChampion, setSelectedChampion] = useState('');

  const [phaseCounter, setPhaseCounter] = useState(PHASEDATA.banPhase1);

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

  const [banpickData, setBanpickData] = useState();

  const [leftTime, setLeftTime] = useState(30);
  const [turn, setTurn] = useState('blue');
  const [turnData, setTurnData] = useState({
    turn: [],
  });

  const handleTurn = () => {
    setTurn(turnData.turn.shift());
  };

  const selectedChampions = [
    ...banPickList.banList.red,
    ...banPickList.banList.blue,
    ...banPickList.pickList.red,
    ...banPickList.pickList.blue,
    selectedChampion,
  ];

  const phaseInfo =
    phaseCounter === PHASEDATA.banPhase1 || phaseCounter === PHASEDATA.banPhase2
      ? 'banList'
      : 'pickList';

  const handleSelectBtn = () => {
    const index = banPickList[phaseInfo][turn].indexOf('');

    const getTimeOutItem = () => {
      const championList = Object.values(championData);
      const randomIndex = Math.floor(Math.random() * championList.length);

      if (phaseInfo === 'banList') {
        return 'NO DATA';
      } else if (phaseInfo === 'pickList') {
        if (selectedChampions.indexOf(championList[randomIndex]) === -1) {
          return championList[randomIndex].id;
        }
      }
    };

    banPickList[phaseInfo][turn][index] = selectedChampion
      ? selectedChampion
      : getTimeOutItem();

    handleTurn();
    setSelectedChampion('');
    setLeftTime(30);
  };

  //phaseCounter 업데이트
  const updatePhaseCounter = () => {
    if (
      banPickList.banList.blue.indexOf('') === 3 &&
      banPickList.banList.red.indexOf('') === 3
    ) {
      setPhaseCounter(PHASEDATA.pickPhase1);
    }

    if (
      banPickList.pickList.blue.indexOf('') === 3 &&
      banPickList.pickList.red.indexOf('') === 3
    ) {
      setPhaseCounter(PHASEDATA.banPhase2);
    }

    if (
      banPickList.banList.blue.indexOf('') === -1 &&
      banPickList.banList.red.indexOf('') === -1
    ) {
      setPhaseCounter(PHASEDATA.pickPhase2);
    }

    if (
      banPickList.pickList.blue.indexOf('') === -1 &&
      banPickList.pickList.red.indexOf('') === -1
    ) {
      setPhaseCounter(PHASEDATA.swapPhase);
    }
  };

  const handleTimeOut = () => {
    if (leftTime < 0) {
      if (phaseCounter !== PHASEDATA.swapPhase) {
        handleSelectBtn();
        setLeftTime(30);
      }
    }
  };

  const postBanPickList = () => {
    fetch(`http://localhost:8080/banpick/${gameID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        banPickList: banPickList,
      }),
    })
      .then(res => res.json())
      .then(() =>
        setTimeout(() => {
          getBanPickListData();
        }, 100)
      );
  };

  const getBanPickListData = () => {
    fetch(`http://localhost:8080/banpick/${gameID}`)
      .then(res => res.json())
      .then(res => setBanpickData(res));
  };

  useEffect(() => {
    fetch(
      'https://ddragon.leagueoflegends.com/cdn/12.15.1/data/ko_KR/champion.json'
    )
      .then(response => response.json())
      .then(data => setChampionData(data.data));
  }, []);

  useEffect(() => {
    updatePhaseCounter();
    handleTimeOut();
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
    if (phaseCounter === PHASEDATA.banPhase1) {
      return '1st BAN PHASE';
    } else if (phaseCounter === PHASEDATA.pickPhase1) {
      return '1st PICK PHASE';
    } else if (phaseCounter === PHASEDATA.banPhase2) {
      return '2nd BAN PHASE';
    } else if (phaseCounter === PHASEDATA.pickPhase2) {
      return '2nd PICK PHASE';
    } else if (phaseCounter === PHASEDATA.swapPhase) {
      return 'SWAP PHASE';
    }
  };
  //솔로일때 대기방을 생략해야한다.
  //멀티일때 대기방에 들어가면 isFormReady가 false가 되어야한다.
  return !isFormReady ? (
    <SimulatorForm
      simulatorFormData={simulatorFormData}
      setSimulatorFormData={setSimulatorFormData}
      setIsFormReady={setIsFormReady}
      setIsPlayserReady={setIsPlayserReady}
      setGameID={setGameID}
    />
  ) : (
    <BanPickLayout>
      <BanPickIndicator
        simulatorFormData={simulatorFormData}
        phaseTitle={getPhaseTitle}
        handleSelectBtn={handleSelectBtn}
        setSelectedChampion={setSelectedChampion}
        phaseInfo={phaseInfo}
        selectedChampion={selectedChampion}
        leftTime={leftTime}
        setLeftTime={setLeftTime}
        isPlayserReady={isPlayserReady}
      />
      {!isPlayserReady ? (
        <WatingRoom />
      ) : (
        <ListLayout>
          <PickList
            side="blue"
            banPickList={banPickList}
            selectedChampion={selectedChampion}
            phaseInfo={phaseInfo}
            phaseCounter={phaseCounter}
            turn={turn}
            banpickData={banpickData}
          />
          <ChampionList
            setBanPickList={setBanPickList}
            championData={championData}
            selectedChampion={selectedChampion}
            setSelectedChampion={setSelectedChampion}
            handleSelectBtn={handleSelectBtn}
            phaseCounter={phaseCounter}
            selectedChampions={selectedChampions}
            postBanPickList={postBanPickList}
          />
          <PickList
            side="red"
            banPickList={banPickList}
            selectedChampion={selectedChampion}
            phaseInfo={phaseInfo}
            phaseCounter={phaseCounter}
            turn={turn}
            banpickData={banpickData}
          />
        </ListLayout>
      )}
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
