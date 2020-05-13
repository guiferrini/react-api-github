import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

const App: React.FC = () => (
  //<Routes />; Por so ter 1 componente posso utilizar direto, sem return...
  // com + de 1 componente e linha necessita do parenteses por volta...
  <BrowserRouter> {/**é a '/' qdo digita a url, é o caminho q esta em index.tsx */}
    <Routes />
  </BrowserRouter>
);

export default App;
