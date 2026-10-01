import "../styles/Header.css";
import { useUser } from "../hooks/useUserContext";
import { useAuth } from "../hooks/useAuthContext";
import AppHelpers from "../helpers/AppHelpers";
import { useNavigate } from "react-router-dom";

function AccountDropDown({ expanded }) {
  const { setUser } = useUser();
  const { setCurrentToken } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await AppHelpers.logOutUser(setUser, setCurrentToken);
    navigate("/login");
  };
  return (
    <div className={"AccountDropDown " + (expanded && "expanded")}>
      <ul>
        <li>Teams</li>
        <li>Settings</li>
        <li onClick={handleLogOut}>Logout</li>
      </ul>
    </div>
  );
}

export default AccountDropDown;
