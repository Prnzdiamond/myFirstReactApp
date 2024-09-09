import { NavLink } from "react-router-dom";

const NavBtn = ({ text, url }) => {
  return (
    <>
      <NavLink
        to={url}
        className={({ isActive }) =>
          `text-white ${
            isActive ? " bg-black" : ""
          }  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`
        }
      >
        {text}
      </NavLink>
    </>
  );
};

export default NavBtn;
