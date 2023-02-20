import Cube from "./Cube"
function Circle(props){
    var radius=props.r;
    var ans=3.14*radius*radius;
    return(
        <div>
            <h3>Using Functions:</h3>
        <p>Area of the circle : {ans}</p>
        <Cube s="5"/>
        </div>
        );
}

export default Circle;