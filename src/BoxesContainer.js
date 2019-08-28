import React, { Component } from 'react';
import Box from './Box';
import './BoxesContainer.css';

export class BoxesContainer extends Component {
    static defaultProps = {
        numOfBoxes: 18,
        allColors: [
            'tomato', 'purple', 'magenta', 'green', 'teal', 'yellow', 'blue'
        ]
    }
    render() {
        const boxes = Array.from({ length: this.props.numOfBoxes }).map(() =>
            <Box colors={this.props.allColors} />
        )
        return (
            <div className="boxesContainer">
                {boxes}
            </div>
        );
    }
}

export default BoxesContainer;
