import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../config';

const Csr = () => {
  const [championList, setChampionList] = useState(null);

  useEffect(() => {
    const getChampionData = async () => {
      const res = await fetch(`${BASE_URL}:8080/game/champions`);
      const championData = await res.json();
      const championListData = Object.values(championData);

      setChampionList(championListData);
    };
    getChampionData();
  }, []);

  return <div>CSR</div>;
};

export default Csr;
