import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      // this (BrowserRouter) will typically be your root component
      <BrowserRouter>
        <div className='app'>
          {/* homepage has to be exactly that pattern, otherwise you'll match literally every other route */}
          <Match exactly pattern='/' component={Landing} />
          <Match
            pattern='/search'
            component={(props) => <Search shows={preload.shows} {...props} />}
          />
          <Match
            pattern='/details/:id'
            component={(props) => {
              const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
              return <Details show={shows[0]} {...props} />
            }}
          />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
