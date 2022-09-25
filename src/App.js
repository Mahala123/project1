//import logo from './logo.svg';
//import { Switch } from 'react-router-dom';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';
//import { useSelector } from 'react-redux';

function App() {
  // const id1=useSelector(state=>state.exp.details)
  // console.log (id1)
  return (
    <div className="App">
    <Switch>
    <Route path='/' exact>
      <Page1/>
      </Route>
       <Route path='/page2' exact>
      <Page2/>
      </Route>
      <Route path='/page3' exact>
      <Page3/>
      </Route>
      <Route path='/page4'>
      <Page4/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
