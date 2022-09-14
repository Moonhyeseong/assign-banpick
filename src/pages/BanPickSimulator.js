import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SocketContext } from '../context/socket';
import Simulator from './Simulator';
import DisconnectAlert from '../components/Modal/DisconnectAlert';
import ChampionList from '../components/BanPick/ChampionList/ChampionList';
import PickList from '../components/BanPick/PickBanList/PickList';
import BanPickIndicator from '../components/BanPick/BanPickIndicator/BanPickIndicator';
import WatingRoom from './WatingRoom';
import { CONSTDATA } from '../components/CONSTDATA';
import { getUserData } from '../components/Modal/Form/userDataSlice';
import { BASE_URL } from '../config';

const BanPickSimulator = () => {
  const socket = useContext(SocketContext);
  const params = useParams();
  const userData = useSelector(state => state.userFormData.userData);
  const dispatch = useDispatch();

  const [isFinish, setIsFinish] = useState(false);

  const [isModalActive, setIsModalActive] = useState(false);
  const [gameData, setGameData] = useState(null);

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

  const [curruntTime, setCurruntTime] = useState();
  const [leftTime, setLeftTime] = useState();

  const [turn, setTurn] = useState();

  const [isEditable, setIsEditable] = useState(false);

  const initTimer = () => {
    setLeftTime(29000);
    setCurruntTime(new Date().getTime() + 29000);
  };

  //선택된 챔피언 목록
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

  //타임아웃시 자동 밴픽 동작
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

  //밴픽 챔피언 선택버튼
  const handleSelectBtn = () => {
    const index = banPickList[phaseInfo][turn].indexOf('');

    //페이즈정보 턴정보 인덱스 정보 - 선택된 챔피언 정보
    banPickList[phaseInfo][turn][index] = selectedChampion
      ? selectedChampion
      : getTimeOutItem();

    setSelectedChampion('');

    if (phaseCounter !== CONSTDATA.PHASEDATA.swapPhase) {
      initTimer();
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
    socket.emit(
      'banpick',
      sessionStorage.getItem('GAME_ID'),
      banPickList,
      gameData.banpickCount,
      phaseCounter
    );
    setSelectedChampion('');
  };

  const handleTimeOut = () => {
    if (leftTime < 0) {
      if (phaseCounter !== CONSTDATA.PHASEDATA.swapPhase) {
        handleSelectBtn();
        postBanPickList();
        initTimer();
      }
    }
  };

  const getGameDataAPI = () => {
    fetch(`${BASE_URL}:8080/gameData/${params.id}`)
      .then(res => res.json())
      .then(res => {
        if (res) {
          setGameData(res);
          setBanPickList(res.banPickList);
        } else {
          alert('존재하지 않는 게임입니다.');
          window.location.replace('/');
        }
      });
  };

  const getUserDataAPI = () => {
    gameData?.mode !== CONSTDATA.MODEDATA.solo &&
      sessionStorage.getItem('USER_ID') &&
      fetch(`${BASE_URL}:8080/user/${sessionStorage.getItem('USER_ID')}`)
        .then(res => res.json())
        .then(res => {
          if (res) {
            dispatch(getUserData(res));
          } else {
            alert('유저정보가 없습니다.');
            window.location.replace('/');
          }
        });
  };

  //socket
  // socket.once('user-disconnected', () => {
  //   if (isPlayersReady) {
  //     setIsModalActive(true);
  //   }
  //   socket.emit('finish', isFinish);
  // });

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

  socket.once('updateGameData', docs => {
    setTimeout(() => {
      setGameData(docs);
      setBanPickList(docs.banPickList);
    }, 50);
  });

  //타이머 초기화
  useEffect(() => {
    if (gameData?.isProceeding) {
      setCurruntTime(new Date().getTime() + 29000);
      setLeftTime(29000);
    }
  }, [gameData?.isProceeding]);

  //데이터 get
  useEffect(() => {
    setTimeout(() => {
      getGameDataAPI();
      getUserDataAPI();
    }, 50);
    return clearInterval();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //턴정보 업데이트
  useEffect(() => {
    if (phaseCounter !== CONSTDATA.PHASEDATA.swapPhase) {
      setTurn(gameData?.banpickTurnData[gameData?.banpickCount]?.side);
    }
  }, [gameData?.banpickCount, gameData?.banpickTurnData, phaseCounter]);

  //챔피언 목록 불러오기
  useEffect(() => {
    fetch(
      'https://ddragon.leagueoflegends.com/cdn/12.15.1/data/ko_KR/champion.json'
    )
      .then(response => response.json())
      .then(data => setChampionData(data.data));
  }, []);

  //

  useEffect(() => {
    updatePhaseCounter();
    if (isEditable) handleTimeOut();
  });

  //init turn data

  // #편집권한 설정 함수

  useEffect(() => {
    if (gameData?.mode === CONSTDATA.MODEDATA.oneOnOne) {
      if (
        userData?.side ===
        gameData?.banpickTurnData[gameData?.banpickCount]?.side
      ) {
        setIsEditable(true);
      } else {
        setIsEditable(false);
      }
    } else if (gameData?.mode === CONSTDATA.MODEDATA.fiveOnfive) {
      const userSideInfo =
        userData?.side ===
        gameData?.banpickTurnData[gameData?.banpickCount]?.side;
      const userIndexInfo =
        userData?.role ===
        gameData?.banpickTurnData[gameData?.banpickCount]?.role;

      if (userIndexInfo && userSideInfo) {
        setIsEditable(true);
      } else {
        setIsEditable(false);
      }
    } else if (gameData?.mode === CONSTDATA.MODEDATA.solo) {
      setIsEditable(true);
    }
  }, [
    gameData?.banpickCount,
    gameData?.banpickTurnData,
    gameData?.mode,
    userData?.role,
    userData?.side,
  ]);

  useEffect(() => {
    if (phaseCounter === CONSTDATA.PHASEDATA.swapPhase && leftTime < 0) {
      setIsFinish(true);
    }
  }, [leftTime, phaseCounter]);

  return (
    <Simulator>
      {isModalActive && (
        <DisconnectAlert
          setIsModalActive={setIsModalActive}
          // disconnectEvent={disconnectEvent}
        />
      )}
      <BanPickLayout>
        <BanPickIndicator
          phaseTitle={getPhaseTitle}
          leftTime={leftTime}
          setLeftTime={setLeftTime}
          gameData={gameData}
          curruntTime={curruntTime}
        />
        {!gameData?.isProceeding ? (
          <WatingRoom gameData={gameData} setGameData={setGameData} />
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
              playerList={gameData?.userList.blue}
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
              isEditable={isEditable}
              initTimer={initTimer}
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
              playerList={gameData?.userList.red}
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
