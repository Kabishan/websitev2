import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const LandingCards = ({ card }) => {
  return (
    <div className='col-auto mb-3 text-center'>
      <Card style={{ width: '18rem' }} className='h-100'>
        <Card.Img variant='top' src={card.img} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.desc}</Card.Text>
          {card.btn && (
            <Fragment>
              <Button variant='info' href='/experiences'>
                {card.btn}
              </Button>
            </Fragment>
          )}
          {card.projects && (
            <Fragment>
              <p>{card.projects}</p>
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
