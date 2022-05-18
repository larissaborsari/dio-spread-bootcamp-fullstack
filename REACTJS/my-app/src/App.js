import logo from './logo.svg';
import './App.css';

function primeiroJSX() {
  return (
    <div> Introdução ao ReactJS</div>
  )
}

function App() {
  return (
    <div className ="App">
      {primeiroJSX()}
    </div>
  )
}


export default App;
