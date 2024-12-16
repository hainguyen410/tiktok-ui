import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1cb2cc9701bf346f569ed4b72e00e8e1~c5_300x300.webp?lk3s=a5d48078&nonce=20272&refresh_token=bbfda01e0d8acaa392982d8d2df0d68f&x-expires=1734357600&x-signature=T32NbU7OC9VsSBdiBt6quArh%2BJg%3D&shp=a5d48078&shcp=c1333099"
        alt="Hoaa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
        </h4>
        <p className={cx("username")}>nguyenvana</p>
      </div>
    </div>
  );
}

export default AccountItem;
