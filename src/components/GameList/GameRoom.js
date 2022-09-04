import React from 'react';
import styled, { css } from 'styled-components';
import { CONSTDATA } from '../BanPick/CONSTDATA';

const GameRoom = ({ mode, showModal }) => {
  const roles = Object.keys(CONSTDATA.ROLEDATA);

  return (
    <GameRoomLayout>
      <GameTitle>방 제목: 빠른 협곡 1:1 초보만</GameTitle>
      <GameIndicator>참여가능</GameIndicator>
      <JoinBtn
        onClick={() => {
          showModal('playerForm', mode);
        }}
      >
        JOIN
      </JoinBtn>
      <GameMode>
        <span style={{ color: '#9f9f9f' }}>MODE</span>{' '}
        {mode === 1 ? `1 : 1` : `5 : 5`}
      </GameMode>
      <CurruntRoomInfo>
        <TeamInfo>
          <TeamTitle side="blue">BLUE (1/{`${mode === 1 ? 1 : 5}`})</TeamTitle>
          <TeamRoleIconContainer>
            {roles.map((role, idx) => {
              return (
                <RoleIcon
                  mode={mode}
                  key={idx}
                  src={`/images/ROLE/${role}.png`}
                />
              );
            })}
          </TeamRoleIconContainer>
        </TeamInfo>
        <TeamInfo>
          <TeamTitle side="red">RED (0/{`${mode === 1 ? 1 : 5}`})</TeamTitle>
          <TeamRoleIconContainer>
            {roles.map((role, idx) => {
              return (
                <RoleIcon
                  mode={mode}
                  key={idx}
                  src={`/images/ROLE/${role}.png`}
                />
              );
            })}
          </TeamRoleIconContainer>
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
  color: ${props => props.theme.green.greenMain};
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
  ${props =>
    props.mode === 1 &&
    css`
      opacity: 0.3;
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
  /* text-shadow: -2px 0 whitesmoke, 0 2px whitesmoke, 2px 0 whitesmoke,
    0 -2px whitesmoke; */
`;
