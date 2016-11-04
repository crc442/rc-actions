import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Reactions from '..'

class App extends Component {
  render() {
    return <div>
      <Reactions />
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))