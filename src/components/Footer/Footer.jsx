import { Container, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const navTo = to => {
    navigate(to);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: '#1976d2',
        color: '#ffffff',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <AdbIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => navTo('/')}
        sx={{
          mr: 2,
          display: { md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        MLP
      </Typography>
    </Container>
  );
};

export default Footer;
