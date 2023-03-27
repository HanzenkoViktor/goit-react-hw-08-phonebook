import styled from '@emotion/styled';

const SectionFilter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 17px;
  @media screen and (min-width: 760px) {
    font-size: 20px;
  }
`;

const Label = styled.label`
  margin: 5px;
 width: 210px;
 @media screen and (min-width: 451px) {
    width: 330px;
  }
`;
const Input = styled.input`
  outline: none;
  padding: 5px;
  border: 1px solid blue;
  margin-bottom: 20px;
`;


export { SectionFilter, Label, Input };
