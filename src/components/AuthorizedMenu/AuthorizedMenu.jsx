import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const AuthorizedMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => dispatch(logout());

  return (
    <div>
      <span>USER AVATAR</span>
      <span>{user.name}</span>
      <button type="button" onClick={handleLogOut}>
        LOG OUT
      </button>
    </div>
  );
};

export default AuthorizedMenu;
