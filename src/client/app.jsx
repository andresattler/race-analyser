import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './component/pages/home'

const App = () => (
  <main>
    <nav>Menu</nav>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </main>
)

export default App
