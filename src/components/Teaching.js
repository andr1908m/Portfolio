import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import summer from '../assets/images/doe.jpg';
import mouse from '../assets/images/mousesquad.png';

export default class Teaching extends Component {
  render() {
    return (

    <section id="teaching">
      <h2 className="text-center">Work Experience:</h2>

      <Container>
        <Row>
          <Col xs="12">
            <p className="text-center tag-line">
              I went to High School at
                <a href="http://schools.nyc.gov/SchoolPortals/11/X275/default.htm" className="pl-1">
                    High School of Computers And Technology.
                </a>
            </p>
            <p className="text-center tag-line">I worked two different jobs during high school:</p>
          </Col>
        </Row>

        <Row>
            <Col xs="12" md="4" className="text-center education-bullets">
              <img src={summer} className="img-fluid"/>

              <h3>Summer Enrichment Program Tutor:</h3>

              <ol>
                <li>Helped students attain knowledge in the fields of computer science and engineering through education on robotics.</li>

                <li>Discussed with other tutors for the best ways of creating a curriculum that is most interesting and enriching for the students.</li>
              </ol>
            </Col>

            <Col xs="12" md="4" className="offset-md-4 text-center education-bullets">
              <img src={mouse} className="img-fluid"/>

              <h3>MOUSE Squad:</h3>
              <ul>
                <li>Provided successfully clear and periodic audits by Inventory Listing of miscellaneous educational items.</li>

                <li>Maintained ordinance of Laptops for educational purposes of students by fixing technical problems </li>

                <li>Resolved technical or office-related tasks for teachers and staff members in a quick &amp; timely manner.</li>
              </ul>
            </Col>

        </Row>
      </Container>
    </section>
    );
  }
}
