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
  html_url: string;
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
    setRepository(response.data);
  });

  api.get(`repos/${params.repository}/issues`).then(response => {
    setIssues(response.data);
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

      {/**criando uma condição: se o repositorio existir, entao(&&), efetuo a criação */}
      { repository && (
        <RepositoryInformation>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>
                {repository.full_name}
              </strong>
              <p>
                {repository.description}
              </p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepositoryInformation>
      )}

      <Issues>
        {issues.map(issues => (
          /**Uso 'a', p direcionar p link externo */
          <a key={issues.id} href={issues.html_url}>
            <div>
              <strong>{issues.title}</strong>
              <p>{issues.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
}

export default Repository;
