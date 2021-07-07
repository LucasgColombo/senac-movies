import './App.css';
import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
import PersistentDrawerLeft from './PersistentDrawerLeft';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Single">
          <SingleMovie />
        </Route>
        <Route path="/">
          <PersistentDrawerLeft />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
