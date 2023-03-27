import { NavigateLink, AuthDiv } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthDiv>
      <NavigateLink to="/register">Register</NavigateLink>
      <NavigateLink to="/login">Log In</NavigateLink>
    </AuthDiv>
  );
};
