import { useState } from 'react';
import { AppBar } from './AppBar';
import { MobileMenu } from './MobileMenu';
import { Suspense } from 'react';
import { Footer } from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Divider, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh ">
      <AppBar onMobileMenuOpen={handleMobileMenuOpen} />{' '}
      <Box flex="1" mt="70px">
        <Container maxW="container.sm" minW={320} pt={4} pb={4}>
          <main>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </main>
        </Container>
      </Box>
      <Divider />
      <Footer />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      />{' '}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        theme="dark"
      />
    </Box>
  );
};

export default Layout;
