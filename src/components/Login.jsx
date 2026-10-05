import LoginForm from "../forms/LoginForm";
import "../styles/Login.css";
import Auth from "./Auth";

function Login({ authLoading }) {
  return (
    <Auth>
      <div className="auth-div">
        <h1>Welcome back</h1>
        <h3>Log in to your account</h3>
        <LoginForm authLoading={authLoading} />
        <span className="login-line"></span>
        <p id="or">or</p>
        <p id="sign-up">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </Auth>
  );
}

export default Login;
