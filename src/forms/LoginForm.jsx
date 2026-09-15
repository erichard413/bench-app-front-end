import { useState } from "react";
import BenchAppAPI from "../api";

function LoginForm() {
  const initialFormState = { username: "", password: "" };
  const [formData, setFormData] = useState(initialFormState);
  const [token, setToken] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await BenchAppAPI.logIn(formData);
    if (res.token) setToken(res.token);
    return;
  };

  return (
    <>
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
      <p>TOKEN: {token && token}</p>
    </>
  );
}

export default LoginForm;
