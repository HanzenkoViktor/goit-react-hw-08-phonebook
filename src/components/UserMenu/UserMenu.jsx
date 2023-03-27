import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {UserDiv, UserP, ButtonLogaut} from './UserMenu.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserDiv>
      <UserP>Hi, {user.name}</UserP>
      <ButtonLogaut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonLogaut>
    </UserDiv>
  );
};