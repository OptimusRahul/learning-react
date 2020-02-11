import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

  use2
  useEffect(() => {
    console.log('[Cockpit.js useEffect');
  });

  const assignedClasses = [];
  let btnClass='';
  if(props.showPersons){
      btnClass = classes.Red;
  }

  if(props.persons.length <= 2){
    assignedClasses.push(assignedClasses.red);
  }
  if(props.persons.length <= 1){
    assignedClasses.push(assignedClasses.bold);
  }

  return (
      <div className={classes.Cockpit}>
          <h1>Hi, I'm a React app</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button 
              className={btnClass} 
              onClick={props.clicked}>Toggle Persons</button>
      </div>
  );
};

export default cockpit;