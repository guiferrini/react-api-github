import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

//Templetes Literals `CSS dentro`;
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 20px;
`;

export const Form = styled.form<FormProps>`
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

    ${(props) => props.hasError && css`
    box-shadow: 0px 1px 10px red;
    `}

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

export const Error = styled.span`
  display: block;
  color: red;
  margin-top: 12px;
`;

export const Repositories = styled.div`
  margin-top: 120px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
    display: block;
    text-decoration: none;
    color: #0366d6;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(5px);
      box-shadow: 0px 1px 5px #3a3a3a;
    }

    /**do 2° elemento em diante recebe */
    & + a {
      margin-top: 10px;
    }

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }

    div {
      margin-left: 10px;

      strong {
        font-size: 20px;
        color: #3a3a3a;
      }

      p {
        font-size: 16px;
        color: #3a3a3a;
        opacity: 0.9;
        margin-top: 1px;
      }
    }

    svg {
      margin-left: auto;
      color: #0366d6;
      opacity: 0.8;
    }

  }
`;


