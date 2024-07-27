import logo from './logo.svg';
import './App.css';
// import { StopWatch } from './components/StopWatch';
import { ContactForm1 } from './components/ContactForm1';


function App() {
  return (
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
      </header>
      {/* <StopWatch /> */}
      <ContactForm1 />
    </div>
  );
}

export default App;
