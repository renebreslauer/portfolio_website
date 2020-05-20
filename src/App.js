import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import { Navbar, Footer } from '../src/components/index.js'
import {
  Home,
  About,
  Contact,
  Skills,
  Portfolio,
  MenuContainer,
} from './pages/index.js'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/MenuContainer">
            <MenuContainer />
          </Route>
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
        <Footer />
      </Router>
    </>
  )
}

export default App
