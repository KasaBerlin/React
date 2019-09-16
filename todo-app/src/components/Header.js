import React from "react";

// or const Header = props=>

function Header(props) {
  return (
    <header>
      <h1>What to do?</h1>
      <span className="tagline">{props.getRandomTagline}</span>
    </header>
  );
}

export default Header;
