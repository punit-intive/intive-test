import "./AppNav.scss";

import AppLogo from "../AppLogo";

const AppNav = ({ className, isWhiteMenu, children }) => {
  return (
    <nav className={className} role='navigation' aria-label='main navigation'>
      <AppLogo isWhiteMenu={isWhiteMenu} />

      {children}
    </nav>
  );
};



export default AppNav;
