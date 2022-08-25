import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import { SocketContext, socket } from '../../context/socket';

const ContentsWrapper = ({ children }) => {
  return (
    <Layout>
      <Nav />
      <SocketContext.Provider value={socket}>
        <Wrapper>{children}</Wrapper>
      </SocketContext.Provider>
    </Layout>
  );
};

export default ContentsWrapper;

const Layout = styled.div`
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 1360px;
  margin: 0 auto;
`;
