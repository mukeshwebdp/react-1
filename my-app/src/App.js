
import {Person} from './Que1'
import {Button} from './Que2'
import {Header} from './Que3'
import {List} from './Que4'
import './App.css';

const handleclick = ()=>{
  alert('Button clicked!');
}
let item = ['mango','Apple','Orange','Graps']

function App() {
  return (
    <div className="App">
      <Person name = 'Mukesh Kumar Singh' age= '22' />
      <Button text = 'Click me' onclick= {handleclick} />

      <Header title={"Hello world"} />
      <List item={item} />
    </div>
  );
}

export default App;
