import styled from 'styled-components';

const NotFound = () => {
  return (
    <Layout>
      <ContentBox>
        <Desc>404 - 게임이 존재하지 않습니다.</Desc>
        <GotoLobbyBtn
          onClick={() => {
            window.location.replace('/');
          }}
        >
          로비로 이동하기
        </GotoLobbyBtn>
      </ContentBox>
    </Layout>
  );
};

export default NotFound;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const Desc = styled.p`
  font-size: 50px;
`;

const GotoLobbyBtn = styled.button`
  color: white;
  font-size: 30px;
  border-bottom: 2px solid white;
  cursor: pointer;
`;
