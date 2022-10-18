import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { MODEDATA, PHASEDATA } from '../CONSTDATA/CONSTDATA';
import { getUserData } from '../Modal/Form/userDataSlice';
import { BASE_URL } from '../../config';
import DisconnectAlert from '../Modal/DisconnectAlert';
import ChampionList from './ChampionList/ChampionList';
import PickList from './PickBanList/PickList';
import BanPickIndicator from './BanPickIndicator/BanPickIndicator';
import WatingRoom from '../WatingRoom/WatingRoom';
import Head from 'next/head';
import { socket } from '../../../lib/socket';
import { getGameData } from '../../../lib/games';

const BanPickSimulator = ({ game }) => {
  const userData = useSelector(state => state.userFormData.userData);
  const dispatch = useDispatch();

  const [isFinish, setIsFinish] = useState(false);

  const [gameData, setGameData] = useState(game);

  const [championData, setChampionData] = useState([]);
  const [selectedChampion, setSelectedChampion] = useState('');

  const [phaseCounter, setPhaseCounter] = useState(PHASEDATA.banPhase1);

  const [banPickList, setBanPickList] = useState(gameData.banpickList);

  const [initialTime, setInitialTime] = useState();
  const [leftTime, setLeftTime] = useState();

  const [turn, setTurn] = useState();

  const [isEditable, setIsEditable] = useState(false);
  const [selectedChampions, setSelectedChampions] = useState();

  const [isDisconnectModalActive, setIsDisconnectModalActive] = useState(false);

  const phaseInfo =
    phaseCounter === PHASEDATA.banPhase1 || phaseCounter === PHASEDATA.banPhase2
      ? 'ban'
      : 'pick';

  //phaseCounter 업데이트
  const updatePhaseCounter = () => {
    if (
      banPickList.ban.blue.indexOf('') === 3 &&
      banPickList.ban.red.indexOf('') === 3
    ) {
      setPhaseCounter(PHASEDATA.pickPhase1);
    }

    if (
      banPickList.pick.blue.indexOf('') === 3 &&
      banPickList.pick.red.indexOf('') === 3
    ) {
      setPhaseCounter(PHASEDATA.banPhase2);
    }

    if (
      banPickList.ban.blue.indexOf('') === -1 &&
      banPickList.ban.red.indexOf('') === -1
    ) {
      setPhaseCounter(PHASEDATA.pickPhase2);
    }

    if (
      banPickList.pick.blue.indexOf('') === -1 &&
      banPickList.pick.red.indexOf('') === -1
    ) {
      setPhaseCounter(PHASEDATA.swapPhase);
    }
  };

  //타임아웃시 자동 밴픽 동작
  const getTimeOutItem = () => {
    const championList = Object.values(championData);
    const randomIndex = Math.floor(Math.random() * championList.length);

    if (phaseInfo === 'ban') {
      return 'NO DATA';
    } else if (phaseInfo === 'pick') {
      if (selectedChampions.indexOf(championList[randomIndex]) === -1) {
        return championList[randomIndex].id;
      }
    }
  };

  //밴픽 챔피언 선택버튼
  const handleSelectBtn = () => {
    const index = banPickList[phaseInfo][turn].indexOf('');

    //페이즈정보 턴정보 인덱스 정보 - 선택된 챔피언 정보
    banPickList[phaseInfo][turn][index] =
      selectedChampion !== '' ? selectedChampion : getTimeOutItem();

    setSelectedChampion('');
  };

  const postBanPickList = async () => {
    const fetchOption = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gameId: sessionStorage.getItem('GAME_ID'),
        banpickList: banPickList,
        banpickCount: gameData?.banpickCount,
      }),
    };

    await fetch(`${BASE_URL}:8080/game/banpick`, fetchOption);
    socket.emit('banpick', sessionStorage.getItem('GAME_ID'));
  };

  const handleTimeOut = () => {
    if (leftTime < 0 && isEditable === true) {
      if (phaseCounter !== PHASEDATA.swapPhase) {
        handleSelectBtn();
        postBanPickList();
        initTimer();
      }
    }
  };

  const getUserDataAPI = () => {
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

  const initTimer = () => {
    if (phaseCounter !== PHASEDATA.swapPhase) {
      setLeftTime(29000);
      setInitialTime(new Date().getTime() + 29000);
    }
  };

  //socket
  useEffect(() => {
    const handleSimultorUpdate = updatedGameData => {
      if (gameData.isProceeding) {
        setBanPickList(updatedGameData.banpickList);
        setSelectedChampion('');
      }
    };

    socket.on('updateGameData', async gameId => {
      const updatedGameData = await getGameData(gameId);
      setGameData(updatedGameData);
      handleSimultorUpdate(updatedGameData);
      if (updatedGameData.banpickCount <= 20) {
        initTimer();
      }
    });

    socket.on('updateSelectedChampion', champion => {
      setSelectedChampion(champion);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData.isProceeding]);

  //unmount socket disconnect
  useEffect(() => {
    socket.on('shutdownSimulator', () => {
      setIsDisconnectModalActive(true);
    });
    return () => {
      socket.disconnect();
      sessionStorage.removeItem('GAME_ID');
      sessionStorage.removeItem('USER_ID');
    };
  }, []);

  useEffect(() => {
    fetch(
      'https://ddragon.leagueoflegends.com/cdn/12.16.1/data/ko_KR/champion.json'
    )
      .then(res => res.json())
      .then(res => setChampionData(res.data));
  }, []);

  useEffect(() => {
    setSelectedChampions([
      ...banPickList.ban.red,
      ...banPickList.ban.blue,
      ...banPickList.pick.red,
      ...banPickList.pick.blue,
      selectedChampion,
    ]);
  }, [
    banPickList.ban.blue,
    banPickList.ban.red,
    banPickList.pick.blue,
    banPickList.pick.red,
    selectedChampion,
  ]);

  //타이머 초기화
  useEffect(() => {
    if (gameData?.isProceeding && phaseCounter !== PHASEDATA.swapPhase) {
      setInitialTime(new Date().getTime() + 29000);
      setLeftTime(29000);
    }
  }, [gameData?.isProceeding, phaseCounter]);

  useEffect(() => {
    setTimeout(() => {
      getUserDataAPI();
    }, 50);
    return clearInterval();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('USER_ID') === null) {
      alert('유저정보가 없습니다.');
      window.location.replace('/');
    }
  }, []);

  //턴정보 업데이트
  useEffect(() => {
    if (phaseCounter !== PHASEDATA.swapPhase) {
      setTurn(gameData?.banpickTurnData[gameData?.banpickCount]?.side);
    }
  }, [gameData?.banpickCount, gameData?.banpickTurnData, phaseCounter]);

  useEffect(() => {
    updatePhaseCounter();
    if (isEditable) {
      handleTimeOut();
    }
  });

  //#편집권한 설정 함수
  useEffect(() => {
    if (gameData?.mode === MODEDATA.oneOnOne) {
      if (userData?.side === turn) {
        setIsEditable(true);
      } else {
        setIsEditable(false);
      }
    } else if (gameData?.mode === MODEDATA.fiveOnfive) {
      const userSideInfo = userData?.side === turn;
      const userIndexInfo =
        userData?.role ===
        gameData?.banpickTurnData[gameData?.banpickCount]?.role;

      if (userIndexInfo && userSideInfo) {
        setIsEditable(true);
      } else {
        setIsEditable(false);
      }
    } else if (gameData?.mode === MODEDATA.solo) {
      setIsEditable(true);
    }
  }, [
    gameData?.banpickCount,
    gameData?.banpickTurnData,
    gameData?.mode,
    userData?.role,
    userData?.side,
    turn,
  ]);

  useEffect(() => {
    if (phaseCounter === PHASEDATA.swapPhase && leftTime < 0) {
      setIsFinish(true);
    }
  }, [leftTime, phaseCounter]);

  return (
    <>
      <Head>
        <title>BanPick Simulator | Simulator</title>
      </Head>
      {isDisconnectModalActive && (
        <DisconnectAlert
          setIsDisconnectModalActive={setIsDisconnectModalActive}
        />
      )}
      <BanPickLayout>
        <BanPickIndicator
          phaseTitle={getPhaseTitle}
          leftTime={leftTime}
          setLeftTime={setLeftTime}
          gameData={gameData}
          initialTime={initialTime}
          isFinish={isFinish}
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
    </>
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
