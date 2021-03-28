import './App.css';
import Header from './Header.js';
import Items from './Items.js';
import  { Container } from 'react-bootstrap';
import Signup from "./component/Signup";
import Login from "./component/login";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FindCenter from './FindCenter.js';
import OurStore from './OurStore.js'
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="app">
      <Router>
          
        <Switch>
          <Route path="/home">
            <Header />
            <Items />
          </Route>
          <Route path="/service-center">
            <Header />
            <FindCenter />
          </Route>
          <Route path="/ourstore">
            <Header />
            <OurStore />
          </Route>
          
        </Switch>
          {/* <AuthProvider>
            <Container 
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }} >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Container>
          </AuthProvider> */}
          <AuthProvider>
            <Container 
            className="d-flex align-items-center justify-content-center center-div"
            style={{ minHeight: "100vh" }}>
               
            </Container>
             <Switch>

                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                </div>
                </Switch>
        </AuthProvider>
      </Router>
      {/* <FindCenter /> */}
    </div>
  );
}

export default App;
