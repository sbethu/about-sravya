import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

function Experience() {
  return (
    <section>
      <Container>
        <Card className="card">
          <h2>Experience</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Software Developer
LinkedIn Corporation (Contract), Remote  </strong> 
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Software Developer & Research Assistant
Cleveland State University, OH  </strong>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </section>
  );
}

export default Experience;
