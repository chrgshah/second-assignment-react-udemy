import React from 'react';

const Validation = (props) => {

    let output = null;
    this.output = props.length>5 ? "Text long enough" : "Text too short";

    return (
        <div>
                <p>The lenght of text is {props.length}</p>
                <p>{this.output}</p>
        </div>
    );
}

export default Validation;