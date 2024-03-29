import React from "react";

export default class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div className="app">
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement} value="Decrement">
                    Decrement
                </button>
                <button onClick={this.increment} value="Increment">
                    Increment
                </button>
            </div>
        );
    }
}
