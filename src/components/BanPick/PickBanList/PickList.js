import React from 'react';
import styled from 'styled-components';
import PickCard from './PickCard';
const PickList = ({ position }) => {
  return (
    <PickListLayout>
      {/* map 으로 변경 필요 */}
      <PickCard position={position} />
      <PickCard position={position} />
      <PickCard position={position} />
      <PickCard position={position} />
      <PickCard position={position} />
    </PickListLayout>
  );
};

export default PickList;

const PickListLayout = styled.div`
  background-color: #090909;
  width: 330px;
  height: 780px;
`;
