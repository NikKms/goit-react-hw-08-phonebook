import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';

const ContactItem = ({ name, number, contactId }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setVisible(prevState => !prevState);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <div>
        <button type="button" onClick={toggleMenu}>
          {visible ? 'Close Menu' : 'Open Menu'}
        </button>
        {visible && (
          <div>
            <button
              type="button"
              onClick={() => dispatch(toggleModal({ name, number, contactId }))}
            >
              more info
            </button>
            <a href={`tel:${number}`}>TELEFONED</a>
          </div>
        )}
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default ContactItem;
