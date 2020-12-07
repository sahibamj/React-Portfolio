/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from '../../components/navbar';
import Home from '../home';
import Project from '../project';
import Footer from '../../components/footer';

import INFO_DATA from '../../data/info';

import './styles.css';

function App() {
  return (
    <Router>
      <div className="container-fluid px-0 main-container">
        <Navbar projects={INFO_DATA.projects} />

        <div className="router-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/project/:id">
              <Project />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
