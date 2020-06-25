import React, { Fragment } from 'react';

import EducationItem from './EducationItem';

import highIb from '../../assets/education/highib.jpg';
import mac from '../../assets/education/mac.jpg';

const Education = () => {
  const edus = [
    {
      school: 'McMaster University',
      time: '2018 - Present',
      activities: [
        {
          name: 'Software Engineering and Management',
          desc:
            'As a part of my BEng in Software Engineering, I decided to pursue the prestigious and unique Management program to equip myself with skills needed for the corporate world.',
          img: mac,
        },
      ],
    },
    {
      school: 'Sir Wilfrid Laurier Collegiate Institute',
      time: '2014 - 2018',
      activities: [
        {
          name: 'International Baccalaureate Diploma Programme',
          desc:
            'I completed the IB programme, which is a standardized and rigorous education that goes beyond regular high school education. I completed English, Chemistry and Economics at Higher Level, and French, Physics and Math at Standard Level.',
          img: highIb,
          color: '#000080',
        },
      ],
    },
  ];
  return (
    <Fragment>
      <div className='text-center p-4 bg-light'>
        <h1 className='pt-2'>Education</h1>
        <p className='lead pt-1'>
          <strong>
            My knowledge and technical expertise are the product of my
            schooling, which you may see below.
          </strong>
        </p>
      </div>

      {edus.map((edu, index) => (
        <EducationItem key={index} edu={edu} />
      ))}
    </Fragment>
  );
};

export default Education;
