import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
//import HelloWorld from './Components/HelloWorld'
//import CounterExample from './Components/CounterExample'

function App() {
  return (
    <div class="relative min-h-screen pb-10">
      <Router>
        <Header />
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
