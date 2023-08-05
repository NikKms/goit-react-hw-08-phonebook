import { AuthNav } from 'components/AuthNav';
import { AuthorizedMenu } from 'components/AuthorizedMenu';
import { Navigation } from 'components/Navigation';
import useAuth from 'hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <AuthorizedMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
