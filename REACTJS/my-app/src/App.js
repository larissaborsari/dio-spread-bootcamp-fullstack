import logo from './logo.svg';
import './App.css';
import Button from './Button'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'

function sum(a, b){
  alert(a + b);
}

function primeiroJSX() {
  return (
    <div> <h1>Introdução ao ReactJS</h1>
    </div>
  )
}

function App() {
  return (
    <div className ="App">
      {primeiroJSX()}
      <Button onClick={() => sum(2022, -1998)} name={'Larissa'}/>
      <ComponenteA/>
      <ComponenteB/>
    </div>
  )
}


export default App;
