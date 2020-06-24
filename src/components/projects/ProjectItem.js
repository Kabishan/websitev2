import React, { Fragment } from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProjectItem = ({ proj: { title, desc, type, features } }) => {
  return (
    <Fragment>
      <Jumbotron className='text-center bg-info text-light' fluid>
        <h2>{title}</h2>
        <p className='lead mb-2'>{desc}</p>
        <p>{type}</p>
      </Jumbotron>

      <Carousel className='text-info'>
        {features.map((feature, index) => (
          <Carousel.Item key={index}>
            <img
              className='d-block w-100'
              src={feature.img}
              alt={feature.name}
            />
            <Carousel.Caption>
              <h3 className='mb-3'>{feature.name}</h3>
              <p className='mb-3'>{feature.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Fragment>
  );
};

ProjectItem.propTypes = {
  proj: PropTypes.object.isRequired,
};

export default ProjectItem;
