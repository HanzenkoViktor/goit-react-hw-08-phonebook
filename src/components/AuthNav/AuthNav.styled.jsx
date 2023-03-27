import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigateLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: blue;
  background-color: blue;
  width: 60px;
  font-size: 12px;
  padding: 4px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    box-shadow: 0px 0px 17px 5px rgba(92, 90, 90, 0.47);
    background-color: blue;
  }
  :hover,
  :focus {
    background-color: #918d8d;
  }
  @media screen and (min-width: 451px) {
    
  }
  @media screen and (min-width: 760px) {
    width: 100px;
    padding: 7px;
    font-size: 17px;
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const AuthDiv = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (min-width: 451px) {
    gap: 20px;
  }
  @media screen and (min-width: 760px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;