import React from 'react';
function Triangle(props){
    var height=props.h;
    var base=props.b;
    var ans=0.5*base*height;
    return(
        <div>
        <p>Area of the traingle : {ans}</p>
        </div>
        );
}
export default Triangle;