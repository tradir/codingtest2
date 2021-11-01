import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './Pages/Home'
import BearList from './Pages/BearList'
import Cart from './Pages/Cart'
import GlobalStyle from './Globalstyle'
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route patch="/bearlist" exact component={BearList} />
      </Switch>
    </Router>
  )
}

export default Routes
