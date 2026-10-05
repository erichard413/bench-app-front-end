import SignupForm from "../forms/SignupForm";
import Auth from "./Auth";

function Signup({ AuthLoading }) {
  return (
    <Auth>
      <div className="auth-div">
        <h1>Sign up</h1>
        <h3>Create an account</h3>
        <SignupForm authLoading={AuthLoading} />
        <span className="login-line"></span>
        <p id="or">or</p>
        <p id="sign-up">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </Auth>
  );
}

export default Signup;
