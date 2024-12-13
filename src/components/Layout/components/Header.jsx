import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import TiktokLogo from "../../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const cx = classNames.bind(styles);
library.add(faCircleXmark);
library.add(faMagnifyingGlass);
library.add(faSpinner);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={TiktokLogo} alt="Tiktok" />
        </div>
        <div className={cx("search")}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
          />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
          </button>
          <FontAwesomeIcon
            className={cx("loading")}
            icon="fa-solid fa-spinner"
          />
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
        <div className={cx("login")}></div>
      </div>
    </header>
  );
}

export default Header;
