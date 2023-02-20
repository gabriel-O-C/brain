import menu from "../../assets/menu.svg";

export const Home: React.FC = () => {
  return(
    <header>
      <div className="flex justify-between p-4">
        <strong className="uppercase">MyNotes</strong>
        <nav className="cursor-pointer">
          <img alt="menu-icon" role="menubar" src={menu} title="menu" />
        </nav>
      </div>
    </header>
  )
}
