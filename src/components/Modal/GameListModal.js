import React from 'react';
import styled from 'styled-components';

const GameListModal = ({ setIsModalActive }) => {
  return (
    <ModalBackGround
      onClick={() => {
        setIsModalActive(false);
      }}
    ></ModalBackGround>
  );
};

export default GameListModal;

const ModalBackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);

  top: 0;
  left: 0;
  /* background-color: red; */
  z-index: 1000;
`;
