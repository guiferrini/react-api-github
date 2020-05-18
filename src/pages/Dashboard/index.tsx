// posso usar function xx() {}... mas usarei const xx = () => {},
// consigo definir a tipagem de forma mais simples neste formato
// Tipagem -> React.FC
// FC: function Component
//Rota principal do app
import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/lupa.svg';

import { Title, Form, Repositories, Error  } from './styles';

// tenho q criar interface dos repositories, setRepositories, se erro
// **só tenho q fazer tipagem do q eu for usar da API, n tenho q fazer de td
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState(''); // Valor do Input, string
  const [inputError, setInputError] = useState(''); // n eh um valor primitivo (string, number, boolean), qdo é uma array ou objeto devemos tipar a info do estsado
  const [repositories, setRepositories] = useState<Repository[]>(() => {
  const storageRepositories = localStorage.getItem('@Api_GitHub:repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories); // .parse p desfazer .stringify
    } else {
      return [];
    }
  });

  //Argument of type 'Repository[]' is not assignable to parameter of type 'string' ->JSON.stringify
  useEffect(() => {
    localStorage.setItem(
      '@Api_GitHub:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault(); // o submit recarrega a pagina, esse evita recarregar

    if (!newRepo) {
      setInputError('Digite Autor/Nome do repositorio para efetuar a busca');
      return;
    }

    try {
        // Adicão de um novo repositorio:1° buscar API do Github 2° Salvar novo repositorio no estado
        const response = await api.get<Repository>(`repos/${newRepo}`);

        const repository = response.data;

        setRepositories([...repositories, repository]);  // copio a lista p n perder os dados e adiciono o novo dado
        setNewRepo(''); //limpar input p nova busca
        setInputError('') //limpa mensagem de erro
    } catch (err) {
        setInputError('Erro na busca. Fovor vefificar Autor/Nome do repositorio');
    }

  }

  return (
    <>
      <img src={logo} alt="GitHub Busce" width="15" />
      <Title>Busqua repositórios no GitHub :)</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
        <input
          value={newRepo} // text digitado, texto q o input tem
          onChange={(e) => setNewRepo(e.target.value)} //qdo o usuario altera o valor do input, recebe um evento
          placeholder="Digite a busca aqui -> autor/nome repositorio" type="text"
        />
        <button type="submit">Buscar</button>
      </Form>

      {/**Só mostra o error se ele tem algum valor -> uso if 'simplificado' do React -> se 1° acontece, executo 2° */}
      { inputError && <Error>{inputError}</Error> }

      {/**um container com: foto, nome repositorio e descrição */}
        {/**map p percorrer td o repository */}
        {/**dentro do 1° elemtenro do map tenho q ter KEY*/}
      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;
