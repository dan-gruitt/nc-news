import { Link } from "react-router-dom";
import image from '../assets/gruitt-news-logo.jpg'

const Logo = () => {
    return ( 
        <Link to={"/"}><img src={image} alt="gruitt news logo" className="main-logo"/></Link>
     );
}
 
export default Logo;