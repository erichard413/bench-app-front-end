import LoginForm from "../forms/LoginForm";
import { useAuth } from "../hooks/useAuthContext";

function Login() {
  const { currentToken, setCurrentToken } = useAuth();
  return (
    <div>
      <p>{currentToken ? "LOG OUT" : "LOG IN"}</p>
      <LoginForm />
    </div>
  );
}

export default Login;
