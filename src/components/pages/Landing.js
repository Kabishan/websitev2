import React, { Fragment } from 'react';
import { Card, CardDeck, Button, Jumbotron, Container } from 'react-bootstrap';

import me from '../../assets/me.jpg';
import bg from '../../assets/bg.jpg';
import exp from '../../assets/exp.jpg';
import proj from '../../assets/proj.png';
import edu from '../../assets/edu.jpg';

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
            <h3 className='pb-2'>Kabishan Suvendran</h3>
            <div>
              <ul class='social-network social-circle'>
                <li>
                  <a
                    href='https://github.com/Kabishan'
                    class='github'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i class='fa fa-github'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/kabishan'
                    class='linkedin'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i class='fa fa-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
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
          <Card.Img variant='top' src={exp} />
          <Card.Body>
            <Card.Title>Experiences</Card.Title>
            <Card.Text>
              Check out my previous work experiences here...
            </Card.Text>
            <Button variant='info' href='/experiences'>
              Experiences
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={proj} />
          <Card.Body>
            <Card.Title>Projects</Card.Title>
            <Card.Text>
              I am constantly coming up with something exciting, check it out...
            </Card.Text>
            <Button variant='info' href='/projects'>
              Projects
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={edu} />
          <Card.Body>
            <Card.Title>Education</Card.Title>
            <Card.Text>Find my past and current education here...</Card.Text>
            <Button variant='info' href='/education'>
              Education
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <Card className='text-center' bg='light'>
        <Card.Body className='text-muted'>
          <p>&copy; 2020 Kabishan</p>
          <p>Powered with React and Bootstrap</p>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default React.memo(Landing);
