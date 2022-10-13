import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListFilter from './ListFilter';
import GameRoom from './GameRoom';
import GameListModal from '../Modal/GameListModal';
import { MODEDATA } from '../CONSTDATA/CONSTDATA';
import { useDispatch } from 'react-redux';
import { initUserData } from '../Modal/Form/userDataSlice';
import { socket } from '../../../lib/socket';
import { getAllGames } from '../../../lib/games';

const GameList = ({ gameData }) => {
  const dispatch = useDispatch();

  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedGameData, setSelectedGameData] = useState('');
  const [games, setGames] = useState(gameData);

  const [filterData, setFilterData] = useState({
    searchFilter: '',
    checkBoxFilter: {
      one: '',
      five: '',
    },
  });

  //필터 적용 게임 리스트
  const getGameList = () => {
    const gameList = games?.filter(game => {
      return (
        (game?.mode !== MODEDATA.solo &&
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

  //모달 실행
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

  //socket
  useEffect(() => {
    socket.on('updateGameList', async () => {
      const gamesData = await getAllGames();
      setGames(gamesData);
    });

    return () => {
      socket.off('updateGameList');
    };
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
          {getGameList()?.length ? (
            getGameList()?.map(gameData => {
              return (
                <GameRoom
                  key={gameData._id}
                  gameData={gameData}
                  showModal={showModal}
                />
              );
            })
          ) : (
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
