'use strict'

import React from 'react'

import Button from './button'
import Square from './square'

class App extends React.Component {
  constructor () {
    super()
    this.state = { color: 'green' }
  }

  render () {
    return (
      <div>
        <Square color={this.state.color} />

        {['green', 'red', 'blue'].map((color, index) => (
          <Button
            key={index}
            handleClick={() => this.setState({ color })}>
            { color }
          </Button>
        ))}

      </div>
    )
  }
}

export default App
