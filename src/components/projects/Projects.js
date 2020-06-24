import React, { Fragment } from 'react';

import ProjectItem from './ProjectItem';

import eventHome from '../../assets/projects/eventhome.png';
import eventGeo from '../../assets/projects/eventgeo.png';
import eventTech from '../../assets/projects/eventtech.png';
import macHome from '../../assets/projects/machome.png';
import macPost from '../../assets/projects/macpost.png';
import macTech from '../../assets/projects/mactech.png';
import youHome from '../../assets/projects/youhome.png';
import youRes from '../../assets/projects/youres.png';

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
    {
      title: 'MAConnect',
      desc: 'Social media platform for McMaster Students',
      type: 'Side Project',
      features: [
        {
          name: 'Create a Profile and Connect with Other McMaster Students',
          desc:
            'This application allows McMaster students of all faculties to communicate with each other.',
          img: macHome,
        },
        {
          name: 'Create Posts and Communicate with Others',
          desc:
            'Use the posts feature to create updates for other students to like, comment on, and follow.',
          img: macPost,
        },
        {
          name: 'Technologies and Languages Behind MAConnect',
          desc:
            'MAConnect is a full-stack application made with React.js, Node.js, Express and MongoDB.',
          img: macTech,
        },
      ],
    },
    {
      title: 'YouRecommend',
      desc: 'Get YouTube channel suggestions based on your channel preferences',
      type: 'School Project',
      features: [
        {
          name: 'YouTube Channel Recommendations Based on Your Preferences',
          desc:
            'Specify your channel preference, choose whether you want these channels to be categorized by number of videos or subscribers and choose whether you want geographically related channel suggestions.',
          img: youHome,
        },
        {
          name: 'Technologies and Languages Behind YouRecommend',
          desc:
            'This application was built by connecting the front-end comprised of HTML, CSS, JS with the back-end of Java using Apache Tomcat.',
          img: youRes,
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
