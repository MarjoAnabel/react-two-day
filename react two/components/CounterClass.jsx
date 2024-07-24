import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
          counter: this.props.initialValue,
        }
      }
      incrementplus = () => {
        this.setState({ counter: this.state.counter + 2 })
      }
      decremento = () => {
        this.setState({ counter: this.state.counter - 1 })
      }
      increment = () => {
        this.setState({ counter: this.state.counter + 3 })
      }

      render() {
        return (
            <div>
            <h1>ContadorClass: {this.state.counter}</h1>
        <button onClick={this.incrementplus}>Incremento plus</button>
        <button onClick={this.decremento}>Decremento</button>
        <button onClick={this.increment}>Incremento 3</button>

            </div>

        )
      }
     }
     
