import React from 'react';

import { Row, Col, Jumbotron, Button, Image } from 'react-bootstrap';
import logo from '../assets/logo__magic-pay--mobile.png';
import logoDesktop from '../assets/logo__magic-pay.png';
import './Hero.scss';

const Hero = () => (
  <Jumbotron className='text-center text-light hero'>
    <Row className='my-lg-5'>
      <Col lg className='text-lg-right my-lg-5'>
        <Image src={logo} className='d-lg-none' />
        <Image src={logoDesktop} className='d-none d-lg-inline-block' />
      </Col>

      <Col lg className='text-lg-left my-lg-5'>
        <p>Pague suas contas pelo nosso APP</p>
        <Button variant='outline-light'>Abra sua conta</Button>
      </Col>
    </Row>
  </Jumbotron>
);

export default Hero;