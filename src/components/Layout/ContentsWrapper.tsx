import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';

const ContentsWrapper = ({ children }) => {
  return (
    <Layout>
      <Nav />
      <Wrapper>{children}</Wrapper>
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
