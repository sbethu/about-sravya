import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

function Achievements() {
  return (
    <section>
      <Container>
        <Card className="card">
          <h2>Achievements</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Compromising Random Linear Network Coding as a Cipher </strong> – IEEE Published Paper: Authored a peer-reviewed paper Compromising Random Linear Network Coding as a Cipher
accepted at IEEE VTC2023-Spring.
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </section>
  );
}

export default Achievements;
