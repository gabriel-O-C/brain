export const Menu: React.FC = () => {
  const menuItems = ["jest", "git", "typescript"];
  return (
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
  );
};
