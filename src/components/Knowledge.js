import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Knowledge extends Component {
  render() {
    return (
      <section id="knowledge">

      <Container>

        <Row>
          <Col xs ="12" >
              <h2 className="text-center">What I Know:</h2>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="4" className="text-center knowledge-topics">
            <i className="fi-laptop"></i>
            <h3>Front-end Web:</h3>
            <ul className="p-0">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>Bootstrap</li>
              <li>Foundation</li>
              <li>React</li>
            </ul>
          </Col>

          <Col xs="12" md="4" className="text-center knowledge-topics">
            <i className="fi-database"></i>
            <h3>Programming Languages &amp; Backend Web:</h3>
            <ul className="p-0">
              <li>Java, JSP</li>
              <li>PHP, Laravel, Wordpress</li>
              <li>Node.js</li>
              <li></li>
            </ul>
          </Col>

          <Col xs="12" md="4" className="text-center knowledge-topics">
            <i className="fa fa-wrench"></i>
            <h3>Tools &amp; Text Editors:</h3>
            <ul className="p-0">
              <li>Eclipse</li>
              <li>Sublime Text</li>
              <li>Chrome Dev Tools</li>
            </ul>
          </Col>

        </Row>
      </Container>
    </section>
    );
  }
}
