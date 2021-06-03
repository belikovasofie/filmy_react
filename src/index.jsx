import React, { useState } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import QuizResults from './pages/QuizResults';
import Homepage from './pages/Homepage';
import QuizPage from './pages/Quiz';
import SearchPage from './pages/SearchPage';
import SearchResult from './pages/SearchResult';

import './style.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/quiz-results/:genre">
            <QuizResults />
          </Route>
          <Route path="/quiz">
            <QuizPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/search-result/:term">
            <SearchResult />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
