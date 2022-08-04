import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return <NavLayout>Nav</NavLayout>;
};

export default Nav;

const NavLayout = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.black.black85};
`;
