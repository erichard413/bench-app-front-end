import "../styles/Home.css";
import Header from "./Header";
import Menu from "./Menu";
import RightPanel from "./RightPanel";
import { useState } from "react";

function Layout({ children }) {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <div className="Layout">
      <Header isMenuExpanded={isMenuExpanded} />

      <div className="container">
        <Menu isExpanded={isMenuExpanded} setIsExpanded={setIsMenuExpanded} />

        <main className="Content">
          <div className="Layout-Container">
            <div className="Main-Scroll-Area">{children}</div>

            <RightPanel />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
