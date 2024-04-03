import { Container } from '@mui/material';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
