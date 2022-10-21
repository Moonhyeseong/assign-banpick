import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { IUser } from '../../interfaces/user.interface';
import { ROLEDATA, MODEDATA } from '../CONSTDATA/CONSTDATA';

type GameIndicatorProps = {
  isFull: boolean;
};

type SideProps = {
  side: string;
};

type RoleIconProps = {
  isEmpty: boolean;
  mode: number;
};

type JoinBtnProps = {
  isFull: boolean;
};

const GameRoom = ({ showModal, gameData: { _id, title, mode, userList } }) => {
  const roles = Object.keys(ROLEDATA);

  const getJoiningPlayerCount = (playerList: IUser[]) => {
    const joiningPlayerCount = playerList?.reduce(
      (cnt: any, player: any) => cnt + ('' === player),
      0
    );
    return joiningPlayerCount;
  };

  const isFull = (): boolean => {
    return (
      userList?.blue.indexOf('') === -1 && userList?.red.indexOf('') === -1
    );
  };

  return (
    <GameRoomLayout>
      <GameTitle>방 제목: {title}</GameTitle>
      <GameIndicator isFull={isFull()}>
        {isFull() ? `입장불가` : `입장가능`}
      </GameIndicator>
      <JoinBtn
        isFull={isFull()}
        onClick={() => {
          if (!isFull()) {
            showModal('playerForm', mode, userList);
            sessionStorage.setItem('GAME_ID', _id);
          }
          isFull() && alert('입장이 불가한 게임입니다.');
        }}
      >
        JOIN
      </JoinBtn>
      <GameMode>
        <span style={{ color: '#9f9f9f' }}>MODE</span>{' '}
        {mode === MODEDATA.oneOnOne ? `1 : 1` : `5 : 5`}
      </GameMode>
      <CurruntRoomInfo>
        <TeamInfo>
          <TeamTitle side="blue">
            BLUE (
            {userList?.blue.length - getJoiningPlayerCount(userList?.blue)}/
            {`${userList?.blue.length}`})
          </TeamTitle>
          {mode === MODEDATA.oneOnOne ? (
            <TeamRoleIconContainer>
              <RoleIcon mode={mode} isEmpty={userList?.blue[0] !== ''}>
                <Image
                  priority
                  src="/images/ROLE/solo.png"
                  width="36"
                  height="36"
                />
              </RoleIcon>
            </TeamRoleIconContainer>
          ) : (
            <TeamRoleIconContainer>
              {roles.map((role, idx) => {
                return (
                  <RoleIcon
                    mode={mode}
                    key={idx}
                    isEmpty={userList?.blue[idx] !== ''}
                  >
                    <Image
                      priority
                      src={`/images/ROLE/${role}.png`}
                      width="36"
                      height="36"
                    />
                  </RoleIcon>
                );
              })}
            </TeamRoleIconContainer>
          )}
        </TeamInfo>
        <TeamInfo>
          <TeamTitle side="red">
            RED ({userList?.red.length - getJoiningPlayerCount(userList?.red)}/
            {`${userList?.red.length}`})
          </TeamTitle>
          {mode === MODEDATA.oneOnOne ? (
            <TeamRoleIconContainer>
              <RoleIcon mode={mode} isEmpty={userList?.red[0] !== ''}>
                <Image
                  priority
                  src="/images/ROLE/solo.png"
                  width="36"
                  height="36"
                />
              </RoleIcon>
            </TeamRoleIconContainer>
          ) : (
            <TeamRoleIconContainer>
              {roles.map((role, idx) => {
                return (
                  <RoleIcon
                    mode={mode}
                    key={idx}
                    isEmpty={userList?.red[idx] !== ''}
                  >
                    <Image
                      priority
                      src={`/images/ROLE/${role}.png`}
                      width="36"
                      height="36"
                    />
                  </RoleIcon>
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

const GameIndicator = styled.span<GameIndicatorProps>`
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

const TeamTitle = styled.span<SideProps>`
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

const RoleIcon = styled.div<RoleIconProps>`
  opacity: 0.3;
  width: auto;
  height: auto;
  ${props =>
    props.isEmpty &&
    css`
      opacity: 1;
    `}
`;

const JoinBtn = styled.button<JoinBtnProps>`
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

  ${props =>
    props.isFull &&
    css`
      opacity: 0.3;
    `}
`;

const GameMode = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  top: 16px;
  right: 16px;
  color: whitesmoke;
`;
