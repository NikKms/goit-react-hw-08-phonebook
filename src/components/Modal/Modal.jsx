import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';
import { Box, Button, useColorMode } from '@chakra-ui/react';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode(); // Получаем текущий цветовой режим (light или dark)

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
      <Box
        p={4}
        borderRadius="md"
        boxShadow="md"
        height="90%"
        width="90%"
        bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      >
        <Button type="button" onClick={handleToggleModal} mb={4}>
          CANCEL
        </Button>
        {children}
      </Box>
    </Box>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
