import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';
import { Box, Flex, Button, Text, Link, Icon } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { FiUser, FiPhone, FiInfo } from 'react-icons/fi';

const ContactItem = ({ name, number, contactId }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setVisible(prevState => !prevState);
  };

  return (
    <Box as="div" p={2} borderWidth="1px" borderRadius="md" boxShadow="md">
      <Flex justify="space-between" align="center">
        <Box>
          <Flex align="center">
            <FiUser size={18} style={{ marginRight: '8px' }} />
            <Text as="h3" fontSize="xl" fontWeight="bold">
              {name}
            </Text>
          </Flex>
          <Flex align="center">
            <FiPhone size={18} style={{ marginRight: '8px' }} />
            <Text as="h3" fontSize="lg">
              {number}
            </Text>
          </Flex>
        </Box>
        <Button variant="ghost" onClick={toggleMenu} size="sm">
          {visible ? (
            <Icon as={ChevronUpIcon} boxSize={4} />
          ) : (
            <Icon as={ChevronDownIcon} boxSize={4} />
          )}
        </Button>
      </Flex>
      {visible && (
        <Box
          mt={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            leftIcon={<FiInfo size={16} />}
            onClick={() => dispatch(toggleModal({ name, number, contactId }))}
          >
            more info
          </Button>
          <Link
            href={`tel:${number}`}
            p={4}
            bg="green.500"
            borderRadius="30%"
            _hover={{ bg: 'green.300' }}
          >
            <Flex align="center">
              <FiPhone size={25} style={{ marginRight: '4px' }} />
            </Flex>
          </Link>
        </Box>
      )}
    </Box>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default ContactItem;
