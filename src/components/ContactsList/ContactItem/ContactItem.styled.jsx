import styled from '@emotion/styled';

const ContactItem = styled.li`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 5px;
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
  @media screen and (min-width: 451px) {
  width: 60px;
  font-size: 14px;
}
`;

export { ContactItem, Button };
