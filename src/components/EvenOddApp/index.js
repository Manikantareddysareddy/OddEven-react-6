import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const RandomNum = Math.random() * 100
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(RandomNum),
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Count <span className="heading1">{count}</span>
          </h1>
          {count % 2 === 0 ? (
            <p className="para1">Count is Even</p>
          ) : (
            <p className="para1">Count is Odd</p>
          )}
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
