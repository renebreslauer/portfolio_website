import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from '../src/components/index.js'
import { Home, About, Contact, Skills, Portfolio } from './pages/index.js'

function App() {
  return (
    <>
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
    <Footer />
    </>
  )
}

export default App
