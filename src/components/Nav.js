import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavLayout>
      <Title>BanPick Simulator</Title>
      <MenuList>
        <GoToBanPick
          onClick={() => {
            sessionStorage.removeItem('GAME_ID');
            sessionStorage.removeItem('INGAME_ID');
          }}
        >
          <a href="/">Simulator</a>
        </GoToBanPick>
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
  height: 40px;
  padding-left: 80px;
  padding-right: 80px;
  background-color: ${props => props.theme.black.black85};
`;

const MenuList = styled.div`
  height: 80%;
`;

const GoToBanPick = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  font-size: 20px;
  border-bottom: 2px solid gray;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: 600;
`;
