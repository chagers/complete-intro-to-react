import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      // this (hashrouter) will typically be your root component
      <HashRouter>
        <div className='app'>
          {/* homepage has to be exactly that pattern, otherwise you'll match literally every other route */}
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
