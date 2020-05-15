// posso usar function xx() {}... mas usarei const xx = () => {}, consigo definir a tipagem de forma mais simples neste formato
// FC: function Component
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return <h1>Repository: {params.repository}</h1>;
}

export default Repository;
