import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import image from '../assets/nj-1.webp';

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 10px;
`;

const MainContainer = styled.main`
  display: flex;
  width: 40rem;
  height: 25rem;
  border-radius: 10px;
  box-shadow: 2px 5px 15px 5px #00000030;
  overflow: hidden;
`;

const MainImg = styled.img`
  width: 22rem;
  height: fit-content;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #84a5ca;
`;

const Title = styled.div`
  padding: 2rem 0 1rem;
  font-size: 1.2rem;
  font-weight: 700;
`;

const ButtonBox = styled.div`
  margin: 2rem;
  width: 55%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: #84a5ca;
  color: #fff;
  font-weight: 700;

  &:hover {
    background-color: #7390b0;
  }
`;

const Main = () => {
  return (
    <Body>
      <MainContainer>
        <MainImg src={image} alt="뉴진스 컨셉 포토 1" />
        <MainContent>
          <Title>오늘의 할일을 만들고 관리해보세요!</Title>
          <ButtonBox>
            <Link to="/auth/login">
              <Button>로그인</Button>
            </Link>
            <Link to="/auth/signup">
              <Button>회원가입</Button>
            </Link>
          </ButtonBox>
        </MainContent>
      </MainContainer>
    </Body>
  );
};

export default Main;
