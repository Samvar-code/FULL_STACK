import React from 'react';
import Cylinder from './Cylinder';
function Cube(props){
    var side=props.s;
    var ans=side*side*side;
    return(
        <div>
        <p>Volume of Cube : {ans}</p>
        <Cylinder r="10" h="10"/>
        </div>
        );
}
export default Cube;