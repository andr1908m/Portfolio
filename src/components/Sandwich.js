import React, { Component } from 'react';
import { sandwich } from '../types/index'

export default class Sandwich extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <button className="sandwich-button" onClick={this.props.sandwichOnClick}>
          <i className="material-icons sandwich-icon">menu</i>
        </button>
      </div>
    );
  }
}

Sandwich.propTypes = sandwich;
