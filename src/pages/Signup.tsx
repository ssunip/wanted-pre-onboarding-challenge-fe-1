import React from 'react';
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

const SignupContainer = styled.main`
  display: flex;
  width: 40rem;
  height: 25rem;
  border-radius: 10px;
  box-shadow: 2px 5px 15px 5px #00000030;
  overflow: hidden;
`;

const SignupImg = styled.img`
  width: 22rem;
  height: fit-content;
`;

const SignupInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #84a5ca;
`;

const Title = styled.div`
  padding: 2rem 0 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Form = styled.form`
  padding: 1rem;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 0.3rem 0;
  font-size: 0.9rem;
  font-weight: 700;
`;

const Input = styled.input`
  margin: 0 0 0.5rem 0;
  height: 2rem;
  border: none;
  border-bottom: 1px solid #b1b1b1;

  &:focus {
    border-bottom: 1.8px solid #84a5ca;
    transition: all 0.3s linear;
  }

  &:first-of-type {
    margin: 0 0 1.5rem 0;
  }
`;

const Button = styled.button`
  margin: 2rem 0 1.5rem;
  height: 2.5rem;
  border-radius: 5px;
  border: none;
  background-color: #84a5ca;
  color: #fff;
  font-weight: 700;

  &:hover {
    background-color: #7390b0;
  }
`;

const A = styled.a`
  font-size: 0.8rem;
  text-align: center;
  text-decoration: underline;
  font-weight: 600;
`;

const Signup = () => {
  return (
    <Body>
      <SignupContainer>
        <SignupImg src={image} alt="뉴진스 컨셉 포토 1" />
        <SignupInfo>
          <Title>회원가입</Title>
          <Form>
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              placeholder="ex) aaa@gmail.com"
              type="text"
            ></Input>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="8자 이상 입력"
            ></Input>
            <Button type="submit">회원가입 하기</Button>
            <A href="http://localhost:3000/auth/login">로그인하러 가기!</A>
          </Form>
        </SignupInfo>
      </SignupContainer>
    </Body>
  );
};

export default Signup;
