import {logo_url} from "../utils/constant"

const Header = () =>{
    return(
      <div className="Header-container">
        <div className="img-container">
        <img className="img-logo" src={logo_url}/>
        </div>
        <div className="nav-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
  
      </div>
    )
  }


export default Header;   