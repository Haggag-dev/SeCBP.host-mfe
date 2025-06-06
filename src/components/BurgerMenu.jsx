import { FaBurger } from "react-icons/fa6";
import { useToggleMenu } from "../stores/toggle-menu";

const BurgerMenu = () => {
  const [toggleMenu, setToggle] = useToggleMenu();

  return (
    <div className="flex items-end">
      <button
        onClick={() => setToggle(!toggleMenu)}
        className="text-2xl cursor-pointer"
      >
        <FaBurger />
      </button>
    </div>
  );
};

export default BurgerMenu;
