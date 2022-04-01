import React, { Component } from 'react';

export const doInc = state => ({ counter: state.counter + 1 });
export const doDec = state => ({ counter: state.counter - 1 });

class Counter extends Component {

    state = {
        counter: 0
    }

    onClickInc = () => {
        this.setState(doInc)
    }

    onClickDec = () => {
        this.setState(doDec)
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>

                <button onClick={this.onClickInc} type="button">Increment</button>
                <button onClick={this.onClickDec} type="button">Decrement</button>
            </div>
        );
    }
}

export default Counter;