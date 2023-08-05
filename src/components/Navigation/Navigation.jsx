import { Link } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">HOME</Link>
      {isLoggedIn && <Link to="/contacts">CONTACTS</Link>}
    </nav>
  );
};

export default Navigation;
