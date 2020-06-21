import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const LandingCards = ({ info }) => {
  return (
    <div className='container-fluid mt-4'>
      <div className='row justify-content-center'>
        {info.map((card, index) => (
          <div key={index} className='col-auto mb-3 text-center'>
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
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

LandingCards.propTypes = {
  info: PropTypes.array.isRequired,
};

export default LandingCards;
