import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <section id="footer-cta">
        <h2 className="text-center">Wanna work with me?</h2>

        <Row className="text-center">
          <Col xs="12" className="pt-4">
            <p className="text-center">I&apos;m currently available for work.</p>
          </Col>
          <Col xs="12" id="startButtonDiv">
            <a className="my-button form-button" href="mailto:andr1910es@gmail.com">Start Now</a>
          </Col>
        </Row>

        <footer id="footer">
          <Row className="text-center">
            <Col xs="12" className="">
              <p id="copyright">Copyright &copy; 2017 | Andres Rodriguez</p>
            </Col>
          </Row>
        </footer>

    </section>
    );
  }
}
