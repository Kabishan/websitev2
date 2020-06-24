import React, { Fragment } from 'react';

import ProjectItem from './ProjectItem';

import eventHome from '../../assets/projects/eventhome.png';
import eventGeo from '../../assets/projects/eventgeo.png';
import eventTech from '../../assets/projects/eventtech.png';

const Projects = () => {
  const projs = [
    {
      title: 'Event.io',
      desc: 'Save time when organizing or attending events',
      type: 'Hack-a-thon',
      features: [
        {
          name: 'Create Events and Sign into Events at Ease',
          desc:
            'This application allows hosts to create events easily and allows for attendees to be signed in without the need for staff and other bureaucracy.',
          img: eventHome,
        },
        {
          name: 'Using Radar.io for Geofencing',
          desc:
            'This application makes API calls to Radar.io in order to obtain location information about attendees. If attendees are in the proximity of the event, they will be signed in automatically.',
          img: eventGeo,
        },
        {
          name: 'Technologies and Languages Behind Event.io',
          desc:
            'This application was built with React.js (written in JS), Node.js, Express (written in TS), MongoDB and Radar.io.',
          img: eventTech,
        },
      ],
    },
  ];

  return (
    <Fragment>
      <div className='text-center p-4 bg-light'>
        <h1 className='pt-2'>Projects</h1>
        <p className='lead pt-1'>
          <strong>
            Besides studying, I am always hustling to build something useful and
            refreshing
          </strong>
        </p>
      </div>

      {projs.map((proj, index) => (
        <ProjectItem key={index} proj={proj} />
      ))}
    </Fragment>
  );
};

export default Projects;
