// posso usar function xx() {}... mas usarei const xx = () => {},
// consigo definir a tipagem de forma mais simples neste formato
// Tipagem -> React.FC
// FC: function Component
//Rota principal do app
import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/lupa.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Busce" width="15" />
      <Title>Busque repositórios no GitHub :)</Title>

      <Form action=''>
        <input placeholder="Digite a busca aqui" type="text"/>
        <button type="submit">Buscar</button>
      </Form>

        {/**um container com: foto, nome repositorio e descrição */}
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/60007731?s=460&u=27edaa0ac331278d60be9c30ce03cc4b1c977399&v=4"
            alt="Guilherme"
          />
          <div>
            <strong>GuiFerrini/meu_app</strong>
            <p>descrição do meu_app</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/60007731?s=460&u=27edaa0ac331278d60be9c30ce03cc4b1c977399&v=4"
            alt="Guilherme"
          />
          <div>
            <strong>GuiFerrini/meu_app</strong>
            <p>descrição do meu_app</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/60007731?s=460&u=27edaa0ac331278d60be9c30ce03cc4b1c977399&v=4"
            alt="Guilherme"
          />
          <div>
            <strong>GuiFerrini/meu_app</strong>
            <p>descrição do meu_app</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
