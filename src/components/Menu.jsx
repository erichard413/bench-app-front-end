function Menu() {
  const handleMouseDown = e => {
    e.preventDefault();

    const startX = e.clientX;
    const startWidth = menuWidth;

    const handleMouseMove = e => {
      const newWidth = startWidth + (e.clientX - startX);

      setMenuWidth(Math.min(Math.max(newWidth, 180), 400));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <nav className="Menu">
      <div className="MenuContent">{/* Menu stuff */}</div>

      <div className="MenuResizeHandle" onMouseDown={handleMouseDown} />
    </nav>
  );
}

export default Menu;
