import { useSelector } from 'react-redux';
import { Box, Heading, Text } from '@chakra-ui/react';
import useAuth from 'hooks/useAuth';
import { selectUser } from 'redux/auth/authSelectors';
import { EmergencyLinks } from 'components/EmergencyLinks';
import { AuthLinks } from 'components/AuthLinks';
import { GuestLinks } from 'components/GuestLinks';

const Home = () => {
  const user = useSelector(selectUser);
  const { isLoggedIn } = useAuth();

  return (
    <>
      {' '}
      <Box>
        <Heading mb={4}>
          Hello {user ? (user.name ? user.name : 'there') : 'there'}
        </Heading>
        <Text fontSize="xl" mb={6}>
          Welcome to the Phone Book app.
        </Text>
      </Box>
      {isLoggedIn ? <AuthLinks /> : <GuestLinks />}
      <EmergencyLinks />
    </>
  );
};

export default Home;
