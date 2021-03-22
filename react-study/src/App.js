import React from 'react'
import Test from './components/Test'
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name:'lycqqq',
      count: 0
    }
  }

  render(){
    
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>hello world</h1>
        <Test></Test>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    )
  }

}

export default App;
