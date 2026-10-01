import { useState } from "react";
import BenchAppAPI from "../api";
import { useAuth } from "../hooks/useAuthContext";
import { useUser } from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LoginForm({ authLoading }) {
  const navigate = useNavigate();
  const initialFormState = { username: "", password: "" };
  const [flash, setFlash] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const { currentToken, setCurrentToken } = useAuth();
  const { setUser } = useUser();

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(data => ({ ...data, [name]: value.replace(/\s/g, "") }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await BenchAppAPI.logIn(formData);
      if (res.token) {
        setCurrentToken(res.token);
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
      setFlash(err.message);
    }
    return;
  };

  return (
    <>
      <div className="flash-div">
        <p>{flash}</p>
      </div>

      {!currentToken && (
        <form className="form">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            {authLoading ? (
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
