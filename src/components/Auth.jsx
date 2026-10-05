import "../styles/Auth.css";

function Auth({ children }) {
  return (
    <div className="Auth">
      <div className="left"></div>
      <div className="right">{children}</div>
    </div>
  );
}

export default Auth;
