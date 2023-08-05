import { RegisterForm } from 'components/RegisterForm';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section>
      <h1>REGISTER</h1>
      <RegisterForm />
      <p>
        If you already have an account, please
        <Link to="/login">log in</Link>.
      </p>
    </section>
  );
};

export default Register;
