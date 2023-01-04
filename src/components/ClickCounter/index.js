// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    }),
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <span className="click">{count}</span> times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <div className="inner-container">
          <button className="meet" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
