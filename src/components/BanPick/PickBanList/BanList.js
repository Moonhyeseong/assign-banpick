import React from 'react';
import styled from 'styled-components';

const BanList = () => {
  return (
    <BanListLayout>
      <BanListItem />
      <BanListItem />
      <BanListItem />
      <BanListItem />
      <BanListItem />
    </BanListLayout>
  );
};

export default BanList;

const BanListLayout = styled.div`
  position: absolute;
  display: flex;
  bottom: 8px;
`;

const BanListItem = styled.div`
  width: 66px;
  height: 66px;
  border: 1px solid ${props => props.theme.black.black85}; ;
`;
