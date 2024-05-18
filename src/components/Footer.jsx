import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Brayan Olivares Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
