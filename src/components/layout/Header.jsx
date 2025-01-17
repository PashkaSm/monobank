import { FaAngleUp, FaAngleDown } from "react-icons/fa";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-main-layout">
        <div className="header-logo-container">
          <a href="/" className="header-logo-ref">
            <div className="header-logo">monobank</div>
            <div className="header-saparate-logo"></div>
            <div className="header-logo-web">Web</div>
          </a>
        </div>
        <div className="header-currency">
          <ul className="header-currency-list">
            <li className="header-currency-items">
              <div>USD</div>
              <div>37.00</div>
              <div>
                <FaAngleUp color="green" />
              </div>
            </li>
            <li className="header-currency-items">
              <div>EUR</div>
              <div>39.00</div>
              <div>
                <FaAngleUp color="green" />
              </div>
            </li>
            <li className="header-currency-items">
              <div>BIT</div>
              <div>30.000</div>
              <div>
                <FaAngleDown color="red" />
              </div>
            </li>
          </ul>
        </div>
        <div className="header-settings">
          <ul className="header-settings-list">
            <li className="header-settings-item">
              <a href="/">MONEY TRANSFER</a>
            </li>
            <li className="header-settings-item">
              <a href="/">CHARGE PHONE</a>
            </li>
            <li className="header-settings-item">
              <a href="/">REPLISH CARD</a>
            </li>
          </ul>
        </div>
        <div className="header-user">
          <div className="header-user-grats">
            <p>Hello, Nick</p>
          </div>
        </div>
        <div className="header-right-search-avatar">
          <div className="search-logo"><svg fill="#878686" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="13px" height="13px">    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/></svg></div>
          <div className="header-input-container"><input type="text" className="header-input" /></div>
          <div className="header-avatar"><img src="" alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
