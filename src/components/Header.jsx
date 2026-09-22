function Header({ isMenuExpanded }) {
  return (
    <div
      className="Header"
      style={{ "padding-left": isMenuExpanded ? "13vw" : "4vw" }}
    >
      I am the header
    </div>
  );
}

export default Header;
