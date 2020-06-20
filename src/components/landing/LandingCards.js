import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardDeck, Button } from 'react-bootstrap';

const LandingCards = ({ info }) => {
  return (
    <CardDeck className='text-center p-3'>
      {info.map((card, index) => (
        <Card key={index}>
          <Card.Img variant='top' src={card.img} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.desc}</Card.Text>
            <Button variant='info' href='/experiences'>
              {card.title}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </CardDeck>
  );
};

LandingCards.propTypes = {
  info: PropTypes.array.isRequired,
};

export default LandingCards;
