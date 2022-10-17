import React from "react";
import FuncComp from '../Components/Functional';
import '../Styles/privacy.css';
//class component

class ClassComponent extends React.Component{
    render(){
        return(
            // <h3><FuncComp></FuncComp>Welcome to Our <ClassComponent1></ClassComponent1></h3>
            <h4>Welcome to Our Website<ClassComponent1></ClassComponent1></h4>

        )
    }
}

class ClassComponent1 extends React.Component{
    render(){
        return(
            //<h3>Privacy and Policy<FunctionalComponent></FunctionalComponent></h3>
            <>
            <div class="body"><h3> Terms of use</h3><p>If you are a professional photographer, you likely have a photography website because it’s an excellent way to share your work with potential clients in your area, book appointments, and receive payments.

However, if your website allows you to collect and share personal data from everyone who visits, it must have a clear privacy policy statement.</p></div>
            </>
        )
    }
}

// function FunctionalComponent()
// {
//  return(
//     <h4>and Enjoy our service</h4>
//  )
// }

export default ClassComponent;