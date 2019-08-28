import React, { Component } from 'react';
import { randomChoice } from './helpers';
import './Box.css';

export class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxColor: randomChoice(this.props.colors)
        }
    }
    pickColor = () => {
        let newColor;
        do { 
            newColor = randomChoice(this.props.colors);
        } while (newColor === this.state.boxColor);
        this.setState({ boxColor: newColor});
    }
    handleClick = () => {
        this.pickColor();
    }
    render() {
        return (
            <div 
                className="box" 
                style={{ backgroundColor: this.state.boxColor }}
                onClick={this.handleClick}
            >
                
            </div>
        );
    }
}

export default Box;
