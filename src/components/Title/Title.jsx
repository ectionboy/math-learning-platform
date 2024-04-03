import React from 'react';
import bg from '../../assets/bg.png';
import {
  BgContainer,
  ContainerStyled,
  TitleContainer,
  TitleEl,
} from './Title.styled';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Title = () => {
    const navigate = useNavigate();

    const navTo = (to) => {
      navigate(to)
    };
  return (
    <ContainerStyled>
      <TitleContainer>
        <TitleEl>Math learning platform </TitleEl>
        <Button variant="contained" onClick={()=>navTo("/subject")} sx={{ backgroundColor: '#2eacff' }}>
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
