import styled from 'styled-components';

//Templetes Literals `CSS dentro`;
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 20px;
`;

export const Form = styled.form`
  margin-top: 30px;
  max-width: 700px;

  display: flex;

  input {
    flex:1;
    height: 30px;
    padding: 0 15px;
    border: 0;
    box-shadow: 0px 1px 10px #3a3a3a;
    border-radius: 5px 0 0 5px;
    font-weight: bold;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width:200px;
    height: 30px;
    background: #0366d6;
    border-radius: 0 5px 5px 0;
    box-shadow: 0px 1px 10px #3a3a3a;
    border: 0;
    opacity: 0.9;
    transition: background-color 0.2s;

    &:hover {
      opacity: 1;
      font-weight: bold;
    }
  }
`;
// flex:1 -> ocupa o valor maximo possível até o proximo container (td menos o button)
