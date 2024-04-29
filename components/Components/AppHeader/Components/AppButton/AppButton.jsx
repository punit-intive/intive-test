import "./AppButton.scss";
import cx from "classnames";

const AppButton = ({ label, className, icon, isWhiteMenu, onClick }) => (
  <div
    className={cx("app-button", { "app-button--white": isWhiteMenu }, className)}
    onClick={onClick}
    onKeyDown={onClick}
    role='button'
    tabIndex={0}
  >
    {icon}

    {label && (
      <div className='app-button__label nav-link' role='menuitem'>
        {label}
      </div>
    )}
  </div>
);


export default AppButton;
