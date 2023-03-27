import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 10px auto;
  border: 2px dashed blue;
  border-radius: 6%;
  padding: 10px 10px;
  width: 85%;
  justify-content: space-between;
  @media screen and (min-width: 760px) {
    width: 440px;
    padding: 20px 20px;
  }
  @media screen and (min-width: 1200px) {
    width: 600px;
    padding: 30px 30px;
  }
`;