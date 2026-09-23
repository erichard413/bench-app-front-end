function Header({ isMenuExpanded }) {
  return (
    <div
      className="Header"
      style={{ paddingLeft: isMenuExpanded ? "13vw" : "55px" }}
    >
      I am the header
    </div>
  );
}

export default Header;
