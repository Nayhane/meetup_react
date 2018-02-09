import React, { PureComponent } from 'react'
import './App.css'
import Title from './components/Title'
import TopicsList from './topics/TopicsList'



const topics = [
  { topic: 'Software Development (3)',
    count: 1
  },
  { topic: 'Web Development (3)',
    count: 2
  },
  { topic: 'Computer programmimg (2)',
    count: 3
  },
  { topic: 'Python (2)',
    count: 4
  },
  { topic: 'Agile Project Management (2)',
    count: 5
  },
  { topic: 'Live Coding (2)',
    count: 6
  },
  { topic: 'Data Analytics (2)',
    count: 7
  },
  { topic: 'Neural networks (2)',
    count: 8
  },
  { topic: 'Artificial Intelligence (2)',
    count: 9
  },
  { topic: 'Data Mining(2)',
    count: 10
  }
]




class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <Title content="Top 10 " />
        <TopicsList topics={topics}  />
      </div>
    )
  }
}




export default App
