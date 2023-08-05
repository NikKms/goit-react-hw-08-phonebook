import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <ul>
      <li>
        <Link to="/register">REGISTRATION</Link>
      </li>
      <li>
        <Link to="/login">LOG IN</Link>
      </li>
    </ul>
  );
};

export default AuthNav;
