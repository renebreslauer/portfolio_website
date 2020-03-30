import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Skills from '../src/components/Skills'
import Portfolio from '../src/components/Portfolio'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Skills">
          <Skills />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
