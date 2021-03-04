import React from 'react'
import './scss/main.scss'
import './scss/extras.scss'
import './scss/projectCard.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './pages/Index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas)

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
