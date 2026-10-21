import { useState } from "react";
import BenchAppAPI from "../api";
import { useAuth } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import FormHelpers from "../helpers/FormHelpers";

function LoginForm() {
  const navigate = useNavigate();
  const initialFormState = { username: "", password: "" };
  const [flash, setFlash] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const { currentToken, setCurrentToken } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const handleChange = e => {
    FormHelpers.handleFormChange(e, setFormData);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFlash(null);
    setLoginLoading(true);
    try {
      const res = await BenchAppAPI.logIn(formData);

      if (res?.token) {
        // if there's a token, set currentToken.
        setCurrentToken(res.token);
      } else {
        setFlash("Invalid username/password.");
      }
    } catch (err) {
      console.error(err);
      setFlash(err.message || "Unable to log in. Please try again.");
    }
    setLoginLoading(false);
  };

  return (
    <>
      <div className="flash-div">
        <p>{flash}</p>
      </div>

      {!currentToken && (
        <form className="form" onSubmit={handleSubmit}>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <FontAwesomeIcon
              id="password-eye"
              icon={showPassword ? faEyeSlash : faEye}
              onClick={() => setShowPassword(e => !e)}
            />
          </div>

          <button type="submit" disabled={loginLoading}>
            {loginLoading ? (
              "Loading..."
            ) : (
              <>
                Log in <FontAwesomeIcon icon={faArrowRight} />
              </>
            )}
          </button>
        </form>
      )}
    </>
  );
}

export default LoginForm;
