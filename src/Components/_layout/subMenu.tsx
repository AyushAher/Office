import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SubMenu = ({ data, open }: any) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        onClick={() => setSubMenuOpen(!subMenuOpen)}
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
        ${data.gap ? "mt-9" : "mt-2"}`}
      >
        <img src={data.src} />
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          {data.title}
        </span>
        <p className="flex-1 capitalize">{data.name}</p>
        {open && data.dropdown && (
          <i
            className={
              (subMenuOpen ? "rotate-180 " : "") + "fa-solid fa-caret-down"
            }
          ></i>
        )}
      </li>

      {open && (
        <motion.ul
          animate={subMenuOpen ? { height: "fit-content" } : { height: 0 }}
          className="flex h-0 flex-col ml-10 mt-2 bg-white rounded text-[0.8rem] font-normal overflow-hidden"
        >
          {data.subMenu?.map((menu: string) => (
            <li key={menu} className="p-3 pl-5 hover:text-gray  cursor-pointer">
              <NavLink
                to={`/${data.name}/${menu}`}
                className="link !bg-transparent capitalize"
              >
                {menu}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default SubMenu;
