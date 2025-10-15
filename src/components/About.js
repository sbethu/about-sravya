import React from 'react';
import { Container, Card } from 'react-bootstrap';

function About() {
  return (
    <section>
      <Container>
        <Card className="card">
          <h2>About Me</h2>
          <p>
            Results-driven Full Stack Software Developer with 5 years of experience delivering cloud-native applications in
Python, SQL, and Azure. Skilled in building scalable microservices, integrating secure APIs, automating CI/CD, and
developing AI-powered solutions with OpenAI & LangChain, alongside React/Angular interfaces and optimized
databases for high-performance enterprise systems.
          </p>
        </Card>
      </Container>
    </section>
  );
}

export default About;
