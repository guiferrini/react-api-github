// posso usar function xx() {}... mas usarei const xx = () => {}, consigo definir a tipagem de forma mais simples neste formato
// FC: function Component
import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/lupa.svg';

import { Header, RepositoryInformation, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Busce" width="15" />
        <Link to='/'>
          <FiChevronLeft size={20}/>
          Voltar
        </Link>
      </Header>

      <RepositoryInformation>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/60007731?s=460&u=27edaa0ac331278d60be9c30ce03cc4b1c977399&v=4"
            alt="gui"
          />
          <div>
            <strong>
              guiferri/meu_app
            </strong>
            <p>
              descrição...
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1000</strong>
            <span>starts</span>
          </li>
          <li>
            <strong>1000</strong>
            <span>starts</span>
          </li>
          <li>
            <strong>1000</strong>
            <span>starts</span>
          </li>
        </ul>
      </RepositoryInformation>

      <Issues>
        <Link to="huahua">
          <div>
            <strong>lalal</strong>
            <p>asd</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
}

export default Repository;
