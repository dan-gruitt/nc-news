import Logo from "./Logo";
import TopicBar from "./TopicBar";
import User from "./User";

const Header = () => {
    return (
        <div >
            <section className="header">
                <Logo />
            </section>
            <section className="navigation">
                <TopicBar />
            </section>

        </div>
    );
}

export default Header;