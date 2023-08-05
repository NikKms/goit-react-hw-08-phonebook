import useAuth from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from 'redux/auth/authSelectors';

const Home = () => {
  const user = useSelector(selectUser);
  const { isLoggedIn } = useAuth();

  const emergencyNumbers = [
    { name: 'Police', number: '102' },
    { name: 'Fire Department', number: '101' },
    { name: 'Ambulance', number: '103' },
    { name: 'Emergency Rescue Service', number: '112' },
  ];

  return (
    <section>
      {user ? (
        <h1>Hello {user.name ? user.name : 'there'}</h1>
      ) : (
        <h1>Hello there</h1>
      )}
      <h2>Welcome to the Phone Book app.</h2>
      {isLoggedIn ? (
        <div>
          <p>
            Your <Link to="/contacts">CONTACTS HERE</Link>
          </p>
          <h2>Emergency Numbers:</h2>
          <ul>
            {emergencyNumbers.map(contact => (
              <li key={contact.name}>
                <a href={`tel:${contact.number}`}>
                  {contact.name}: {contact.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>
            Please <Link to="/login">log in</Link> or
          </p>
          <p>if you don't have an account</p>
          <Link to="/register">Register</Link>
          <h2>Emergency Numbers:</h2>
          <ul>
            {emergencyNumbers.map(contact => (
              <li key={contact.name}>
                <a href={`tel:${contact.number}`}>
                  {contact.name}: {contact.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Home;
