import { useState } from "react";
import menu from "../../assets/menu.svg";

export const Header: React.FC = () => {
  const [isOpen, setIsopen] = useState(false);
  const menuItems = ["jest", "git", "typescript"];

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
          {isOpen ? (
            <div className="absolute text-left border-red-500 border-spacing-1 top-8 right-[-12px] px-8 bg-white text-black h-[calc(100vh-100px)] overflow-hidden mt-2 w-[calc(20vw)] rounded mr-3">
              <ul>
                {menuItems.map(menuItem => (
                  <a key={menuItem} href={`/${menuItem}`}>
                    <li className="border-black border-b border-solid text-center py-2 cursor-pointer">
                      {menuItem}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
};
