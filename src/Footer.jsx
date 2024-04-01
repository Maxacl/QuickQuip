import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer p">Copyright {currentYear} </p>
    </footer>
  )
}

export default Footer;