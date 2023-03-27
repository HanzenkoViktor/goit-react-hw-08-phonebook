import { useAuth } from '../../hooks';
import {Navigate, NavigateLink} from './Navigation.styled'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Navigate>
      <NavigateLink to="/">Home</NavigateLink>
      {isLoggedIn && <NavigateLink to="/contacts">Contacts</NavigateLink>}
    </Navigate>
  );
};