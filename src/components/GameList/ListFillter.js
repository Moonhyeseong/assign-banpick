import React from 'react';
import styled from 'styled-components';
// import {arr}
import { HiRefresh } from 'react-icons/hi';
const ListFillter = () => {
  return (
    <ListFillterLayout>
      <Title>BanPick Simulator 멀티플레이 로비</Title>
      <FilterContainer>
        <RefreshBtn>
          <HiRefresh size="28" color="#fff" />
        </RefreshBtn>
        <SearchInput />
      </FilterContainer>
    </ListFillterLayout>
  );
};

export default ListFillter;

const ListFillterLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 12px 16px;
  border-bottom: 2px solid gray;
`;

const Title = styled.p`
  font-size: 24px;
`;

const RefreshBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => props.theme.black.black80};
  border: 2px solid ${props => props.theme.black.black93}; ;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

const SearchInput = styled.div`
  width: 250px;
  height: 40px;
  border: 1px solid ${props => props.theme.black.black80};
`;
