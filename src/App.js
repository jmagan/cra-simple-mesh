import logo from './logo.svg';
import './App.css';
import { CardanoWallet, MeshProvider, useWallet } from '@meshsdk/react';
import DummyComponent from './DummyComponent';



function App() {



  return (
    <MeshProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DummyComponent/>
        <CardanoWallet/>
      </header>
    </div>
    </MeshProvider>
  );
}

export default App;
