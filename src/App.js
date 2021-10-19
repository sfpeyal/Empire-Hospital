import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbaar from './components/Navbaar/Navbaar';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import About from './components/About/About';
import Helpline from './components/Helpline/Helpline';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbaar></Navbaar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/helpline">
              <Helpline></Helpline>
            </Route>
            <PrivateRoute path="/servicedetails/:servicedetailsId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
