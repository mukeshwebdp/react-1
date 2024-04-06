import logo from './logo.svg';
import {Person} from './Que1'
import {Button} from './Que2'
import './App.css';


function App() {
  return (
    <div className="App">
      <Person name = 'Mukesh Kumar Singh' age= '22' />
      <Button text = 'Click me' onclick= {handleclick} />
    </div>
  );
}

export default App;
