import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

function Header({ isMenuExpanded }) {
  return (
    <div
      className="Header"
      style={{ paddingLeft: isMenuExpanded ? "17vw" : "60px" }}
    >
      <div className="logo-container">
        <img
          src="https://t3.ftcdn.net/jpg/19/64/59/76/360_F_1964597606_N2qrUR69czkCsxsScELpCQj64EOJlUiv.jpg"
          alt="ALT_TEXT_FOR_LOGO"
        />
      </div>
      <h2>Hockey Team #1</h2>
      <span className="down-chevron">
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
      <div className="right-corner">
        <select id="season" name="season">
          <option value="fall2026" selected>
            Fall 2026
          </option>
          <option value="summer2026">Summer 2026</option>
          <option value="spring2026">Spring 2026</option>
        </select>
        <div className="bell-container">
          <FontAwesomeIcon id="bell" icon={faBell} />
          <span id="bell-notification"></span>
        </div>{" "}
        <div className="header-user-section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvC22o9VLFSh66ZghPCTley290Tf-laMPdSjpnp9bKQ&s=10" />
          <span className="down-chevron">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
