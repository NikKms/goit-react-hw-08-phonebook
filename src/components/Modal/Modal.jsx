import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';

const Modal = ({ children }) => {
  const modalStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyles = {
    width: '80%',
    height: '80%',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const dispatch = useDispatch();

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
    <div style={modalStyles} onClick={handleCloseBackdrop}>
      <div style={contentStyles}>
        <button type="button" onClick={handleToggleModal}>
          GO BACK
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
