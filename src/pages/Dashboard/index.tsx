// posso usar function xx() {}... mas usarei const xx = () => {},
// consigo definir a tipagem de forma mais simples neste formato
// Tipagem -> React.FC
// FC: function Component
//Rota principal do app
import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/lupa.svg';

import { Title, Form, Repositories } from './styles';

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
  const [newRepo, setNewRepo] = useState(''); // Valor do Input
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
    ): Promise<void> {
    // evento do submit - FormEvent, evento do formulario
    event.preventDefault(); // o submit recarrega a pagina, esse evita recarregar
    // Adicão de um novo repositorio
    // 1° buscar/Consumir API do Github
    // 2° Salvar novo repositorio no estado
    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);  // copio a lista p n perder os dados e adiciono o novo dado
    setNewRepo(''); //limpar input p nova busca

  }

  return (
    <>
      <img src={logo} alt="GitHub Busce" width="15" />
      <Title>Busque repositórios no GitHub :)</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo} // text digitado, texto q o input tem
          onChange={(e) => setNewRepo(e.target.value)} //qdo o usuario altera o valor do input, recebe um evento
          placeholder="Digite a busca aqui" type="text"
        />
        <button type="submit">Buscar</button>
      </Form>

      {/**um container com: foto, nome repositorio e descrição */}
        {/**map p percorrer td o repository */}
        {/**dentro do 1° elemtenro do map tenho q ter KEY*/}
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
        </a>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;
