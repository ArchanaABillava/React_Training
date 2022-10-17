import React from "react";
//import the Functional.css
import '../Styles/Functional.css';
//we can create many components
//we can export only one component

//Functional component -> return( embed HTML )
//export default function FunctionalComponent()
//Components - must start with an Uppercase
function FunctionalComponent()
{
 return(
    <div>
         <h4><FunctionalComponent4></FunctionalComponent4>We will help you out make your kid's childhood memorable in a beautiful way.... <FunctionalComponent1></FunctionalComponent1></h4>
    </div>
   
 )
}
function FunctionalComponent1()
{
 return(
    <h5>Lets reserve those day in images<FunctionalComponent3></FunctionalComponent3></h5>
 )
}
//arrow function
const FunctionalComponent2=()=>{
    return(
        <h6>These are few samples of our photoshoot</h6>
    )
}
//arrow function
const FunctionalComponent3=()=>{
    return(
        <div class="row">
            <div class="column"><img src="https://media.istockphoto.com/photos/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily-picture-id923852236?k=20&m=923852236&s=612x612&w=0&h=jSey_SEWjy4uRbWrPZQ55E275mVJQDWPAnTVuw_aHe8="></img></div>
            <div class="column"><img src="https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=600"></img></div>
            <div class="column"><img src="https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img></div>
        
        
        </div>
    )
}

//arrow function 
//React Fragments
const FunctionalComponent4=()=>{
    return(
        <table style={{width:'100'}}>
            <thead>
                <tr>
                    <FunctionalComponent5></FunctionalComponent5>
                </tr>
            </thead>
        </table>
    )
}
//React Fragemnts - <> </> or <React.Fragment>
//React Fragemnts - Which are used for displaying the set of child elements without a parent element
//To avoid unnecceary elements to be rendered
const FunctionalComponent5=()=>{
    return(
        <React.Fragment>
        <td>Baby Photoshoot </td>
        {/* <td>PhotoShoot </td>
        <td>In  </td>
        <td>Creative way </td> */}
        </React.Fragment>
    )
}

//only one export
export default FunctionalComponent;
