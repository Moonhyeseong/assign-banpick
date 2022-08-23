import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CONSTDATA } from '../BanPick/CONSTDATA';

const PlayerForm = ({
  setUserData,
  userData,
  mode,
  playerList,
  setPlayerList,
  gameId,
}) => {
  const [createdUserData, setCreatedUserData] = useState();

  const handleNameInput = e => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleRoleBtn = option => {
    setUserData({ ...userData, role: option });
  };

  const formValidator = () => {
    const formValues = Object.values(userData);
    return formValues.includes('');
  };

  const postAddUser = () => {
    const { name, side, role } = userData;

    fetch('http://localhost:8080/add/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        game_id: sessionStorage.getItem('GAME_ID'),
        name: name,
        side: side,
        role: role,
      }),
    })
      .then(res => res.json())
      .then(res => setCreatedUserData(res));

    setPlayerList({ ...playerList, [side]: [createdUserData] });
  };

  useEffect(() => {
    createdUserData && sessionStorage.setItem('USER_ID', createdUserData._id);
  });

  return (
    <PlayerFormLayout>
      <Caution>✓ 모든 플레이어의 준비가 완료되면 밴픽을 시작합니다.</Caution>
      <Caution>✓ 링크를 복사해 상대방을 초대하세요.</Caution>
      {sessionStorage.getItem('GAME_ID') && (
        <LinkContainer>
          <InviteLink>
            {`http://localhost:3000/${gameId}?side=blue`}

            <CopyToClipboard text={`http://localhost:3000/${gameId}?side=blue`}>
              <CopyBtn
                side="blue"
                onClick={() => {
                  alert('링크가 복사되었습니다.');
                }}
              >
                블루팀 초대링크 복사
              </CopyBtn>
            </CopyToClipboard>
          </InviteLink>
          <InviteLink>
            {`http://localhost:3000/${sessionStorage.getItem(
              'GAME_ID'
            )}?side=red`}
            <CopyToClipboard
              text={`http://localhost:3000/${sessionStorage.getItem(
                'GAME_ID'
              )}?side=red`}
            >
              <CopyBtn
                side="red"
                onClick={() => {
                  alert('링크가 복사되었습니다.');
                }}
              >
                레드팀 초대링크 복사
              </CopyBtn>
            </CopyToClipboard>
          </InviteLink>
        </LinkContainer>
      )}

      {CONSTDATA.MODEDATA.oneOnOne === mode ? (
        <FormContainer>
          <NameInputContainer>
            대표 소환사명을 입력해 주세요.
            <PlayerNameInput onChange={e => handleNameInput(e)} />
          </NameInputContainer>
        </FormContainer>
      ) : (
        <FormContainer>
          <NameInputContainer>
            소환사명을 입력해 주세요.
            <PlayerNameInput onChange={e => handleNameInput(e)} />
          </NameInputContainer>
          <BtnContainer>
            포지션을 선택해 주세요.
            {ROLE_INFO.map((role, idx) => {
              return (
                <PlayerRoleBtn
                  key={idx}
                  onClick={() => handleRoleBtn(role)}
                  isSelected={role === userData.role}
                >
                  {role}
                </PlayerRoleBtn>
              );
            })}
          </BtnContainer>
        </FormContainer>
      )}
      <ReadyBtn
        disabled={formValidator()}
        onClick={() => {
          !formValidator() && postAddUser();
        }}
      >
        Ready
      </ReadyBtn>
    </PlayerFormLayout>
  );
};

export default PlayerForm;

const PlayerFormLayout = styled.div`
  width: 600px;
  height: auto;
  text-align: center;
`;

const Caution = styled.p`
  margin-top: 16px;
  color: whitesmoke;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`;

const InviteLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  padding-left: 2px;
  font-size: 16px;
  border: 2px solid white;
`;

const CopyBtn = styled.button`
  height: 24px;
  margin-left: 2px;
  background-color: white;
  font-weight: 900;
  border: 3px solid white;
  font-size: 18px;
  cursor: pointer;
  ${props =>
    props.side === 'blue'
      ? css`
          color: ${props => props.theme.blue.blueW80};
        `
      : css`
          color: ${props => props.theme.red.redW80};
        `}
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-size: 20px;
  margin-top: 80px;
`;

const NameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const PlayerNameInput = styled.input`
  width: 200px;
  height: 30px;
  margin: 16px 40px;
  background-color: white;
  font-size: 24px;
  &:focus-visible {
    outline: none;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const PlayerRoleBtn = styled.span`
  opacity: 0.3;
  border-bottom: 3px solid white;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  ${props =>
    props.isSelected &&
    css`
      opacity: 1;
    `}
`;

const ReadyBtn = styled.button`
  width: 170px;
  height: 50px;
  margin-top: 100px;
  background-color: gray;
  border-radius: 25px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.3;
      cursor: default;
    `}
`;

const ROLE_INFO = ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT'];