import React from 'react';
import styled from 'styled-components';

const ChampionFilter = ({ search, setSearch }) => {
  const onChange = e => {
    setSearch(e.target.value);
  };
  return (
    <FilterLayout>
      {/* <PositionFilter>
        {POSITION_ICON.map((postion, idx) => {
          return <PostionIcon src={postion.url} key={idx} />;
        })}
      </PositionFilter> */}
      <SearchFilter>
        <SearchInput
          type="text"
          placeholder="챔피언의 이름을 입력하세요"
          value={search}
          onChange={e => onChange(e)}
        />
      </SearchFilter>
    </FilterLayout>
  );
};

export default ChampionFilter;

const FilterLayout = styled.div`
  position: relative;
  height: 60px;
  width: 100%;
`;

const PositionFilter = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  left: 16px;
  top: 8px;
  width: 240px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => props.theme.black.black85};
`;

const PostionIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;

  opacity: 0.3;
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
    font-size: 12px;
  }

  &:focus-visible {
    outline: none;
  }
`;

const POSITION_ICON = [
  {
    position: 'TOP',
    url: 'https://user-images.githubusercontent.com/73605822/167045520-344fd164-5ec9-42b2-b3bb-dbe0c5a097b2.png',
  },
  {
    position: 'JUNGLE',
    url: 'https://user-images.githubusercontent.com/73605822/167045530-c2376d60-be3f-4965-b333-fade562ef1b7.png',
  },
  {
    position: 'MID',
    url: 'https://user-images.githubusercontent.com/73605822/167045523-aa9370d3-f81e-4c5f-9c00-0c0327230d22.png',
  },
  {
    position: 'ADC',
    url: 'https://user-images.githubusercontent.com/73605822/167045528-17861c55-a452-4d32-874d-1ccaa947f3d8.png',
  },
  {
    position: 'SPT',
    url: 'https://user-images.githubusercontent.com/73605822/167045529-03a24ca7-313c-41d7-92d5-9c8aef22c679.png',
  },
];
