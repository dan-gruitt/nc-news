import Logo from "./Logo";
import TopicBar from "./TopicBar";
import User from "./User";

const  Header = () => {
    return ( 
        <div>
            <Logo />
            <User />
            <TopicBar />
        </div>
     );
}
 
export default Header;