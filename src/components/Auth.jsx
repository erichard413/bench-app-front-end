//this page will serve as a layout template for login/sign up pages.

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
