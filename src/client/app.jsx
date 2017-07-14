import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './component/pages/home'
import Races from './component/pages/races'
import Drivers from './component/pages/drivers'
import Tracks from './component/pages/tracks'
import Status from './component/pages/status'
import Weather from './component/pages/weather'

const App = () => (
  <main>
    <nav>Menu</nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/races" component={Races} />
      <Route path="/drivers" component={Drivers} />
      <Route path="/tracks" component={Tracks} />
      <Route path="/status" component={Status} />
      <Route path="/weather" component={Weather} />
    </Switch>
  </main>
)

export default App
