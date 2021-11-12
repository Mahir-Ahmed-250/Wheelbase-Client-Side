import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products/Products';
import SignUp from './Pages/Login/SignUp/SignUp';
import Login from './Pages/Login/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import OrderPage from './Pages/OrderPage/OrderPage';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/products'>
              <Products></Products>
            </Route>
            <PrivateRoute exact path='/products/:_id'>
              <OrderPage></OrderPage>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='*'>
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
