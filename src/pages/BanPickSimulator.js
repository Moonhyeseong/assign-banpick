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
import { SERVER_URL } from '../config';

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

  const [leftTime, setLeftTime] = useState(30);

  const [turn, setTurn] = useState('blue');
  const [turnData, setTurnData] = useState({
    turn: [],
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleTurn = () => {
    const nextTurn = turnData.turn.shift();
    setTurn(nextTurn);
    return nextTurn;
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

  const getTimeOutItem = () => {
    const championList = Object.values(championData);
    const randomIndex = Math.floor(Math.random() * championList.length);

    if (phaseInfo === 'banList') {
      return 'NO DATA';
    } else if (phaseInfo === 'pickList') {
      if (selectedChampions.indexOf(championList[randomIndex]) === -1) {
        socket.emit('timeout', championList[randomIndex].id);
        return championList[randomIndex].id;
      }
    }
  };

  const handleSelectBtn = () => {
    const index = banPickList[phaseInfo][turn].indexOf('');

    // 타임아웃 랜덤 선택 로직
    // 각 클라이언트에서 함수가 실행되 서로다른 챔피언 선택
    // - 현재 턴이 진행되는 클라이언트에서 보낸 챔피언을 selectedChampion으로

    //페이즈정보 턴정보 인덱스 정보 - 선택된 챔피언 정보
    banPickList[phaseInfo][turn][index] = selectedChampion
      ? selectedChampion
      : getTimeOutItem();

    setSelectedChampion('');

    if (phaseCounter !== CONSTDATA.PHASEDATA.swapPhase) {
      setLeftTime(30);
    }
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
    fetch(`${SERVER_URL}/banpick/${sessionStorage.getItem('GAME_ID')}`, {
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

    socket.emit(
      'banpick',
      sessionStorage.getItem('GAME_ID'),
      banPickList,
      {
        nextTurn: handleTurn(),
        nextTurnData: turnData,
      },
      phaseCounter
    );
    setSelectedChampion('');
  };

  const handleTimeOut = () => {
    if (leftTime < 0) {
      if (phaseCounter !== CONSTDATA.PHASEDATA.swapPhase) {
        handleSelectBtn();
        postBanPickList();
        setLeftTime(30);
      }
    }
  };

  const getBanPickListData = () => {
    // fetch(`http://192.168.0.117:8080/banpick/${sessionStorage.getItem('GAME_ID')}`)
    //   .then(res => res.json())
    //   .then(res => setBanpickData(res));
  };

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

  //player List 초기화
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

  useEffect(() => {
    if (simulatorFormData.mode === CONSTDATA.MODEDATA.oneOnOne) {
      userData.side !== ''
        ? setIsEditable(userData.side === turn)
        : setIsEditable(true);
    } else if (simulatorFormData.mode === CONSTDATA.MODEDATA.fiveOnfive) {
      const index = banPickList[phaseInfo][turn].indexOf('');
      setIsEditable(
        userData.side === turn && index === CONSTDATA.ROLEDATA[userData.role]
      );
    }
  }, [
    banPickList,
    phaseInfo,
    simulatorFormData.mode,
    turn,
    userData.role,
    userData.side,
  ]);

  //초대링크로 접속시
  useEffect(() => {
    if (params.id) {
      sessionStorage.setItem('GAME_ID', params.id);
      setGameId(params.id);

      fetch(
        `http://192.168.0.117:8080/start/invite/${params.id}${location.search}`
      )
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
              userData={userData}
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
              setTurn={setTurn}
              setTurnData={setTurnData}
              setLeftTime={setLeftTime}
              isEditable={isEditable}
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
              userData={userData}
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
