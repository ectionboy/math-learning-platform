import React from 'react';
import bg from '../../assets/bg.png';
import {
  BgContainer,
  ContainerStyled,
  TitleContainer,
  TitleEl,
} from './Title.styled';
import { Button } from '@mui/material';

const Title = () => {
  return (
    <ContainerStyled>
      <TitleContainer>
        <TitleEl>Math learning platform </TitleEl>
        <Button variant="contained" sx={{ backgroundColor: '#2eacff' }}>
          Почнімо
        </Button>
      </TitleContainer>
      <BgContainer>
        <img src={bg} alt="bg" width={'460px'} height={'320px'} />
      </BgContainer>
    </ContainerStyled>
  );
};

export default Title;
