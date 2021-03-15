
import './App.css';
import Home from '../src/component/Home/Home'
import NabeBar from './component/Navbar/NaveBar.jsx'
import Contact from './component/Card/Cards'
import  {Registration} from './component/Regestration/Registration.jsx'
import { BrowserRouter as  Router, Switch, Route, } from "react-router-dom";
function App() {
  return (
    
    <Router>
      <NabeBar/>
      <Switch>
        <Route exact  path='/' component={Home}/>
        <Route  path='/cases' component={Contact}/>
         <Route  path='/vecine' component={Registration}/>
      </Switch>
    </Router>
    
  );
}

export default App;
