import Header from "./Header";
import Menu from "./Menu";
import RightPanel from "./RightPanel";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Menu />
      <div className="Content">I AM THE CONTENT</div>
      <RightPanel />
    </div>
  );
}

export default Home;
