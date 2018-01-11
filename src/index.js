import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  handleClickPaus = () => {
    clearInterval(this.timerID + 0)
  }

  handleClickRestart = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  clockClassName = () => {
    if (this.state.date.getMinutes() % 2 === 0) {
      return "clock even"
    } else {
      return "clock odd"
    }
  }

  render() {
    return (

      <div className="container">

        <div className={this.clockClassName()}>
          <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>

        <div className="buttons">
          <button onClick={this.handleClickPaus}>Paus </button>
          <button onClick={this.handleClickRestart}>Restart </button>
        </div>

      </div>
    )
  }

}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
)
