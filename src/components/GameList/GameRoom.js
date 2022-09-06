import React from 'react';
import styled, { css } from 'styled-components';
import { CONSTDATA } from '../CONSTDATA';

const GameRoom = ({ showModal, gameData: { title, mode, userList } }) => {
  const roles = Object.keys(CONSTDATA.ROLEDATA);

  const getJoiningPlayerCount = playerList => {
    const joiningPlayerCount = playerList.reduce(
      (cnt, player) => cnt + ('' === player),
      0
    );
    return joiningPlayerCount;
  };

  const isFull = () => {
    return userList.blue.indexOf('') === -1 && userList.red.indexOf('') === -1;
  };

  return (
    <GameRoomLayout>
      <GameTitle>방 제목: {title}</GameTitle>
      <GameIndicator isFull={isFull()}>
        {isFull() ? `참여불가` : `참여가능`}
      </GameIndicator>
      <JoinBtn
        onClick={() => {
          showModal('playerForm', mode);
        }}
      >
        JOIN
      </JoinBtn>
      <GameMode>
        <span style={{ color: '#9f9f9f' }}>MODE</span>{' '}
        {mode === CONSTDATA.MODEDATA.oneOnOne ? `1 : 1` : `5 : 5`}
      </GameMode>
      <CurruntRoomInfo>
        <TeamInfo>
          <TeamTitle side="blue">
            BLUE ({userList.blue.length - getJoiningPlayerCount(userList.blue)}/
            {`${userList.blue.length}`})
          </TeamTitle>
          {mode === CONSTDATA.MODEDATA.oneOnOne ? (
            <TeamRoleIconContainer>
              <RoleIcon
                mode={mode}
                src={`/images/ROLE/solo.png`}
                isEmpty={userList.blue[0] !== ''}
              />
            </TeamRoleIconContainer>
          ) : (
            <TeamRoleIconContainer>
              {roles.map((role, idx) => {
                return (
                  <RoleIcon
                    mode={mode}
                    key={idx}
                    src={`/images/ROLE/${role}.png`}
                    isEmpty={userList.blue[idx] !== ''}
                  />
                );
              })}
            </TeamRoleIconContainer>
          )}
        </TeamInfo>
        <TeamInfo>
          <TeamTitle side="red">
            RED ({userList.red.length - getJoiningPlayerCount(userList.red)}/
            {`${userList.red.length}`})
          </TeamTitle>
          {mode === CONSTDATA.MODEDATA.oneOnOne ? (
            <TeamRoleIconContainer>
              <RoleIcon
                mode={mode}
                src={`/images/ROLE/solo.png`}
                isEmpty={userList.red[0] !== ''}
              />
            </TeamRoleIconContainer>
          ) : (
            <TeamRoleIconContainer>
              {roles.map((role, idx) => {
                return (
                  <RoleIcon
                    mode={mode}
                    key={idx}
                    src={`/images/ROLE/${role}.png`}
                    isEmpty={userList.red[idx] !== ''}
                  />
                );
              })}
            </TeamRoleIconContainer>
          )}
        </TeamInfo>
      </CurruntRoomInfo>
    </GameRoomLayout>
  );
};

export default GameRoom;

const GameRoomLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  width: 650px;
  height: 230px;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid whitesmoke;
`;

const GameIndicator = styled.span`
  position: absolute;
  font-size: 18px;
  font-weight: 700;
  left: 16px;
  bottom: 8px;

  ${props =>
    props.isFull
      ? css`
          color: ${props => props.theme.red.redMain};
        `
      : css`
          color: ${props => props.theme.green.greenMain};
        `}
`;

const GameTitle = styled.p`
  text-align: left;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
`;

const CurruntRoomInfo = styled.div`
  display: flex;
  /* background-color: gray; */
  justify-content: space-between;
  margin-top: 4px;
  width: 600px;
  height: 150px;
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px;
  width: 50%;
  height: 100%;
`;

const TeamTitle = styled.span`
  font-size: 24px;
  font-weight: 600;

  ${props =>
    props.side === 'red'
      ? css`
          color: ${props => props.theme.red.redW80};
        `
      : css`
          color: ${props => props.theme.blue.blueW80};
        `};
`;

const TeamRoleIconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
  height: 50px;
`;

const RoleIcon = styled.img`
  width: 36px;
  height: 36px;
  opacity: 0.3;

  ${props =>
    props.isEmpty &&
    css`
      opacity: 1;
    `}
`;

const JoinBtn = styled.button`
  position: absolute;
  width: 140px;
  height: 32px;
  bottom: 8px;
  right: 8px;
  color: white;
  border: 3px solid whitesmoke;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
`;

const GameMode = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  top: 16px;
  right: 16px;
  color: whitesmoke;
`;
