import styled from '@emotion/styled';

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 20px auto;
  color: blue;
  background-color: white;
  padding: 20px 10px;
  border: 2px dashed blue;
  border-radius: 4%;
  @media screen and (min-width: 760px) {
width: 440px;
padding: 20px;
	}
	@media screen and (min-width: 1200px) {
    padding: 40px 80px 100px 80px;
    width: 500px;
    margin: 30px auto;
	}
`;
