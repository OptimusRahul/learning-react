import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'qwerty', name: 'Max', age: 28 },
      { id: 'asdfg', name: 'Manu', age: 29 },
      { id: 'zxcvbn', name: 'Shubh', age: 22 }
    ],
    otherState: 'some other state',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

    componentWillMount(){
      console.log('[App.js] componentWillMount');
    }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons : persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;
    } 

    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(assignedClasses.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(assignedClasses.bold);
    }
    
    return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit:false})}}> Remove Cockpit </button>
          {this.state.showCockpit ? 
            <Cockpit
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}/> : null }
          {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);


/* {this.state.persons.map((person, index) => {
  return <Person 
                click={ () => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
})} */
/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
<Person name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'rockerahul123')}
        changed={this.nameChangedHandler}
        > My Hobbies: Coding </Person>
<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */


/* <button onClick={ () => this.switchNameHandler("asdFSA")}>Switch Name</button>  */

// return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a React app!!!'));