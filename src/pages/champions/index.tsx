import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const Champions = () => {
  return (
    <div>
      <Head>
        <title>Render Test</title>
      </Head>
      <LinkList>
        <LinkListItem>
          <Link href="/champions/csr" passHref>
            <LinkBtn>CSR Page</LinkBtn>
          </Link>
        </LinkListItem>
        <LinkListItem>
          <Link href="/champions/ssr" passHref>
            <LinkBtn>SSR Page</LinkBtn>
          </Link>
        </LinkListItem>
        <LinkListItem>
          <Link href="/champions/ssg" passHref>
            <LinkBtn>SSG Page</LinkBtn>
          </Link>
        </LinkListItem>
      </LinkList>
    </div>
  );
};

export default Champions;

const LinkListItem = styled.li`
  margin: 50px;
`;

const LinkList = styled.ul`
  column-gap: 2rem;
`;

const LinkBtn = styled.a`
  font-size: 50px;

  cursor: pointer;
`;

export const RenderTestLayout = styled.div`
  width: 1360px;
  height: auto;
  margin: 32px auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ChampionDataCard = styled.div`
  opacity: 0.5;
  text-align: center;
  :hover {
    opacity: 1;
  }

  cursor: pointer;
`;

export const ChampionName = styled.p`
  font-size: 20px;
  color: white;
`;
