import React, { Component } from 'react';
import '../App.css';

export class Counter extends Component {
    state = {
        totalCount: 0
    }

    // Add one to total
    addOne = () => {
        this.setState({ totalCount: this.state.totalCount + 1 });
    }

    // Subtract one from total
    subtractOne = () => {
        this.setState({ totalCount: this.state.totalCount - 1 });
    }

    // Reset total to zero
    clearCounter = () => {
        this.setState({ totalCount: this.state.totalCount * 0 });
    }
    
    render() {
        return (
            <div id='counter'>
                <h2>{ this.state.totalCount }</h2>
                <div className='counters'>
                    <button className='updown' onClick={this.subtractOne}>-</button>
                    <button className='updown' onClick={this.addOne}>+</button>
                </div>

                <div className='clearCounter'>
                    <button className='clearbutton' onClick={this.clearCounter}>CLEAR</button>
                </div>
            </div>
        )
    }
}

export default Counter
