import { useState } from "react";
import Button from "../../components/Button";
import SideBar from "../../components/SideBar";
import { Link } from "react-router-dom";
import "./style.css"
const Home = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div>
      <h1 id="tals">home</h1>
      <Button name="SB" onClick={toggleSideBar} />

      <SideBar
        isOpen={isSideBarOpen}
        onClose={toggleSideBar}
        content={
          <>
          <h1>oi</h1>
            <Link to="/pratos">
              {" "}
              <button data-testid="botaoCardapio">cardapio</button>
            </Link>{" "}
            <Link to="/sobremesas">
              {" "}
              <button>sobremesas</button>
            </Link>{" "}
            <Link to="/movimentossociais">
              {" "}
              <button>movimentos sociais</button>
            </Link>{" "}
          </>
        }
      />
    </div>
  );
};
export default Home;
