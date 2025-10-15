import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import profilePic from '../assets/profile.jpeg'; // Add your profile pic here

function Header() {
  return (
    <div style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', padding: '80px 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image
              src={profilePic}
              roundedCircle
              fluid
              style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.3)', maxWidth: '200px' }}
              alt="Sravya Bethu"
            />
          </Col>
          <Col md={8}>
            <h1 style={{ fontWeight: 700, fontSize: '3rem', marginBottom: '0.5rem' }}>
              Sravya Bethu
            </h1>
            <h4 style={{ fontWeight: 400, marginBottom: '1.5rem' }}>
              Python Developer | 5+ Years Experience
            </h4>
            <p style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
              Building scalable backend systems and automating workflows.
            </p>
            <Button
              variant="light"
              href="/Sravya_Bethu_Resume.pdf"
              target="_blank"
              className="mt-4"
            >
              Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
