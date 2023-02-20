import React from 'react';
import Triangle from './Triangle';
function Square(props){
    var side=props.s;
    var ans=side*side;
    return(
        <div>
        <p>Area of the square : {ans}</p>
        <Triangle b="10" h="10"/>
        </div>
        );
}
export default Square;