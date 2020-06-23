import React, { Fragment } from 'react';

import ExperienceItem from './ExperienceItem';

const Experiences = () => {
  return (
    <Fragment>
      <div className='text-center p-4 mb-3 bg-light'>
        <h1>Experiences</h1>
        <p className='lead'>Feel free to check out my past work experiences</p>
      </div>

      <ExperienceItem />
    </Fragment>
  );
};

export default Experiences;
