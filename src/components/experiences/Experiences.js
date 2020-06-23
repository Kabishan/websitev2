import React, { Fragment } from 'react';

import ExperienceItem from './ExperienceItem';

import etch from '../../assets/etch.jpg';
import ai from '../../assets/ai.png';
import laser from '../../assets/laser.jpg';
import bus from '../../assets/bus.jpg';
import school from '../../assets/school.jpg';

const Experiences = () => {
  const exps = [
    {
      job: 'Computers and Technology 7/8 Instructor',
      company: 'Venture Engineering and Science',
      time: 'May - August 2019',
      activities: [
        {
          name: 'Arduino Etch A Sketch',
          desc:
            'Programmed an Arduino connected to a breadboard using Arduino IDE to control the Etch A Sketch. The display for the Etch A Sketch is made available on the computer screen using Processing IDE.',
          img: etch,
        },
        {
          name: 'Machine Learning',
          desc:
            'Using IBM Watson Machine Learning to differentiate between two or more categories. Trained model using more than fifty pictures and made API calls using Scratch, App Inventor, and Python.',
          img: ai,
        },
        {
          name: 'Laser Tag',
          desc:
            'Used custom PCB with LEDs, Piezo Buzzer, Photoresistors and other components to control the game of Laser Tag. Used Arduino IDE to program the microchip for the game.',
          img: laser,
        },
      ],
    },
    {
      job: 'Bus Monitor & Camp Counsellor',
      company: 'Focus on Youth Toronto',
      time: 'July - August 2018',
      activities: [
        {
          name: 'Bus Monitor',
          desc:
            'Safely escorted children from their local school bus stop to Alexander Stirling PS for their day of STEM education. Used conflict management to resolve disputes amongst campers.',
          img: bus,
        },
        {
          name: 'Camp Counsellor',
          desc:
            'Engaged with campers using fun indoor and outdoor activities. Exercised safety rules and regulations to make the camp experience enjoyable and welcoming. Used buddy system to find misguided campers on camp excursions.',
          img: school,
        },
      ],
    },
  ];

  return (
    <Fragment>
      <div className='text-center p-3 bg-light'>
        <h1 className='pt-2'>Experiences</h1>
        <p className='lead pt-2'>
          <strong>Feel free to check out my past work experiences</strong>
        </p>
      </div>

      {exps.map((exp, index) => (
        <ExperienceItem key={index} exp={exp} />
      ))}
    </Fragment>
  );
};

export default Experiences;
