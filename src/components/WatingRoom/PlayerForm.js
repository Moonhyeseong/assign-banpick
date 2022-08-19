import React from 'react';
import styled, { css } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CONSTDATA } from '../BanPick/CONSTDATA';

const PlayerForm = ({ setUserData, userData, mode }) => {
  const handleNameInput = e => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleRoleBtn = option => {
    setUserData({ ...userData, role: option });
  };

  const handleSideBtn = option => {
    setUserData({ ...userData, side: option });
  };

  const formValidator = () => {
    const formValues = Object.values(userData);
    return formValues.includes('');
  };

  return (
    <PlayerFormLayout>
      <Caution>✓ 모든 플레이어의 준비가 완료되면 밴픽을 시작합니다.</Caution>
      <Caution>✓ 링크를 복사해 상대방을 초대하세요.</Caution>

      <InviteLink>
        http://localhost:3000/
        <CopyToClipboard text="http://localhost:3000/">
          <CopyBtn>COPY</CopyBtn>
        </CopyToClipboard>
      </InviteLink>
      {CONSTDATA.MODEDATA.oneOnOne === mode ? (
        <FormContainer>
          <NameInputContainer>
            대표 소환사명을 입력해 주세요.
            <PlayerNameInput onChange={e => handleNameInput(e)} />
          </NameInputContainer>
          <BtnContainer>
            진영을 선택해 주세요.
            <SideBtnContianer>
              <SideBtn
                onClick={() => handleSideBtn('blue')}
                isSelected={userData.side === 'blue'}
              >
                BLUE
              </SideBtn>
              <SideBtn
                onClick={() => handleSideBtn('red')}
                isSelected={userData.side === 'red'}
              >
                RED
              </SideBtn>
            </SideBtnContianer>
          </BtnContainer>
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
        isDisabled={formValidator()}
        disabled={formValidator()}
        onClick={() => {
          console.log('준비 됐다');
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

const InviteLink = styled.div`
  display: inline-block;
  margin-top: 8px;
  padding-left: 8px;
  border: 2px solid white;
  font-size: 18px;
`;

const CopyBtn = styled.button`
  height: 24px;
  margin-left: 4px;
  background-color: white;
  font-weight: 600;
  border: 3px solid white;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-size: 20px;
  margin-top: 120px;
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

const SideBtnContianer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const SideBtn = styled.span`
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
  margin-top: 120px;
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
