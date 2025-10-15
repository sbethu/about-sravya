import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

function Education() {
  return (
    <section>
      <Container>
        <Card className="card">
          <h2>Education</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Master of Science(Ms) : Computer and Information Science </strong> – Cleveland State University, Ohio Jan’19 – May’21
GPA: 3.6/4
Courses: Courses: Data Mining, Date Warehousing, Database Processing, Analysis of Algorithms, Advanced
Operating Systems, Advanced Computer Architecture, Android Sensor Programming.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Bachelor of Technology : Information Technology </strong>Jun’14 – May’18
JNTUH, Hyderabad, India GPA : 7.0/10
Courses: Introduction to Algorithms and Data Structures, Operating Systems, Software Engineering, Cloud
Computing, Object Oriented Programming, Data Base Management Systems and DataWarehousing, Compiler
Design, Computer Networking.
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </section>
  );
}

export default Education;
