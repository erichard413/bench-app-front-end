import LoginForm from "../forms/LoginForm";
import { useAuth } from "../hooks/useAuthContext";
import "../styles/Login.css";

function Login({ authLoading }) {
  const { currentToken, setCurrentToken } = useAuth();
  return (
    <div className="Login">
      <div className="left"></div>
      <div className="right">
        <div className="login-div">
          <h1>Welcome back</h1>
          <h3>Log in to your account</h3>
          <LoginForm authLoading={authLoading} />
          <span className="login-line"></span>
          <p id="or">or</p>
          <p id="sign-up">
            Don't have an account? <a href="/">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
