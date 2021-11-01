import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './Pages/Authentication/LogIn/LogIn';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Services from './Pages/Shared/Services/Services';
import Order from './Pages/Order/Order';
import Orders from './Pages/Orders/Orders';
import Booking from "./Pages/Booking/Booking";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Addservice from './Pages/Addservice/Addservice';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/Services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/addservice">
              <Addservice></Addservice>
            </PrivateRoute>
            <ChakraProvider>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/service/:serviceId">
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path="/myOrders">
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute path="/order">
                <Order></Order>
              </PrivateRoute>
              <PrivateRoute path="/orders">
                <Orders></Orders>
              </PrivateRoute>
            </ChakraProvider>
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
