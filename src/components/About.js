import React from 'react';
import Typed from 'typed.js';
import { Container, Row, Col } from 'reactstrap';
import '../assets/fonts/foundation-icons/foundation-icons.css';
// import Foundation from 'react-foundation';

export default class About extends React.Component{
  constructor(){
    super()

  }
  componentDidMount(){

    const options = {
        strings: [
          "am a Web Developer.", "am a College Student.", /*"also teach programming to people.",*/ "am a problem solver."
        ],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 15,
        contentType: 'text',
        callback: function() {
          // $("#writing-text").css({"color": "#fff", "background-color": "rgb(79, 219, 98)"});
        },
        backDelay:1000,
        fadeOut:true,
        loop: true,
        preStringTyped: function() {},
        onStringTyped: function() {}
    }

     this.typed = new Typed(this.el, options)

  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render(){
    return (
      <section id="about">

        <Container>
          <Row>
            <Col xs="12" lg="8" className="offset-lg-2 text-center">

              <img className="img-circle"
               src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/22814294_162518504343965_5508364658354928103_n.jpg?oh=27a5cbaf73e51256ee0627897dac2e2a&oe=5AB37D14"
              alt="headshot"/>

              <div className="details">
                <h2>
                  Hey, I&apos;m Andres. I...<br/>
                  <span id="writing-text" ref={(el) => { this.el = el; }}></span>
                </h2>
              </div>
            </Col>

            <Col xs="12">
              <div className="cta text-center">
                <a className="my-button cta-button" href="mailto:andr1910es@gmail.com">Get In Touch</a>
                <div className="thin-bar"></div>
              </div>
            </Col>

            <Col xs="12">
              <div className="my-arrow-div text-center">
                <a href="https://github.com/andr1908m"><i className="fa fa-github-alt fa-2x"></i></a>
              </div>
            </Col>

        </Row>
      </Container>

    </section>
    )
  }

}
