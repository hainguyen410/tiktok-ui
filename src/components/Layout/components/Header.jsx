import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import Button from "../../Button";
import PopperWrapper from "../../Popper/Wrapper";
import styles from "./Header.module.scss";
import TiktokLogo from "../../../assets/images/logo.svg";
import AccountItem from "../../AccountItem/index";

const cx = classNames.bind(styles);
library.add(faCircleXmark);
library.add(faMagnifyingGlass);
library.add(faSpinner);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1]);
    }, 0);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={TiktokLogo} alt="Tiktok" />
        </div>

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={cx("search-title")}>Accounts</div>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>
        <div className={cx("login")}>
          <Button text>Upload</Button>
          <Button primary>Login</Button>
          <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => (
              <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <div className={cx("search-title")}>Accounts</div>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
            )}
          >
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Tippy>
        </div>
      </div>
    </header>
  );
}

export default Header;
