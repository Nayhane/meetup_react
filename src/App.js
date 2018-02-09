import React, { PureComponent } from 'react'
import './App.css'
import Title from './components/Title'

class App extends PureComponent {
  updateRecipe(id, update) {

  }

  render() {
    return (
      <div className="App">
        <Title content="Top 10 " />
      </div>
    )
  }
}

export default App
