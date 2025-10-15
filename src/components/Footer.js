import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container className="text-center">
        <small>© {new Date().getFullYear()} Sravya Bethu. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;
