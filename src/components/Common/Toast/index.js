import React from 'react'
import ReactDOM from 'react-dom'
import './style.styl'

export default class Toast extends React.Component {
  constructor (props) {
    super (props)
  }
  render () {
  	return (
  		<div className="toast">
        {this.props.tips}
      </div>
		)
  }
}

const div = document.createElement('div')
Toast.show = (props, callback) => {
  document.body.appendChild(div)
  ReactDOM.render(<Toast {...props} />, div)
  
  setTimeout (() => {
    ReactDOM.unmountComponentAtNode(div)
    document.body.removeChild(div)
    callback()
  }, 3000)
}