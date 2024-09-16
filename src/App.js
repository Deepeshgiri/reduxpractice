import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import User from './components/User';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <User/>
      <UserList/>
    </div>
  );
}

export default App;
