import "../styles/Menu.css";
import { useState } from "react";
import { useLayoutEffect } from "react";

function Menu({ isExpanded, setIsExpanded }) {
  const expandToggle = () => {
    setIsExpanded(e => !e);
  };

  return (
    <nav className={`Menu`} style={{ width: `${isExpanded ? "13vw" : "2vw"}` }}>
      <div className="MenuContent">
        I AM THE MENU
        <button onClick={expandToggle}>{isExpanded ? "Close" : "Open"}</button>
      </div>
    </nav>
  );
}

export default Menu;
