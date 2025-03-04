import React from "react";
import ReactDOM from "react-dom/client"
// const heading = React.createElement("h1",{id: 'heading1'},
//     "Namaste JavaScript 🙏.");

// const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading) //return  h1 type js object
// Reactroot.render(heading);

//render method convert this h1 obj to h1 tag. 


// --------------------------------------------------

const parent =  React.createElement("div",{id:'parent'},
  [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{id:'h1'},"Hello, World1 "),
     React.createElement("h2",{id:'h2'},"Hello, World2 ")   
    ]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{id:'h1'},"Hello, World1 "),
         React.createElement("h2",{id:'h2'},"Hello, World2 ")   
        ]
    )
]
     
 ) 

const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
Reactroot.render(parent)