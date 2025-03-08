import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";


const Applayout = () =>{
  return(
    <div>
      <Header/>
      <Body/>
    </div>
  )
} 



const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
Reactroot.render(<Applayout/>)