import React from 'react';
import { Container, Card} from 'react-bootstrap';

function Skills() {
  return (
    <section>
      <Container>
        <Card className="card">
          <h2>Technical Skills</h2>
          Python, Flask, FastAPI, Django, JavaScript, TypeScript, React, Angular, Node.js, SQL, Microsoft SQL Server, PostgreSQL, MySQL, Redis, SQL Alchemy ORM
          Azure (Functions, Service Bus, Key Vault, SQL DB), AWS (S3, SageMaker), Docker, Kubernetes,
Airflow, Azure DevOps CI/CD, GitHub Actions, Jenkins
OpenAI API, LangChain, Pandas, NumPy, SciPy, scikit-learn, PySpark, Hadoop/Spark, MLlib
TDD, Postman, Locust, Pytest, Confluence, Jira, ServiceNow, Tableau
        </Card>
      </Container>
    </section>
  );
}

export default Skills;
