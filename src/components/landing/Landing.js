import React, { Fragment, useState } from 'react';
import { Card, Jumbotron, Container, Modal } from 'react-bootstrap';

import me from '../../assets/me.jpg';
import bg from '../../assets/bg.jpg';
import exp from '../../assets/exp.jpg';
import proj from '../../assets/proj.png';
import edu from '../../assets/edu.jpg';

import python from '../../assets/python.png';
import java from '../../assets/java.png';
import c from '../../assets/c.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import sql from '../../assets/sql.png';

import LandingCards from './LandingCards';

const Landing = () => {
  const info = [
    {
      img: exp,
      title: 'Experiences',
      desc: 'Check out my previous work experiences here...',
      btn: 'Experiences',
      link: '/experiences',
    },
    {
      img: proj,
      title: 'Projects',
      desc:
        'I am constantly working on something new and exciting, check it out...',
      btn: 'Projects',
      link: '/projects',
    },
    {
      img: edu,
      title: 'Education',
      desc: 'Find my past and current education here...',
      btn: 'Education',
      link: '/education',
    },
  ];

  const lang = [
    {
      img: python,
      title: 'Python',
      desc: 'Skill: Advanced',
      projects: 'Projects: Blackjack, ASCII Art',
    },
    {
      img: c,
      title: 'C',
      desc: 'Skill: Advanced',
      projects: 'Projects: Image Convolution, Fibonacci Fractals',
    },
    {
      img: html,
      title: 'HTML',
      desc: 'Skill: Advanced',
    },
    {
      img: css,
      title: 'CSS',
      desc: 'Skill: Advanced',
    },
    {
      img: java,
      title: 'Java',
      desc: 'Skill: Advanced',
      projects: 'Projects: YouRecommend',
    },
    {
      img: sql,
      title: 'SQL',
      desc: 'Skill: Intermediate',
    },
    {
      img: js,
      title: 'JavaScript',
      desc: 'Skill: Advanced',
    },
  ];

  const [show, setShow] = useState(false);

  const handler = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <div
        className='d-flex justify-content-center p-5 text-center'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Card style={{ width: '25rem', border: '#17a2b8 solid 5px' }}>
          <Card.Img variant='top' src={me} />
          <Card.Body>
            <h3>Kabishan Suvendran</h3>
            <div className='emotes pb-2'>
              <i className='fa fa-snowflake-o' aria-hidden='true'></i>
              <i className='fa fa-rocket' aria-hidden='true'></i>
              <i className='fa fa-music' aria-hidden='true'></i>
            </div>
            <p>Third Year Software Engineering and Management Student</p>
            <div>
              <ul className='social-network social-circle'>
                <li>
                  <a
                    href='https://github.com/Kabishan'
                    className='github'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fa fa-github'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/kabishan'
                    className='linkedin'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fa fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a href='#/' className='email' onClick={handler}>
                    <i className='fa fa-envelope'></i>
                  </a>
                  <Modal show={show} onHide={handler}>
                    <Modal.Header closeButton>
                      <Modal.Title>Email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>suvendrk@mcmaster.ca</Modal.Body>
                  </Modal>
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>

      <Jumbotron fluid className='text-center bg-info text-light'>
        <Container>
          <h1>Personal Portfolio</h1>
          <p>
            Welcome to my home. Please feel free to peruse my website by using
            the navigation links.
          </p>
        </Container>
      </Jumbotron>

      <LandingCards info={info} />

      <Jumbotron fluid className='text-center bg-info text-light'>
        <Container>
          <h1>Programming Languages</h1>
        </Container>
      </Jumbotron>

      <LandingCards info={lang} />

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
