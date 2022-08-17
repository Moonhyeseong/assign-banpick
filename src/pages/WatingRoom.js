import React from 'react';
import styled from 'styled-components';

const WatingRoom = ({ setIsPlayserReady, mode }) => {
  console.log(mode);
  return (
    <WatingListLayout>
      <WatingList>
        <WatingPlayer />
      </WatingList>
      <WatingList>
        <WatingPlayer />
      </WatingList>
    </WatingListLayout>
  );
};

export default WatingRoom;

const WatingListLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 776px;
`;

const WatingList = styled.div`
  position: relative;
  width: 330px;
  height: 776px;
`;

const WatingPlayer = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  background-color: black;
  border: 2px solid ${props => props.theme.black.black80};
`;
