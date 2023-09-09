import "./topbar.css";
import logo from "./logo.png";
import {Link} from "react-router-dom";
// import ImageSearch from "../ImageSearch";

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="imglogo">
        <img   src={logo} alt="logo"/> 
        </div>
        <div className="topbarItems">
            <div className="topbarItem"><Link to ="/Home">HOME</Link></div>
            <div className="topbarItem"><Link to ="/Game">Game</Link></div>

            <div className="topbarItem"> <Link to="/Food">FOOD</Link></div>
            

        </div>
        {/* <div className="searchbar">
            <input type="text" placeholder="search" classname="search">
               

            </input><i className="topSearchIcon fas fa-search"></i>
        </div> */}
       

    </div>
  )
}

export default Topbar
