import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Suspense } from 'react';
import { Footer } from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Divider, Box } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar />
      <Divider />
      <Box flex="1">
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </Box>
  );
};

export default Layout;
