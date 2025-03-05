import React from "react";
import ReactDOM from "react-dom/client"
// const heading = React.createElement("h1",{id: 'heading1'},
//     "Namaste JavaScript 🙏.");

// const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading) //return  h1 type js object
// Reactroot.render(heading);

//render method convert this h1 obj to h1 tag. 


// --------------------------------------------------
const jsxHeading = (     //react element
  <h1 id='head'>Jsx in React 👓</h1>
) 


const JsxHeading = ()=> (     //react component
  <div className="container">
     {/* react element */}
     {jsxHeading} 
     <h1>Jsx in React 👓</h1>
     <h2>React Component</h2>
  </div>

) 


const Component = () =>(  
      <div className="container">
      {/* component composition */}
      <JsxHeading/>  
      <h1 id="heading">React functional component 
      </h1>
      </div>   
)



const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
Reactroot.render(<Component/>)