import * as React from 'react';
import SavingSimulation from './pages/SavingSimulation';
import GlobalStyle from './globalStyles';

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <SavingSimulation></SavingSimulation>
    </>
  );
};

export default App;
