import React from 'react';
import styled from 'styled-components';
import PickCard from './PickCard';
import BanList from './BanList';
const PickList = ({ position }) => {
  return (
    <PickListLayout>
      {/* map 으로 변경 필요 */}
      <PickListWrapper>
        <PickCard position={position} />
        <PickCard position={position} />
        <PickCard position={position} />
        <PickCard position={position} />
        <PickCard position={position} />
      </PickListWrapper>
      <BanList />
    </PickListLayout>
  );
};

export default PickList;

const PickListLayout = styled.div`
  position: relative;
  background-color: #090909;
  width: 330px;
  height: 780px;
`;

const PickListWrapper = styled.div``;
