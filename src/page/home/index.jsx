import Header from "../../components/header";
import SwipeButtons from "../../components/swipe-buttons";
import TinderCards from "../../components/tinder";
import { BsFillPersonFill } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <Header Icon={BsFillPersonFill} path="/" />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
};

export default Home;
