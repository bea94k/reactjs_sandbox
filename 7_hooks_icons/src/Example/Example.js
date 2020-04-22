/* import React, { Component } from 'react';
import './Example.css';

class Example extends Component {
    state = { counter: 0 };

    addVote = () => this.setState({ counter: this.state.counter + 1 });
    removeVote = () => this.setState({ counter: this.state.counter - 1 });
    resetVote = () => this.setState({ counter: 0 });

    render() {
        return (
            <div>
                <h1>Those are the votes: {this.state.counter}</h1>
                <button onClick={this.addVote}>Add a vote</button>
                <button onClick={this.removeVote}>Remove a vote</button>
                <button onClick={this.resetVote}>Reset votes</button>
            </div>
        );
    }
}

export default Example;
 */

import React, { useState } from 'react';
import './Example.css';

/* making button a reusable component, should be actually in a separate file */
/* const Button = props => {
    return (
        // without the div, but with an empty fraction <> the buttons are inline
        <>
            <button onClick={props.click}>{props.text}</button>
        </>
    );
}; */
// we can skip the word props and give 
const Button = ({ click, text, children }) => {
    return (
        <>
            {/* use children to put something inside the component being rendered (see line 60) */}
            <button onClick={click}>{children} {text}</button>
        </>
    );
}

const Example = () => {
    const [votes, setVotes] = useState(0);

    const addVote = () => setVotes(votes + 1);
    const removeVote = () => setVotes(votes - 1);
    const resetVote = () => setVotes(0);

    return (
        <div className="grid-wrap">
            <h1>Those are the votes: {votes}</h1>
            <div className="grid-btns">
                <Button click={addVote} text="Add a vote" >
                    hello from inside the button
                </ Button>
                <Button click={removeVote} text="Remove a vote" />
                <Button click={resetVote} text="Reset votes" />
            </div>
        </div>
    );
}

export default Example;
