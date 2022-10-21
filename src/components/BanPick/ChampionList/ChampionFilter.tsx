import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type ChampionFilterProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
const ChampionFilter = ({ search, setSearch }: ChampionFilterProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <FilterLayout>
      <SearchFilter>
        <SearchInput
          type="text"
          placeholder="챔피언의 이름을 입력하세요"
          value={search}
          onChange={event => onChange(event)}
        />
      </SearchFilter>
    </FilterLayout>
  );
};

export default React.memo(ChampionFilter);

const FilterLayout = styled.div`
  position: relative;
  height: 60px;
  width: 100%;
`;

const SearchFilter = styled.div`
  position: absolute;
  right: 16px;
  top: 8px;
  width: 240px;
  height: 40px;
  border-radius: 20px;

  background-color: ${props => props.theme.black.black85};
  background-image: url('https://user-images.githubusercontent.com/73605822/167045592-77756d96-0899-4141-9ff2-68397ffafd60.png');
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
`;

const SearchInput = styled.input`
  margin-left: 40px;
  margin-top: 10px;
  height: 50%;
  width: 70%;
  background: none;
  border: none;

  font-size: 16px;
  color: ${props => props.theme.white.white80};

  &::placeholder {
    color: ${props => props.theme.white.white80};
    font-size: 14px;
  }

  &:focus-visible {
    outline: none;
  }
`;
