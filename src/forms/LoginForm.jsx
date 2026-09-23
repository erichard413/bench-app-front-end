import { useState } from "react";
import BenchAppAPI from "../api";
import { useAuth } from "../hooks/useAuthContext";
import AppHelpers from "../helpers/AppHelpers";
import { useUser } from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const initialFormState = { username: "", password: "" };
  const [formData, setFormData] = useState(initialFormState);
  const [token, setToken] = useState("");
  const { currentToken, setCurrentToken } = useAuth();
  const { user, setUser } = useUser();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await BenchAppAPI.logIn(formData);
    if (res.token) {
      setCurrentToken(res.token);
      navigate("/");
    }
    return;
  };
  const handleLogOut = async e => {
    e.preventDefault();
    await AppHelpers.logOutUser(setUser, setCurrentToken);
  };

  return (
    <>
      {!currentToken && (
        <form className="form">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
      {currentToken && (
        <button type="submit" onClick={handleLogOut}>
          Log Out
        </button>
      )}
      <p>TOKEN: {currentToken && currentToken}</p>
    </>
  );
}

export default LoginForm;
