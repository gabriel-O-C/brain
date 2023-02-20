import { useState } from "react";
import menu from "../../assets/menu.svg";
import { Menu } from "../../components/menu";

export const Home: React.FC = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <header>
      <div className="flex justify-between p-4 w-screen">
        <strong className="uppercase">MyNotes</strong>
        <nav className="cursor-pointer relative">
          <img
            alt="menu-icon"
            role="menubar"
            src={menu}
            title="menu"
            onClick={() => {
              setIsopen(prevState => !prevState);
            }}
          />
          {isOpen ? <Menu /> : null}
        </nav>
      </div>
    </header>
  );
};
