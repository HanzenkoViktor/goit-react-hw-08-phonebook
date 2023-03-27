import styled from '@emotion/styled';

export const UserDiv = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  @media screen and (min-width: 760px) {
    gap: 10px;
  }
  @media screen and (min-width: 1200px) {
    gap: 20px;
  }
`;

export const UserP = styled.p`
  color: blue;
  font-size: 12px;
  font-weight: 600;
  @media screen and (min-width: 760px) {
    font-size: 13px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 17px;
  }
`;

export const ButtonLogaut = styled.button`
  font-size: 12px;
  width: 60px;
  padding: 5px;
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
    width: 70px;
    padding: 7px;
  }
  @media screen and (min-width: 1200px) {
    width: 100px;
  height: 33px;
  font-size: 17px;
  }
`;