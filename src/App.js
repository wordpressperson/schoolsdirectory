import React from 'react';
import './App.css'
import SingleRoom from './pages/SingleRoom'
import Rooms from './pages/Rooms'
import Home from './pages/Home'
import {Route, Switch} from 'react-router-dom'
import Error from './pages/Error'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/schools' component={Rooms} />
        <Route path='/schools/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
