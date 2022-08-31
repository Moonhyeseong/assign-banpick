import React from 'react';
import styled from 'styled-components';

const DisconnectAlert = ({ setIsModalActive, disconnectEvent }) => {
  return (
    <ModalBackGround>
      <Modal>
        <ModalText>상대방이 밴픽을 종료했습니다.</ModalText>
        <ModalBtn
          onClick={() => {
            setIsModalActive(false);
            disconnectEvent();
          }}
        >
          확인
        </ModalBtn>
      </Modal>
    </ModalBackGround>
  );
};

export default DisconnectAlert;

const ModalBackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  top: 0;
  left: 0;
  /* background-color: red; */
  z-index: 1000;
`;

const Modal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  top: 400px;
  width: 400px;
  height: 300px;
  background-color: black;
  border: 1px solid ${props => props.theme.white.white20};
  border-radius: 20px;
`;

const ModalText = styled.p`
  color: white;
  font-size: 24px;
`;

const ModalBtn = styled.button`
  width: 100px;
  height: 40px;
  font-size: 24px;
  color: white;
  background-color: gray;
  border-radius: 20px;
  border-color: black;

  cursor: pointer;
`;
