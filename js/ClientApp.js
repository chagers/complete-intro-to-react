import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
			div(null,
				MyTitleFactory({title: 'props are okay', color: 'teal'}),
				MyTitleFactory({title: 'semicolons - why use em', color: 'aquamarine'}),
				MyTitleFactory({title: 'this is another thing', color: 'tomato'}),
				MyTitleFactory({title: 'got 99 rendering problems', color: 'rebeccapurple'})
			)
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
