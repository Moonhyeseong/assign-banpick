import React from 'react';
import styled from 'styled-components';
import { HiRefresh } from 'react-icons/hi';
import { BsCheck } from 'react-icons/bs';
import { MODEDATA } from '../CONSTDATA/CONSTDATA';

const ListFilter = ({ showModal, setFilterData, filterData }) => {
  const handleSearchInput = event => {
    setFilterData({ ...filterData, searchFilter: event.target.value });
  };

  const handleModeCheckBox = option => {
    if (option === MODEDATA.oneOnOne) {
      if (filterData.checkBoxFilter.one === '') {
        setFilterData({
          ...filterData,
          checkBoxFilter: { one: option, five: filterData.checkBoxFilter.five },
        });
      } else {
        setFilterData({
          ...filterData,
          checkBoxFilter: { one: '', five: filterData.checkBoxFilter.five },
        });
      }
    } else if (option === MODEDATA.fiveOnfive) {
      if (filterData.checkBoxFilter.five === '') {
        setFilterData({
          ...filterData,
          checkBoxFilter: { one: filterData.checkBoxFilter.one, five: option },
        });
      } else {
        setFilterData({
          ...filterData,
          checkBoxFilter: {
            one: filterData.checkBoxFilter.one,
            five: '',
          },
        });
      }
    }
  };

  return (
    <ListFilterLayout>
      <Title>BanPick Simulator 멀티플레이 로비</Title>
      <FilterContainer>
        <RefreshBtn>
          <HiRefresh size="26" color="#fff" />
        </RefreshBtn>
        <SearchInputContainer>
          <SearchInput
            placeholder="방 이름 또는 코드를 입력하세요"
            onChange={event => {
              handleSearchInput(event);
            }}
          />
        </SearchInputContainer>
        <CheckBoxContainer>
          <CheckBox onClick={() => handleModeCheckBox(1)}>
            {filterData.checkBoxFilter.one === MODEDATA.oneOnOne && (
              <BsCheck size="30" />
            )}
          </CheckBox>{' '}
          1:1
        </CheckBoxContainer>
        <CheckBoxContainer>
          <CheckBox onClick={() => handleModeCheckBox(2)}>
            {filterData.checkBoxFilter.five === MODEDATA.fiveOnfive && (
              <BsCheck size="30" />
            )}
          </CheckBox>{' '}
          5:5
        </CheckBoxContainer>
        <MakeGameBtnContainer>
          <MakeGameBtn
            onClick={() => {
              showModal('simulatorForm');
            }}
          >
            방만들기
          </MakeGameBtn>
          <MakeGameBtn
            onClick={() => {
              showModal('soloModeForm');
            }}
          >
            혼자하기
          </MakeGameBtn>
        </MakeGameBtnContainer>
      </FilterContainer>
    </ListFilterLayout>
  );
};

export default ListFilter;

const ListFilterLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 110px;
  padding: 12px 16px;
  border-bottom: 2px solid gray;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const RefreshBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => props.theme.black.black80};
  /* border: 2px solid ${props => props.theme.black.black40}; */
  border: 2px solid gray;

  cursor: pointer;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const SearchInputContainer = styled.div`
  width: 300px;
  height: 36px;
  background-image: url('https://user-images.githubusercontent.com/73605822/167045592-77756d96-0899-4141-9ff2-68397ffafd60.png');
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid ${props => props.theme.black.black80};
`;

const SearchInput = styled.input`
  margin-left: 40px;
  width: 250px;
  height: 36px;

  color: white;
  font-size: 20px;

  ::placeholder {
    font-size: 16px;
  }

  &:focus-visible {
    outline: none;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;

  height: 30px;
  font-size: 20px;
  font-weight: 700;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  width: 30px;
  height: 30px;
  border: 1px solid gray;
  cursor: pointer;
`;

const MakeGameBtn = styled.button`
  display: flex;
  align-items: center;
  right: 8px;
  font-size: 24px;
  font-weight: 900;
  border-bottom: 2px solid gray;
  color: white;
  cursor: pointer;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;

const MakeGameBtnContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 16px;
  right: 16px;
`;
