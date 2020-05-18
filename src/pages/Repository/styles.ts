import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #0366d6;
    opacity: 0.9;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    svg {
      margin-right: 2px;
    }

  }
`;

export const RepositoryInformation = styled.section`
  margin-top: 30px;
  max-width: 700px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    div {
      margin-left: 20px;

      strong {
        font-size: 36px;
        color: #3a3a3a;
      }

      p {
        font-size: 20px;
        color: #3a3a3a;
        opacity: 0.8  ;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 25px;

    li {

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3a3a3a;
      }

      span {
        display: block;
        color: #3a3a3a;
        opacity: 0.8  ;
        margin-top: 4px;
      }
    }

  }
`;

export const Issues = styled.div`
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
