import { useState } from "react";
import BenchAppAPI from "../api";
import { useAuth } from "../hooks/useAuthContext";
import { useUser } from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FormHelpers from "../helpers/FormHelpers";

// TODO: COMPLETE SIGN UP LOGIC. ADD A "EYE Button" TOGGLE TO VIEW PASSWORD ENTRY.

function SignupForm({ authLoading }) {
  const navigate = useNavigate();
  const initialFormState = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  };
  const [flash, setFlash] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const { currentToken, setCurrentToken } = useAuth();

  const handleChange = e => {
    FormHelpers.handleFormChange(e, setFormData);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // try {
    //   const res = await BenchAppAPI.logIn(formData);
    //   if (res.token) {
    //     setCurrentToken(res.token);
    //     navigate("/");
    //   }
    // } catch (err) {
    //   console.log(err.message);
    //   setFlash(err.message);
    // }
    const isValid = FormHelpers.isValidSignup(formData);
    if (!isValid[0]) setFlash(isValid[1]);

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
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />

          <button type="submit" onClick={handleSubmit}>
            {authLoading ? (
              "Loading..."
            ) : (
              <>
                Sign up <FontAwesomeIcon icon={faArrowRight} />
              </>
            )}
          </button>
        </form>
      )}
    </>
  );
}

export default SignupForm;
