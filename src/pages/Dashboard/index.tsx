// posso usar function xx() {}... mas usarei const xx = () => {},
// consigo definir a tipagem de forma mais simples neste formato
// Tipagem -> React.FC
// FC: function Component
//Rota principal do app
import React from 'react';

import { Title } from './styles';

const Dashboard: React.FC = () => {
  return <Title>Busque repositórios no GitHub :)</Title>;
}

export default Dashboard;
