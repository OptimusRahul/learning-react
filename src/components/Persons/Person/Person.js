import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxillary'
import classes from './Person.css'
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    
    static contextType = AuthContext;

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    
    render(){
    console.log('[Person.js] rendering...');
        return (
            <Aux>
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p> }
                </AuthContext.Consumer> */}
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p> }
                {/* <div key="i1" className={classes.Person}> */}
                    <p key="i2" onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
                    <p key="i3">{this.props.children}</p>
                    <input key="i4"
                           ref={this.inputElementRef}//{(inputEl) => {this.inputElement = inputEl}}
                           type="text"
                           onChange={this.props.changed} 
                           value={this.props.name} />
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

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);