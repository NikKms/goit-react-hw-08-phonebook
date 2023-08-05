import { LoginForm } from 'components/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section>
      <h1>LOG IN</h1>
      <LoginForm />
      <p>
        If you don't have an account yet, please,{' '}
        <Link to="/register">register</Link>.
      </p>
    </section>
  );
};

export default Login;
