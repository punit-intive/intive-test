import "./AppNavButtons.scss";

import { useEffect, useState } from "react";

import AppButton from "../AppButton";

const AppNavButtons = ({ isWhiteMenu, searchIcon, onClickSearch, children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className='app-buttons'>
      {!loading && (
        <>
          {children}

          <div className='app-buttons__separator' />

          <AppButton className='app-button__search' isWhiteMenu={isWhiteMenu} icon={searchIcon} onClick={onClickSearch} />
        </>
      )}
    </div>
  );
};



export default AppNavButtons;
