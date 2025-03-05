// Coding Assignment:


// ○ {TitleComponent} vs {<TitleComponent/>} vs
// {<TitleComponent></TitleComponent>} in JSX


import React from "react";
import ReactDOM from "react-dom/client"


// ● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// // div with class “title”)
// const Header = React.createElement("div",{className: "title"},
//     [React.createElement("h1",{},"H1"),
//     React.createElement("h2",{},"H2"),
//     React.createElement("h3",{},"H3"),
//     ]
// )
// // ○ Create the same element using JSX
// const Header2 = (
//  <div className="title">
//     {Header}
//     {/* // ○ Pass attributes into the tag in JSX */}
//     <h1 id="h1" >H1 </h1>
//     <h2 id="h2">H2</h2>
//     <h3 id="h3">H3</h3>
//  </div>
// )

// // ○ Create a functional component of the same with JSX
// const Header3 =() => (
//     <div className="title">
//         {/* // ○ Composition of Component(Add a component inside another) */}
//         {Header2} 
//        <h1>H1 </h1>
//        <h2>H2</h2>
//        <h3>H3</h3>
//     </div>
//    )


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(Header2)


// *******************************************************************************************************


// Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice
import myImage from  "./src/assets/car.png"

import myImage2 from "./src/assets/user.png"

import myImage3 from "./src/assets/searchBar.png"

const HeaderComponent = function(){
    return <div id="container">
      <div><img src={myImage}  className="my-image" alt="image not found" /></div>
      <div id="inputDiv"><input type="text" className="input"></input>
      <img src={myImage3} className="my-image3"
      alt="image not found"/>
      </div>
      <div><img src={myImage2}  className="my-image" alt="image not found" /></div>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>)