// posso usar function xx() {}... mas usarei const xx = () => {},
// consigo definir a tipagem de forma mais simples neste formato
// Tipagem -> React.FC
// FC: function Component
//Rota principal do app
import React from 'react';

import logo from '../../assets/lupa.svg';

import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Busce" width="15" />
      <Title>Busque repositórios no GitHub :)</Title>

      <Form action=''>
        <input placeholder="Digite a busca aqui" type="text"/>
        <button type="submit">Buscar</button>
      </Form>
    </>
  );
}

export default Dashboard;
