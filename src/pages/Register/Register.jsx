import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import {RegisterDiv, StyledFaReact} from './Register.styled'


export default function Register() {
  return (
      <RegisterDiv>
        <h1>Registration</h1>
        <RegisterForm />
        <StyledFaReact />
      </RegisterDiv>

  );
}