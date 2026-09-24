import "../styles/Menu.css";
import { useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUsersRectangle,
  faCalendar,
  faChartLine,
  faMessage,
  faGear,
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";

function Menu({ isExpanded, setIsExpanded }) {
  const [isOpening, setIsOpening] = useState(false);

  const expandToggle = () => {
    if (!isExpanded) setIsOpening(true);
    setIsExpanded(e => !e);
  };

  const setIsClosed = () => {
    console.log("is closinger");
    if (isOpening) setIsOpening(false);
  };

  return (
    <nav
      className={`Menu`}
      style={{ width: `${isExpanded ? "17vw" : "60px"}` }}
      onTransitionEnd={setIsClosed}
    >
      <div className="MenuContent">
        <div className="Menu-nav">
          <ul>
            <li>
              <FontAwesomeIcon
                id="nav-open-close"
                style={{ cursor: "pointer" }}
                onClick={expandToggle}
                icon={isExpanded ? faAnglesLeft : faAnglesRight}
              />
            </li>
            <li>
              <FontAwesomeIcon icon={faUsersRectangle} />{" "}
              {isExpanded && !isOpening && "Team"}
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} />{" "}
              {isExpanded && !isOpening && "Roster"}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />{" "}
              {isExpanded && !isOpening && "Schedule"}
            </li>
            <li>
              <FontAwesomeIcon icon={faChartLine} />{" "}
              {isExpanded && !isOpening && "Stats"}
            </li>
            <li>
              <FontAwesomeIcon icon={faMessage} />{" "}
              {isExpanded && !isOpening && "Messages"}{" "}
              <span className="menu-messages-notification">
                <p>1</p>
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faGear} />{" "}
              {isExpanded && !isOpening && "Settings"}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
