import './App.css';
import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Single">
          <SingleMovie />
        </Route>
        <Route path="/">
          <Movies />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
