import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  disabled = false,
  rounded = false,
  small = false,
  large = false,
  children,
  classNames,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const _props = {
    onClick,
    ...passProps,
  };


  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(_props).forEach((key) => {
        if (key.startsWith("on") && typeof _props[key] === 'function') {
            delete _props[key]
        }
    })
  }

  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
    _props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper", {
    [classNames]: classNames,
    primary,
    outline,
    disabled,
    text,
    rounded,
    small,
    large,
  });
  return (
    <Comp className={classes} {..._props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
