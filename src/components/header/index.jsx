import { Link } from "react-router-dom";
import "./index.css";
import { MdForum } from "react-icons/md";
const Header = ({ Icon, path }) => {
  return (
    <div className="header">
      <Link to={path}>
        <Icon className="header__icon" />
      </Link>
      <Link to={path}>
        <img className="header__logo" src="/img/logo.png" alt="tinder logo" />
      </Link>
      <Link to="chat">
        <MdForum className="header__icon" />
      </Link>
    </div>
  );
};

export default Header;
