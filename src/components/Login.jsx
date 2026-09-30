import LoginForm from "../forms/LoginForm";
import { useAuth } from "../hooks/useAuthContext";
import "../styles/Login.css";

function Login() {
  const { currentToken, setCurrentToken } = useAuth();
  return (
    <div className="Login">
      <div className="left">left</div>
      <div className="right">
        right
        <p>{currentToken ? "LOG OUT" : "LOG IN"}</p>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
