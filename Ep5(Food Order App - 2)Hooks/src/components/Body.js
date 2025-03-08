import ResCardComponent from "./ResCardComponent";
import resObj from "../utils/mockData";

import { useState } from "react";

const Body = ()=>{

  const [filterrestaurant,setfilterrestaurant] = useState(resObj)
    return(
      <div className="body">
        
        <button type="button" className="btn" onClick={() =>{
            const restaurantFilter = resObj.filter(res => res.info.avgRating > 4.2);
            setfilterrestaurant(restaurantFilter);
           }}>Top Rated Restaurant </button>
           
        <div className="res-container">  
        {filterrestaurant.map((restaurant)=><ResCardComponent key={restaurant.info.id} props={restaurant}/>)}  
        </div>
      </div>
    )
  }

  export default Body;