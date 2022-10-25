import React from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { BASE_URL } from '../../config';

const Ssg = ({ championData }) => {
  console.log('championData', championData);
  console.log('championData', typeof championData);
  const championList = Object.values(championData);

  return <div>SSG</div>;
};

export default Ssg;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${BASE_URL}:8080/game/champions`);
  const championData = await res.json();

  return { props: { championData: championData } };
};
