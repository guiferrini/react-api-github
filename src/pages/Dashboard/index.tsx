// posso usar function xx() {}... mas usarei const xx = () => {},
// consigo definir a tipagem de forma mais simples neste formato
// Tipagem -> React.FC
// FC: function Component
import React from 'react';

const Dashboard: React.FC = () => {
  return <h1>Dashboard</h1>;
}

export default Dashboard;
