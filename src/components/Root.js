import React from 'react';
import About from './About';
import Knowledge from './Knowledge';
import Projects from './Projects';
import Teaching from './Teaching';
import Footer from './Footer';
import Sandwich from './Sandwich';
import NavBar from './NavBar';
import {CSSTransitionGroup} from 'react-transition-group';

export default class Root extends React.Component{
  constructor(){
    super()
    this.state = {
      navBarHidden: false
    }

  }

  sandwichOnClick(){
    this.setState({navBarHidden:!this.state.navBarHidden})
  }

  render(){
    return (
      <div>
        <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
      <h1>Fading at Initial Mount</h1>
    </CSSTransitionGroup>

        <NavBar isHidden={this.state.navBarHidden}/>

        <div className="wrapper">
          <Sandwich sandwichOnClick={this.sandwichOnClick.bind(this)}/>
          <About/>
          <div className="thin-bar"></div>
          <Knowledge />
          <div className="thin-bar"></div>
          <Projects/>
          <div className="thin-bar"></div>
          <Teaching/>
          <div className="thin-bar"></div>
          <Footer/>
        </div>
      </div>
    )
  }


}
