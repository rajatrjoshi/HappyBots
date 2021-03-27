import './App.css';
import Header from './Header.js';
import Items from './Items.js';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import FindCenter from './FindCenter.js';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Items />
          </Route>
          <Route path="/service-center">
            <FindCenter />
          </Route>
        </Switch>
      </Router>
      {/* <FindCenter /> */}
    </div>
  );
}

export default App;
