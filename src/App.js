import logo from './logo.svg';
import './App.css';
// import { StopWatch } from './components/StopWatch';
// import { ContactForm1 } from './components/ContactForm1';
import { ToDoList } from './components/ToDoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoList />
      </header>
      {/* <StopWatch /> */}
      {/* <ContactForm1 /> */}
      
      
    </div>
  );
}

export default App;
