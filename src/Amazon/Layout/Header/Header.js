import React from "react";
import "./Header.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon"
      />

      <div className="header__search">
        <input type="text" className="header__search__input" />
        <SearchRoundedIcon className='header__search__icon'/>
      </div>

      <div className="header__nav">
        <div className="header__option">
            <span className="header__option__lineOne">Hello Guest</span>
            <span className="header__option__lineTwo">SignIn</span>
        </div>
        <div className="header__option">
            <span className="header__option__lineOne">Returns</span>
            <span className="header__option__lineTwo">& Orders</span>
        </div>
        <div className="header__option">
            <span className="header__option__lineOne">Your</span>
            <span className="header__option__lineTwo">Prime</span>
        </div>
        <div className="header__option__basket">
            <ShoppingBasketRoundedIcon className='header__basket__icon'/>
            <span className="header__option__lineTwo header__basket__count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
