import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ListFilter from '../components/GameList/ListFilter';
import GameRoom from '../components/GameList/GameRoom';
import GameListModal from '../components/Modal/GameListModal';
import { CONSTDATA } from '../components/CONSTDATA';
import { SocketContext } from '../context/socket';
import { useDispatch } from 'react-redux';
import { initUserData } from '../components/Modal/Form/userDataSlice';
import { BASE_URL } from '../config';

const GameList = () => {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();

  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedGameData, setSelectedGameData] = useState('');
  const [games, setGames] = useState();

  const [filterData, setFilterData] = useState({
    searchFilter: '',
    checkBoxFilter: {
      one: '',
      five: '',
    },
  });

  socket.once('updateGameList', payload => {
    console.log(payload);
    setTimeout(() => {
      getGameListAPI();
    }, 100);
  });

  const getGameList = () => {
    const gameList = games?.filter(game => {
      return (
        (game?.mode !== CONSTDATA.MODEDATA.solo &&
          game?.title.includes(filterData.searchFilter)) ||
        (filterData.searchFilter.length > 8 &&
          game?._id.includes(filterData.searchFilter))
      );
    });

    const filterdByModeList = gameList?.filter(game => {
      return (
        game?.mode === filterData.checkBoxFilter.one ||
        game?.mode === filterData.checkBoxFilter.five
      );
    });

    if (
      filterData.checkBoxFilter.one !== '' ||
      filterData.checkBoxFilter.five !== ''
    ) {
      return filterdByModeList;
    } else {
      return gameList;
    }
  };

  const showModal = (type, mode, userList) => {
    setIsModalActive(true);
    setSelectedGameData({
      ...selectedGameData,
      type: type,
      gameMode: mode,
      userList: userList,
    });
  };

  const initModalState = () => {
    setIsModalActive(false);
    setSelectedGameData('');
    sessionStorage.removeItem('GAME_ID');
    dispatch(initUserData());
  };

  const getGameListAPI = () => {
    fetch(`${BASE_URL}:8080/list`)
      .then(res => res.json())
      .then(res => setGames(res));
  };

  useEffect(() => {
    getGameListAPI();
  }, []);

  return (
    <GameListLayout>
      <ListFilter
        showModal={showModal}
        setFilterData={setFilterData}
        filterData={filterData}
      />
      {isModalActive && (
        <GameListModal
          initModalState={initModalState}
          selectedGameData={selectedGameData}
          setSelectedGameData={setSelectedGameData}
          showModal={showModal}
        />
      )}
      <GameRoomsLayout>
        <GameRoomContainer>
          {getGameList()?.map(gameData => {
            return (
              <GameRoom
                key={gameData._id}
                gameData={gameData}
                showModal={showModal}
              />
            );
          })}
          {getGameList()?.length < 1 && (
            <EmptyList>생성된 게임이 없습니다.</EmptyList>
          )}
        </GameRoomContainer>
      </GameRoomsLayout>
    </GameListLayout>
  );
};

export default GameList;

const GameListLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

const GameRoomsLayout = styled.div`
  text-align: center;
  width: 100%;
  height: 80vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${props => props.theme.white.white80};
  }
`;

const GameRoomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 16px;
  width: 1332px;
  margin: auto;
  margin-top: 16px;
`;

const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  width: 100%;
  height: 70vh;
`;
