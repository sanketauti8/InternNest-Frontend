import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InfoPage.css';

const InfoPage = () => {
  return (
    <div>
      <Container className="my-5">
        <h1 className="text-center mb-5">Welcome to InternNest!</h1>
        <Row className="mb-5">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/studenthouse.jpg" className="infocard-img-top" />
              <Card.Body className="infocard-body">
                <Card.Title>Intern Housing</Card.Title>
                <Card.Text>
                The Key to Your Internship Housing!
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/industry.jpeg" className="infocard-img-top" />
              <Card.Body className="infocard-body">
                <Card.Title>Industry Connections</Card.Title>
                <Card.Text>
                Network, Connect, Succeed!
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/chatting.jfif" className="infocard-img-top" />
              <Card.Body className="infocard-body">
                <Card.Title>Real-Time Messaging</Card.Title>
                <Card.Text>
                Real-Time Messaging, Real-Life Connections!
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
            At InternNest, we understand the challenges and excitement that come with securing housing during internships. Whether you're a student looking for a place to stay or someone offering an available space, our mission is to create a seamless, user-friendly platform where you can connect, communicate, and find the perfect match for your housing needs.
            </p>
          </Col>
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
            Our mission is to simplify the process of finding and offering intern housing. We aim to build a community where students can support each other by providing safe, affordable, and convenient living arrangements. By fostering connections and facilitating communication, we help interns focus on what truly matters: their career growth and learning experiences.
            </p>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <Row>
            <Col md={6}>
              <p>&copy; 2024 InternNest. All Rights Reserved.</p>
              <p>&copy; Developed by Sanket Auti and Omkar Dedge</p>
            </Col>
            <Col md={6}>
              <p>Follow us on:</p>
              <p>
                <a href="https://facebook.com" className="text-white me-2">Facebook</a>
                <a href="https://twitter.com" className="text-white me-2">Twitter</a>
                <a href="https://instagram.com" className="text-white">Instagram</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default InfoPage;
