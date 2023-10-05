import { MdArrowBackIosNew } from "react-icons/md";
import "./index.css";
import Header from "../../components/header";
const NotFound = () => {
  return (
    <div className="not-found-page">
      <Header icon={MdArrowBackIosNew} />
      <div className="not-found">
        <img
          className="not-found__img"
          src="/img/not-found.jpg"
          alt="Not Found"
        />
      </div>
    </div>
  );
};

export default NotFound;
