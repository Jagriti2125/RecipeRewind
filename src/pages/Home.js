import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Home.css';


function Home() {
  return (
    <div className="home">
      {/* Bootstrap Carousel */}
      <Carousel id="carouselExample" className="carousel slide">
        <Carousel.Item className="carousel-item active">
          <img
            className="d-block w-100"
            src="recipe.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Rediscover Lost Recipes</h3>
            <p>Explore the rich culinary heritage of India.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="masala food.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Traditional Flavors</h3>
            <p>From spicy South Indian dishes to aromatic North Indian delights.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="family.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Join Our Community</h3>
            <p>Share your cherished recipes and keep the legacy alive.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Featured Recipes Section */}
      <Container className="featured-recipes">
        <h2 className="text-center my-5">Featured Recipes</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="hb.webp" />
              <Card.Body>
                <Card.Title>Hyderabadi Biryani</Card.Title>
                <Card.Text>
                  A fragrant rice and meat delicacy from the royal kitchens of Hyderabad.
                </Card.Text>
                <Button variant="primary">View Recipe</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="md.jpeg" />
              <Card.Body>
                <Card.Title>Masala Dosa</Card.Title>
                <Card.Text>
                  A crispy South Indian crepe filled with spiced potatoes.
                </Card.Text>
                <Button variant="primary">View Recipe</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="rc1.jpeg" />
              <Card.Body>
                <Card.Title>Rajma Chawal</Card.Title>
                <Card.Text>
                  A comforting North Indian dish of red kidney beans and rice.
                </Card.Text>
                <Button variant="primary">View Recipe</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="cta-section text-center py-5">
        <h2>Join Our Culinary Journey</h2>
        <p>Explore, share, and savor the flavors of India.</p>
        <Button variant="success" className="me-3">Explore Recipes</Button>
        <Button variant="outline-success">Submit Your Recipe</Button>
      </div>
    </div>
  );
}

export default Home;