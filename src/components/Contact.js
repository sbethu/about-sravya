import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Contact() {
  return (
    <section>
      <Container>
        <Card className="card">
          <h2>Contact</h2>
          <p><a href="sravyab31@gmail.com">Email</a> | <a href="https://github.com/sbethu" target="_blank" rel="noreferrer">Github</a> | <a href="https://linkedin.com/in/sravy5" target="_blank" rel="noreferrer">LinkedIn</a></p>
        </Card>
      </Container>
    </section>
  );
}

export default Contact;
