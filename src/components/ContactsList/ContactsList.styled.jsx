import styled from '@emotion/styled';

const ListOfContact = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Container = styled.div`
  width: 200px;
  margin: 0;
  border: 1px solid blue;
  border-radius: 6px;
  padding: 20px;
  font-size: 13px;
  @media screen and (min-width: 451px) {
   width: 300px;
     padding: 20px;
     font-size: 14px;
 }
   @media screen and (min-width: 1200px) {
     width: 300px;
     padding: 20px;
     font-size: 15px;
   }
 `;

export { ListOfContact, Container };
