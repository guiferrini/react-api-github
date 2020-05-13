import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  //<Routes />; qdo só 1 componente posso utilizar direto, sem return...
  // com + de 1 componente e linha necessita do parenteses por volta...
  <> {/**n posso ter 2 elementos juntos, tenho q colocar <> nome: fragment */}
    <BrowserRouter> {/** BrowserRouteré a '/' qdo digita a url, é o caminho q esta em index.tsx */}
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
