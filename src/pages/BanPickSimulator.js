import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Simulator from './Simulator';
import ChampionList from '../components/BanPick/ChampionList/ChampionList';
import PickList from '../components/BanPick/PickBanList/PickList';
import BanPickIndicator from '../components/BanPick/BanPickIndicator/BanPickIndicator';
import SimulatorForm from './SimulatorForm';
import WatingRoom from './WatingRoom';
import { CONSTDATA } from '../components/BanPick/CONSTDATA';
import { SocketContext } from '../context/socket';

const BanPickSimulator = () => {
  const [isFormReady, setIsFormReady] = useState(false);
  const [isPlayersReady, setIsPlayersReady] = useState(false);
  const [gameId, setGameId] = useState();
  const socket = useContext(SocketContext);
  const params = useParams();
  const location = useLocation();
  // const [isFinish, setIsFinish] = useState(false);

  const [simulatorFormData, setSimulatorFormData] = useState({
    blue: '',
    red: '',
    mode: '',
    time: '',
  });

  const [championData, setChampionData] = useState([]);
  const [selectedChampion, setSelectedChampion] = useState('');

  const [phaseCounter, setPhaseCounter] = useState(
    CONSTDATA.PHASEDATA.banPhase1
  );

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
  const [playerList, setPlayerList] = useState();
  const [userData, setUserData] = useState({
    side: '',
    name: '',
    role: '',
  });

  const [banpickData, setBanpickData] = useState();

  const [leftTime, setLeftTime] = useState(30);
  const [turn, setTurn] = useState('blue');
  const [turnData, setTurnData] = useState({
    turn: [],
  });

  const handleTurn = () => {
    setTurn(turnData.turn.shift());
    // return turnData.turn.shift();
  };
  // 밴픽 버튼을 클릭한 유저의 브라우저에서만 턴 정보가 변경됨
  // 그렇다면 밴픽 버튼을 클릭할 때가 아닌 상황에서도 handleTurn함수가 실행 되어야 한다.

  const selectedChampions = [
    ...banPickList.banList.red,
    ...banPickList.banList.blue,
    ...banPickList.pickList.red,
    ...banPickList.pickList.blue,
    selectedChampion,
  ];

  const phaseInfo =
    phaseCounter === CONSTDATA.PHASEDATA.banPhase1 ||
    phaseCounter === CONSTDATA.PHASEDATA.banPhase2
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

    //페이즈정보 턴정보 인덱스 정보 - 선택된 챔피언 정보
    banPickList[phaseInfo][turn][index] = selectedChampion
      ? selectedChampion
      : getTimeOutItem();
    handleTurn();
    socket.emit('updateTurn', sessionStorage.getItem('GAME_ID'), turn);
    setSelectedChampion('');
    setLeftTime(30);
  };

  //phaseCounter 업데이트
  const updatePhaseCounter = () => {
    if (
      banPickList.banList.blue.indexOf('') === 3 &&
      banPickList.banList.red.indexOf('') === 3
    ) {
      setPhaseCounter(CONSTDATA.PHASEDATA.pickPhase1);
    }

    if (
      banPickList.pickList.blue.indexOf('') === 3 &&
      banPickList.pickList.red.indexOf('') === 3
    ) {
      setPhaseCounter(CONSTDATA.PHASEDATA.banPhase2);
    }

    if (
      banPickList.banList.blue.indexOf('') === -1 &&
      banPickList.banList.red.indexOf('') === -1
    ) {
      setPhaseCounter(CONSTDATA.PHASEDATA.pickPhase2);
    }

    if (
      banPickList.pickList.blue.indexOf('') === -1 &&
      banPickList.pickList.red.indexOf('') === -1
    ) {
      setPhaseCounter(CONSTDATA.PHASEDATA.swapPhase);
    }
  };

  const postBanPickList = () => {
    fetch(
      `http://localhost:8080/banpick/${sessionStorage.getItem('GAME_ID')}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          banPickList: banPickList,
        }),
      }
    )
      .then(res => res.json())
      .then(() =>
        setTimeout(() => {
          getBanPickListData();
        }, 100)
      );

    socket.emit('banpick', sessionStorage.getItem('GAME_ID'), banPickList);
  };

  const handleTimeOut = () => {
    if (leftTime < 0) {
      if (phaseCounter !== CONSTDATA.PHASEDATA.swapPhase) {
        handleSelectBtn();
        setLeftTime(30);
      }
    }
  };

  const getBanPickListData = () => {
    fetch(`http://localhost:8080/banpick/${sessionStorage.getItem('GAME_ID')}`)
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

  //init turn data
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

  useEffect(() => {
    if (
      parseInt(simulatorFormData.mode) === parseInt(CONSTDATA.MODEDATA.oneOnOne)
    ) {
      setPlayerList({ blue: [''], red: [''] });
    } else if (
      parseInt(simulatorFormData.mode) ===
      parseInt(CONSTDATA.MODEDATA.fiveOnfive)
    ) {
      setPlayerList({
        blue: ['', '', '', '', ''],
        red: ['', '', '', '', ''],
      });
    }
  }, [simulatorFormData.mode]);

  //링크는 게임 아이디로
  //게임 아이디 내의 인게임 아이디를 통해 밴픽 정보 불러오기, 저장하기

  //초대링크로 접속시
  useEffect(() => {
    if (params.id) {
      sessionStorage.setItem('GAME_ID', params.id);
      fetch(`http://localhost:8080/start/invite/${params.id}${location.search}`)
        .then(res => res.json())
        .then(res => {
          setSimulatorFormData({
            blue: '',
            red: '',
            mode: res.mode,
            time: true,
          });
          setTimeout(() => {
            simulatorFormData.mode !== 2
              ? setUserData({
                  side: res.side,
                  name: '',
                  role: 'null',
                })
              : setUserData({
                  side: res.side,
                  name: '',
                  role: '',
                });
          }, 100);
        });

      setIsFormReady(true);
    }
  }, [location.search, params.id, simulatorFormData.mode]);

  const getPhaseTitle = () => {
    if (phaseCounter === CONSTDATA.PHASEDATA.banPhase1) {
      return '1st BAN PHASE';
    } else if (phaseCounter === CONSTDATA.PHASEDATA.pickPhase1) {
      return '1st PICK PHASE';
    } else if (phaseCounter === CONSTDATA.PHASEDATA.banPhase2) {
      return '2nd BAN PHASE';
    } else if (phaseCounter === CONSTDATA.PHASEDATA.pickPhase2) {
      return '2nd PICK PHASE';
    } else if (phaseCounter === CONSTDATA.PHASEDATA.swapPhase) {
      return 'SWAP PHASE';
    }
  };

  return !isFormReady ? (
    <SimulatorForm
      simulatorFormData={simulatorFormData}
      setSimulatorFormData={setSimulatorFormData}
      setIsFormReady={setIsFormReady}
      setIsPlayersReady={setIsPlayersReady}
      userData={userData}
      setUserData={setUserData}
      setGameId={setGameId}
    />
  ) : (
    <Simulator
      gameId={gameId}
      isFormReady={isFormReady}
      isPlayersReady={isPlayersReady}
    >
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
          isPlayersReady={isPlayersReady}
          playerList={playerList}
          gameId={gameId}
          setGameId={setGameId}
        />
        {!isPlayersReady ? (
          <WatingRoom
            mode={simulatorFormData.mode}
            userData={userData}
            setUserData={setUserData}
            playerList={playerList}
            setPlayerList={setPlayerList}
            setIsPlayersReady={setIsPlayersReady}
          />
        ) : (
          <ListLayout>
            <PickList
              side="blue"
              banPickList={banPickList}
              selectedChampion={selectedChampion}
              phaseInfo={phaseInfo}
              phaseCounter={phaseCounter}
              turn={turn}
              leftTime={leftTime}
              postBanPickList={postBanPickList}
            />
            <ChampionList
              setBanPickList={setBanPickList}
              banPickList={banPickList}
              championData={championData}
              selectedChampion={selectedChampion}
              setSelectedChampion={setSelectedChampion}
              handleSelectBtn={handleSelectBtn}
              phaseCounter={phaseCounter}
              selectedChampions={selectedChampions}
              postBanPickList={postBanPickList}
              isPlayersReady={isPlayersReady}
              turn={turn}
              setTurn={setTurn}
              getBanPickListData={getBanPickListData}
            />
            <PickList
              side="red"
              banPickList={banPickList}
              selectedChampion={selectedChampion}
              phaseInfo={phaseInfo}
              phaseCounter={phaseCounter}
              turn={turn}
              leftTime={leftTime}
              postBanPickList={postBanPickList}
            />
          </ListLayout>
        )}
      </BanPickLayout>
    </Simulator>
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
