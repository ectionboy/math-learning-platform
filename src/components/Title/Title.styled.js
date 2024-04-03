import styled from 'styled-components';
import bg from '../../assets/bg.png';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  width: 100%;

  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    background-image: none;
  }

  /*
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 128px;
    padding-right: 128px;
  } */
`;
export const TitleContainer = styled.div`
  background-color: #1a77d2e6;
  padding: 68px 24px;
  margin: 0 auto;
  max-width: 345px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin: 0;
    background-color: inherit;
  }
`;
export const BgContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const TitleEl = styled.h1`
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 1.2;
text-align: center;
color: aliceblue;
  @media screen and (min-width: 768px) {
color: #000;
  }
`;