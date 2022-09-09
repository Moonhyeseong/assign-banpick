import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavLayout>
      <Title>BanPick Simulator</Title>
      <MenuList>
        <NavItem>
          <a href="/">Go To Lobby</a>
        </NavItem>
      </MenuList>
    </NavLayout>
  );
};

export default Nav;

const NavLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 36px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 8px;
  background-color: ${props => props.theme.black.black85};
`;

const MenuList = styled.div`
  display: flex;
  gap: 24px;
  height: 80%;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  font-size: 20px;
  border-bottom: 2px solid gray;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
