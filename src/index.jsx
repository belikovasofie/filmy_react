import React, { useState } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Header';
import QuizResults from './pages/QuizResults';
import Homepage from './pages/Homepage';
import QuizPage from './pages/Quiz';

import './style.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/quiz-results/:genre">
            <QuizResults />
          </Route>
          <Route path="/quiz">
            <QuizPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
