import logo from './logo.svg';
import './App.css';
import YK from './components/YK';
import HOC from './components/HOC';
import Counter from './components/Counter';
import UserList from './components/UserList'
import {Env} from './components/Env'

function App() {
  return (
    <div className="App">
      <h3>{Env.name} | {Env.url}</h3>
      <YK/>
      <HOC />
      <Counter />
      <UserList />
    </div>
  );
}

export default App;
