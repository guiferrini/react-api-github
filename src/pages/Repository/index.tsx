// posso usar function xx() {}... mas usarei const xx = () => {}, consigo definir a tipagem de forma mais simples neste formato
// FC: function Component
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/lupa.svg';

import { Header, RepositoryInformation, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null); //null é o estado inicial | n eh um valor primitivo (string, number, boolean), qdo é uma array ou objeto devemos tipar a info do estsado
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

useEffect(() => {
  api.get(`repos/${params.repository}`).then(response => {
    console.log(response.data);
  });

  api.get(`repos/${params.repository}/issues`).then(response => {
    console.log(response.data);
  });

  // alternatica, await all, faz tds as promises e retorna o resultado juntas
  // Promise.race -> CEP em + de uma api... usa const unica e usa um resultado e os demais descarta
  /**
   * async function carregar(): Promise<void> {
   *  const [repository, issues]  = await Promise.all([
   *    api.get(`repos/${params.repository}`),
   *    api.get(`repos/${params.repository}/issues`),
   *  ]);
   *
   *  console.log(repository);
   *  console.log(issues);
   * }
   */

}, [params.repository]);

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
