import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} Yoga Gallery — Built  by Amith
        </p>
      </div>
    </footer>
  );
};

export default Footer;
