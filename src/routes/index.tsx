// Tipagem -> React.FC
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Router: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} /> {/* exact-> so a barra/; path, é o caminho da url -> '/' raiz; componente a ser exportado p a rota */}
    <Route path='/repository' component={Repository} />
  </Switch>
);

export default Router;
