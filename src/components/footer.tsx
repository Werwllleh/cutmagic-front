import React from 'react';
import dayjs from "dayjs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__row">
            <span className="footer__row--text">© Волшебные Ножницы</span>
            <span className="footer__row--year">{dayjs().year()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;