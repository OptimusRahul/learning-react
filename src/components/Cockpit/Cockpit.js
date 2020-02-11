import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js useEffect');
    //HTTP request
    /*
    const timer = setTimeout(() => {
      alert('Saved data to cloud.');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect()');
    };
    */
    setTimeout(() => {
      alert('Saved data to cloud.');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect()');
    };
  }, [] /*[props.person]*/);

  const assignedClasses = [];
  let btnClass='';
  if(props.showPersons){
      btnClass = classes.Red;
  }

  if(props.personsLength <= 2){
    assignedClasses.push(assignedClasses.red);
  }
  if(props.personsLength <= 1){
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

export default React.memo(cockpit);