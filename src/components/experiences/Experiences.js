import React, { Fragment } from 'react';

import ExperienceItem from './ExperienceItem';

import etch from '../../assets/experiences/etch.jpg';
import ai from '../../assets/experiences/ai.png';
import laser from '../../assets/experiences/laser.jpg';
import bus from '../../assets/experiences/bus.jpg';
import school from '../../assets/experiences/school.jpg';

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
            'Programmed an Arduino connected to a breadboard using Arduino IDE to control the Etch A Sketch. Programmed the display of the Etch A Sketch using Processing IDE to display on the computer screen.',
          img: etch,
        },
        {
          name: 'Machine Learning',
          desc:
            'Used IBM Watson Machine Learning to differentiate between two or more categories. Trained model using more than fifty pictures and made API calls using Scratch, App Inventor, and Python.',
          img: ai,
        },
        {
          name: 'Laser Tag',
          desc:
            'Used custom PCB with LEDs, piezo buzzer, photoresistors and other components to control Laser Tag. Used Arduino IDE to program the microchip for the game.',
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
            'Safely escorted children from their local school bus stop to Alexander Stirling PS for their STEM education. Used conflict management to resolve disputes amongst campers.',
          img: bus,
        },
        {
          name: 'Camp Counsellor',
          desc:
            'Engaged with campers using indoor/outdoor activities. Exercised safety regulations to make the camp experience welcoming and enjoyable. Used buddy system to guide campers on excursions.',
          img: school,
        },
      ],
    },
  ];

  return (
    <Fragment>
      <div className='text-center p-4 bg-light'>
        <h1 className='pt-2'>Experiences</h1>
        <p className='lead pt-1'>
          <strong>
            These are the experiences that have built my character and
            principles
          </strong>
        </p>
      </div>

      {exps.map((exp, index) => (
        <ExperienceItem key={index} exp={exp} />
      ))}
    </Fragment>
  );
};

export default Experiences;
