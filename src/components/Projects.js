import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import newstruth from '../assets/images/newstruth.png';
import rgb from '../assets/images/rgb.png';

export default class Projects extends Component {
  render() {
    return (
      <section id="projects">

      <Container>
        <h2 className="text-center">Projects:</h2>

        <Row>
          <Col>
            <h3 className="text-center tag-line">Some projects that I&apos;ve been part of:</h3>
          </Col>
        </Row>


        <Row className="projects-row">

          <Col xs="12" md="6" lg="6">

            <img src={newstruth} alt="Newstruth" className="img-fluid"/>

          </Col>

          <Col xs="12" md="6" lg="6">
            <div className="details details-ftm clear">

              <h3>Newstruth</h3>
              <p className="platform">Web</p>
              <p className="icons"><i className="fi-monitor"></i><i className="fi-tablet-portrait"></i><i className="fi-mobile"></i></p>
              <p>I attended <a id="yhack" href="https://www.yhack.org/">YHack</a> in November 2017,
                where with my then limited experienced of web development(HTML, a bit of CSS(Bootstrap),
                and limited knowledge of JavaScript(Java)).
                This was quite the interesting project:
                to combat the problem of fake news using <strong>ethereum</strong>
                as an insentive for selected individuals to read and rate an article&aposs fakeness.
                This app would follow the concepts of <strong>blockchain technology</strong> and <strong>decentralization</strong>
                to achieve its goals: a more truthful Internet</p>

              <a className="my-button" target="_blank" rel="noopener noreferrer"
                href="https://kartikay18.github.io/newstruth">Visit Site</a>

            </div>
          </Col>

        </Row>

        <Row className="projects-row">

        <Col xs="12" md="6">
            <div className="details details-ftm clear">
              <h3>The RGB Color Guessing Game</h3>
              <p className="platform">Web</p>
              <p className="icons"><i className="fi-monitor"></i><i className="fi-tablet-portrait"></i><i className="fi-mobile"></i></p>
              <p>Finally put my Javascript to use!</p>
              <a className="my-button" target="_blank"
                rel="noopener noreferrer" href="https://andr1908m.github.io/The-RGB-Color-Guessing-Game/">Play Game</a>
            </div>
          </Col>

          <Col xs="12" md="6">
            <img src={rgb} alt="webdev" className="img-fluid"/>
          </Col>

        </Row>

        <h2 className="text-center">These and more at:</h2>


          <div className="text-center" >

            <a href="https://github.com/andr1908m">
              <i className="fa fa-github-alt fa-2x"></i>
            </a>

          </div>

      </Container>
    </section>
    );
  }
}
