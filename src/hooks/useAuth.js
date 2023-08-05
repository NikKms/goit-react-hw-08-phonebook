import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/authSelectors';
import { selectContacts } from 'redux/contacts/selectorsContacts';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    contacts,
  };
};

export default useAuth;
