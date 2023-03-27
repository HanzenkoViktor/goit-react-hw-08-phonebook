import { LoginForm } from 'components/LoginForm/LoginForm';
import {LogintDiv, StyledFaReact} from './Login.styled'

export default function Login() {
  return (
    <LogintDiv>
        <h1>Login</h1>
      <LoginForm />
      <StyledFaReact />
    </LogintDiv>
  );
}