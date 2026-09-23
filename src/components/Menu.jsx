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
      style={{ width: `${isExpanded ? "13vw" : "1vw"}` }}
      onTransitionEnd={setIsClosed}
    >
      <div className="MenuContent">
        <FontAwesomeIcon
          id="nav-open-close"
          onClick={expandToggle}
          icon={isExpanded ? faAnglesLeft : faAnglesRight}
        />

        <div className="Menu-nav">
          <ul>
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
              {isExpanded && !isOpening && "Messages"}
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
