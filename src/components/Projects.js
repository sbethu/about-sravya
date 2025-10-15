import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

function Projects() {
  return (
    <section>
      <Container>
        <Card className="card">
          <h2>Projects</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>MATLAB Implementation on finite fields</strong> – Considering the framework of Independent Component Analysis (ICA) for the project where the independent
sources and their linear mixtures from Network Coding are all reside in a Galois (finite) field of prime order P.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Analysis on Amazon Review data of a Video Game </strong> Performed text processing on Amazon product reviews using R programming language to make them more
user-readable. Using video games product reviews to analyze whether the product is good enough to buy or not
using Data mining tools like Data prepossessing, classifications, and clustering.
• Extracted data from Amazon using Web Scrapping using Python, and R.
• Analyzed the data using different Cluster Algorithms and Normalization techniques.
• Used the Naive Bayesian Classifier and Neural Network classifier for classification of positive words.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Music Recommendations at Spotify </strong> - Considering Spotify Music Recommendations system, elaborating the mechanisms that are used to predict songs
everyday that users may like to listen. The methods like Collaborative filters, Natural Language Processing (NPL),
Deep learning Convolution Neural Networks CNN makes Spotify unique from other Music Recommendation
systems. Worked as team in preparing the seminar concept more interesting for presentation using Microsoft power-point and
LibreOffice impress.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Opinion Evaluation using Twitter Data  </strong> - Evaluated Presidential information in the Twitter. Processing the data using Apache Hadoop Frameworks and
MongoDB to convert semi-structured data into structured data. Visualized results using Tableau.
• Retrieved the data from the twitter using Python which would be in JSON format (semi-structured).
• Processed the data using Apache Hadoop Framework, MongoDB to store and pre-process the data.
• Used NoSQL database like MongoDB, Cassandra to support the storage of JSON objects
• Spark, and Kafka are the other alternatives used for processing data.
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </section>
  );
}

export default Projects;
