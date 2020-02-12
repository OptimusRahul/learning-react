import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary'
import classes from './Person.css'
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render(){
    console.log('[Person.js] rendering...');
        return (
            <Aux>
                {/* <div key="i1" className={classes.Person}> */}
                    <p key="i2" onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
                    <p key="i3">{this.props.children}</p>
                    <input key="i4" type="text" onChange={this.props.changed} value={this.props.name} />
                {/* </div> */}
            </Aux>
        );

        // return [
        //     <div key="i1" className={classes.Person}>,
        //         <p key="i2" onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
        //         <p key="i3">{this.props.children}</p>,
        //         <input key="i4" type="text" onChange={this.props.changed} value={this.props.name} />
        //     </div>
        // ];

        // return (
        //     <div className={classes.Person}>
        //         <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name} />
        //     </div>
        // );
    }
}

export default withClass(Person, classes.Person);