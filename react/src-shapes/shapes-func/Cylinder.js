import React from 'react';
import Square from './Square';
function Cylinder(props){
    var radius=props.r;
    var height=props.h;
    var ans=3.14*radius*radius*height;
    return(
        <div>
        <p>Volume of cylinder : {ans}</p>
        <Square s="10"/>
        </div>
        );
}
export default Cylinder;