
import './App.css';
import Home from '../src/component/Home/Home'
import NabeBar from './component/Navbar/NaveBar.jsx'

import Data from "./component/Card/Data"
import { BrowserRouter as  Router, Switch, Route, } from "react-router-dom";
function App() {
  return (
    
    <Router>
      <NabeBar/>
      <Switch>
        <Route exact  path='/' component={Home}/>
        <Route  path='/cases' component={Data}/>
         
      </Switch>
    </Router>
    
  );
}

export default App;
