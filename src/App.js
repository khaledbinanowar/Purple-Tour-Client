import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './Pages/Authentication/LogIn/LogIn';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Services from './Pages/Shared/Services/Services';
import Single from './Pages/Shared/Single/Single';
import Addservice from './Pages/Addservice/Addservice';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/addservice">
              <Addservice></Addservice>
            </PrivateRoute>
            <PrivateRoute path="/Single/:serviceKey">
              <Single></Single>
            </PrivateRoute>
            <Route path="/Services">
              <Services></Services>
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
