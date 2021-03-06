import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Doctor from './pages/Doctor/Doctor';
import HealthCare from './pages/HealthCare/HealthCare';
import Home from './pages/Home/Home/Home';
import ServiceDetail from './pages/Home/ServiceDetail/ServiceDetail';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import OurCommunity from './pages/OurCommunity/OurCommunity';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (

    // all routers
    <div>
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
            <Route path="/our-community">
              <OurCommunity></OurCommunity>
            </Route>
            <PrivateRoute path="/healthcare">
              <HealthCare></HealthCare>
            </PrivateRoute>
            <PrivateRoute path="/serviceDetail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/ourcommunity">
              <OurCommunity></OurCommunity>
            </Route>
            <PrivateRoute path="/doctor/:doctorId">
              <Doctor></Doctor>
            </PrivateRoute>
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
