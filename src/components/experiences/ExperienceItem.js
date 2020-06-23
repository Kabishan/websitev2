import React, { Fragment } from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ExperienceItem = ({ exp: { job, company, time, activities } }) => {
  return (
    <Fragment>
      <Jumbotron className='text-center bg-info text-light' fluid>
        <h2>{job}</h2>
        <p className='lead mb-2'>{company}</p>
        <p>{time}</p>
      </Jumbotron>

      <Carousel className='text-info'>
        {activities.map((activity, index) => (
          <Carousel.Item key={index}>
            <img
              className='d-block w-100'
              src={activity.img}
              alt={activity.job}
            />
            <Carousel.Caption>
              <h3 className='mb-3'>{activity.name}</h3>
              <p className='mb-3'>{activity.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Fragment>
  );
};

ExperienceItem.propTypes = {
  exp: PropTypes.object.isRequired,
};

export default ExperienceItem;
