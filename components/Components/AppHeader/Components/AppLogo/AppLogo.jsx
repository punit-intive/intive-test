import "./AppLogo.scss";

import Link from "next/link";
import PageContext from "@/contexts/PageContext";
import __ from "@/helpers/translate";
import { useContext } from "react";
import Logo from "/public/logo.svg";
import cx from 'classnames';

const AppLogo = ({ isWhiteMenu }) => {
  const language  = "en";

  return (
    <Link
      className={cx("app-logo", {
        "app-logo--white": isWhiteMenu
      })}
      to='/'
      href='/'
      data-test='header__logo'
    >
      <img src ="/logo.svg" />
    </Link>
  );
};


export default AppLogo;
