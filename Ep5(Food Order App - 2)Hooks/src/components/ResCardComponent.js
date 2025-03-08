import { image_url } from "../utils/constant";

const ResCardComponent = ({props}) =>{
    const {name,cuisines,avgRating,sla,
      costForTwo,cloudinaryImageId
      } = props.info
    return(
   <div className="rescard">
    <img className="res-img" src={image_url+cloudinaryImageId} />
    <h3>{name}</h3>
    <h5>{cuisines.join(", ")}</h5>
    <h5>{sla.deliveryTime}min</h5>
    <h5>{avgRating}Star &nbsp;&nbsp;&nbsp;&nbsp;{costForTwo }</h5>
    
   </div>
    )
  }
  export default ResCardComponent;