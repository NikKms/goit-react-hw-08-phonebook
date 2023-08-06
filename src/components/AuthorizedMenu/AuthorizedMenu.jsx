import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';

const AuthorizedMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOutBgColor = useColorModeValue('gray.300', 'gray.700');
  const userNameColor = useColorModeValue('blue.500', 'white');

  const handleLogOut = () => dispatch(logout());

  return (
    <Flex justifyContent="center" align="center" gap={4}>
      <Text fontWeight="bold" color={userNameColor}>
        {user.name}
      </Text>
      <Button
        fontSize={13}
        bg={logOutBgColor}
        color="white"
        border="1px solid transparent"
        borderRadius="md"
        px={3}
        py={1}
        transition="all 0.2s"
        onClick={handleLogOut}
      >
        LOG OUT
      </Button>
    </Flex>
  );
};

export default AuthorizedMenu;
