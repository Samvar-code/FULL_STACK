import React from "react";

class Shapess extends React.Component{
    render(){
        return(
            <div>
            <h3>Using Class : </h3>
            <Circlee/>
            </div>
        )
    }
}

class Circlee extends React.Component{
    render(){
        var radius=10;
        var ans=2*3.14*radius;
         return (
            <div>
            <p>Perimneter of Circle : {ans}</p>       
            <Cubee/>
            </div>
         )
    }
}

class Cubee extends React.Component{
    render(){
        var side=10;
        var ans=side*side*side;
        return (
            <div>
           <p>Volume of cube :{ans}</p>
           <Cylinderr/>
            </div>
            )
    }
}

class Cylinderr extends React.Component{
    render(){
        var radius=10;
        var height=20;
        var ans=3.14*radius*radius*height;
        return (
            <div>
            <p>Volume of cylinder : {ans}</p>
            <Squaree/>
            </div>
            )
    }
}

class Squaree extends React.Component{
    render(){
        var side=10;
        var ans=side*side;
        return (
            <div>
                <p>Area of square : {ans}</p>
                <Trianglee/>
            </div>
        )
    }
}

class Trianglee extends React.Component{
    render(){
        var length=10;
        var breadth=20;
        var ans=0.5*(length*breadth);
        return (
            <div>
                <p>Area of triangle : {ans}</p>
            </div>
        )
    }
}


export default Shapess;