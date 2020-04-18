/* import React from 'react';

const MapMethod = () => {
    const randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    const listItems = randomArray.map((number) =>
        <li>{number}</li>
    );



    return (
        <div>
            <ul>{listItems}<ul>
        </div>
    );
}

export default MapMethod;
 */

import React, { Component } from 'react';

const randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

class MapMethod extends Component {
    state = {
        numbers: randomArray
    }

    // the argument is whatever is passed in binding - name doesn't need to be the same
    removeHandler = listIndex => {
        // taking the old array as it is, manipulating and overwriting (mutating) the old array, so NOT A GOOD WAY
        //const theOldArray = this.state.numbers;

        // .slice() without any arg make a COPY of the array
        // const copiedArray = this.state.numbers.slice();

        // spread operator (the three dots) makes a copy of an array inside of a new array - remember to put it in []
        const copiedArray = [...this.state.numbers];
        // remove one item at index=listIndex
        copiedArray.splice(listIndex, 1);
        this.setState({
            numbers: copiedArray
        })

        console.log('clicked index number ' + listIndex);
    }

    render() {
        const listItems = this.state.numbers.map((number, index) => <li key={index} onClick={this.removeHandler.bind(this, index)}>{number}</li>)
        // up here in .map(), the second arg is always index (or nothing) of the current element of the array, probably doesn't matter what we call it

        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default MapMethod;
