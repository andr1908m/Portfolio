import React, { Component } from 'react';
import { navbar } from '../types/index'

export default class NavBar extends Component {
  constructor(){
    super()
  }


  render() {
    return (
      <div style={{display: this.props.isHidden? 'block': 'none'}}>
        <ul className="leftnav">
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
      </div>

    );

  }
}

NavBar.propTypes = navbar;
