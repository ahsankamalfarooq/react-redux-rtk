import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import Reward from './components/Reward';
import Admin from './components/Bonus copy';

function App() {

  const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=>state.bonus.points)
  // console.log(points)

  return (
    <div className="App">
      <h1>App</h1>
      {/* { account.pending ? <p>loading....</p> : account.error ? <p>{account.error}</p> : */}
      <h3>Current Amount : {amount}</h3>
      {/* } */}
      <h3>Total Bonus : {points}</h3>
    <Account></Account>
    <Bonus></Bonus>
    <Reward></Reward>
    <Admin></Admin>
    </div>
  );
}

export default App; 
