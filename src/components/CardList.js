import React from 'react';

import {Container, Row, Col, Card, Button } from 'react-bootstrap';

const CardList = ({ posts }) => (
  <Container>
    <Row>
      {posts && posts.map(({ id, image, title, excpert, action }) => (
        <Col xs={12} lg={4} key={id}>
          <Card className="mx-auto my-3">
            <Card.Img variant="top" src={image} />

            <Card.Body>
              <Card.Title>{title}</Card.Title>

              <Card.Text>
                {excpert}
              </Card.Text>

              <Button variant="danger">{action}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>

 
);

export default CardList;