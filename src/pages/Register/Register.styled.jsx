import styled from '@emotion/styled';
import { FaReact } from 'react-icons/fa';

export const RegisterDiv = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;
  color: blue;
  background-color: white;
  width: 85%;
  padding: 10px;
  border: 2px dashed blue;
  border-radius: 4%;
  @media screen and (min-width: 451px) {
    
  }
  @media screen and (min-width: 760px) {
  width: 500px;
  height: 500px;
  margin: 30px auto;
  padding: 40px 80px 100px 80px;
  }
`;

export const StyledFaReact = styled(FaReact)`
  font-size: 4rem;
  margin-bottom: 10px;
  animation: spin 10s infinite linear;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (min-width: 451px) {
    font-size: 6rem;
  }
  @media screen and (min-width: 760px) {
    font-size: 10rem;
  }
  @media screen and (min-width: 1200px) {
  }
`;