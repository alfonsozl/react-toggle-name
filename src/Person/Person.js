
import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h3 onClick={props.click}>I'm {props.name}, and I'm {props.age} years old!</h3>
            <p >{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;