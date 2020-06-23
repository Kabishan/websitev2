import React, { Fragment } from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';

import etch from '../../assets/etch.jpg';
import ai from '../../assets/ai.png';
import laser from '../../assets/laser.jpg';

const ExperienceItem = () => {
  return (
    <Fragment>
      <Jumbotron className='text-center bg-info text-light' fluid>
        <h2>Venture Engineering and Science</h2>
        <p className='lead'>Computers and Technology 7/8 Instructor</p>
        <p>May - August 2019</p>
      </Jumbotron>

      <Carousel className='text-info'>
        <Carousel.Item>
          <img className='d-block w-100' src={etch} alt='First slide' />
          <Carousel.Caption>
            <h3>Arduino Etch A Sketch</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={ai} alt='Third slide' />
          <Carousel.Caption>
            <h3>Machine Learning</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={laser} alt='Third slide' />
          <Carousel.Caption>
            <h3>Laser Tag</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default ExperienceItem;
