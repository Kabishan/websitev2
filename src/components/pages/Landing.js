import React, { Fragment } from 'react';
import { Card, CardDeck, Button, Jumbotron, Container } from 'react-bootstrap';
import me from '../../assets/me.jpg';
import bg from '../../assets/bg.jpg';

const Landing = () => {
  return (
    <Fragment>
      <div
        className='d-flex justify-content-center p-5 text-center'
        style={{ backgroundImage: `url(${bg})` }}
        fluid
      >
        <Card style={{ width: '25rem', border: '#17a2b8 solid 5px' }}>
          <Card.Img variant='top' src={me} />
          <Card.Body>
            <Card.Title>Kabishan Suvendran</Card.Title>
            <Card.Text>Welcome to my website...</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Jumbotron
        fluid
        className='text-center'
        style={{ backgroundColor: '#17a2b8', color: '#fff' }}
      >
        <Container>
          <h1>Personal Portfolio</h1>
          <p>
            Welcome to my home. Please feel free to peruse my website by using
            the navigation links.
          </p>
        </Container>
      </Jumbotron>

      <CardDeck className='text-center p-3'>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Experiences</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button variant='info' href='/experiences'>
              Experiences
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Projects</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
            <Button variant='info' href='/projects'>
              Projects
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Education</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Button variant='info' href='/education'>
              Education
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <Card className='text-center' bg='light'>
        <Card.Body className='text-muted'>
          <p>Kabishan 2020 &copy;</p>
          <p>Powered with React and Bootstrap</p>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Landing;
