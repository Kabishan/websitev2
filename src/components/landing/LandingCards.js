import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const LandingCards = ({ card: { img, title, desc, btn, link, projects } }) => {
  return (
    <div className='col-auto mb-3 text-center'>
      <Card style={{ width: '18rem' }} className='h-100'>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          {btn && (
            <Fragment>
              <Link className='btn bg-info' style={{ color: '#fff' }} to={link}>
                {btn}
              </Link>
            </Fragment>
          )}
          {projects && (
            <Fragment>
              <p>{projects}</p>
            </Fragment>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

LandingCards.propTypes = {
  card: PropTypes.array.isRequired,
};

export default LandingCards;
