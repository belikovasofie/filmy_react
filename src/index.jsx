import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Header';
import HistoryWrapper from './components/HistoryWrapper';
import Footer from './components/Footer';
import QuizResults from './pages/QuizResults';
import Homepage from './pages/Homepage';
import QuizPage from './pages/Quiz';

import Trending from './pages/Trending';

import './style.css';

const App = () => {
  return (
    <Router>
      <HistoryWrapper>
        <Header />
        <main>
          <Switch>
            <Route path="/quiz-results/:genre">
              <QuizResults />
            </Route>
            <Route path="/quiz">
              <QuizPage />
            </Route>

            <Route path="/trending">
              <Trending />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </HistoryWrapper>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
