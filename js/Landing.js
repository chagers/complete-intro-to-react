import React from 'react'
import { connect } from 'react-redux' // dispatch comes from here
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    var term = event.target.value || ''
    this.props.dispatch(setSearchTerm(term))
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    // adding context enables programmatic routing to the search page
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <h1>chagersVid</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
        </form>
        <Link to='/search' onClick={this.handleSearchTermChange}>or Browse All</Link>
      </div>
    )
  }
})

// this passes in searchTerm as a prop to Landing
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

// connect comes from react-redux
export default connect(mapStateToProps)(Landing)
