import React from "react";
import "./styles/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrementCounter() {
    if (this.state.counter > 0)
      this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div data-test="component-app">
        <p data-test="counter-display">
          The counter is currently: {this.state.counter}
        </p>
        <button data-test="increment-button" onClick={this.incrementCounter}>
          +
        </button>
        <button data-test="decrement-button" onClick={this.decrementCounter}>
          -
        </button>
      </div>
    );
  }
}

export default App;
