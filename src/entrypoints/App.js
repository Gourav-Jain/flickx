import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { HeaderBar, Dashboard } from '../components';


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Container>
        <Dashboard />
      </Container>
      <Divider />

    </div>
  );
}

export default App;
