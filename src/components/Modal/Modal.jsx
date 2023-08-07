import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';
import { Box, Button, Container, useColorMode } from '@chakra-ui/react';
import { GiReturnArrow } from 'react-icons/gi';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  const handleToggleModal = useCallback(() => {
    dispatch(toggleModal());
  }, [dispatch]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        handleToggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleToggleModal]);

  const handleCloseBackdrop = e => {
    if (e.target === e.currentTarget) handleToggleModal();
  };

  return (
    <Box
      onClick={handleCloseBackdrop}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      bg="rgba(0, 0, 0, 0.7)"
      zIndex="9999"
    >
      <Container>
        <Box
          p={4}
          borderRadius="md"
          boxShadow="md"
          height="95%"
          maxWidth="container.sm"
          minW="320px"
          bg={colorMode === 'dark' ? 'gray.800' : 'white'}
          zIndex="9999"
        >
          <Button type="button" onClick={handleToggleModal} mb={4}>
            <GiReturnArrow />
          </Button>
          {children}
        </Box>
      </Container>
    </Box>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
