import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  gap: 7px;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 300px;
  border: 1px solid blue;
`;

const Input = styled.input`
  outline: none;
  padding: 5px;
`;

const Button = styled.button`
  width: 80px;
  padding: 6px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  background-color: blue;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #918d8d;
  }
  @media screen and (min-width: 760px) {
    width: 100px;
    padding: 7px;
    font-size: 14px;
  }
`;

export { Form, Input, Button };