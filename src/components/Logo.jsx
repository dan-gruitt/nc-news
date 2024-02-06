import { Link } from "react-router-dom";

const Logo = () => {
    return ( 
        <Link to={"/"}><img src="./src/assets/gruitt-news-logo.png" alt="gruitt news logo" className="main-logo"/></Link>
     );
}
 
export default Logo;