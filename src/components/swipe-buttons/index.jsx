import { MdReplay, MdStarRate, MdFavorite, MdFlashOn } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import "./index.css";
const SwipeButtons = () => {
  return (
    <div className="swipe-buttons">
      <MdReplay className="swipe-buttons__icon replay" />
      <AiOutlineClose className="swipe-buttons__icon close" />
      <MdStarRate className="swipe-buttons__icon starRate" />
      <MdFavorite className="swipe-buttons__icon favorite" />
      <MdFlashOn className="swipe-buttons__icon flashOn " />
    </div>
  );
};

export default SwipeButtons;
