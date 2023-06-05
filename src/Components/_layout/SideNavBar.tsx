import { useState } from "react";
import SubMenu from "./subMenu";

// Images
import logo from "../../Assets/Images/Sidebar/logo.png";
import Chart_fill from "../../Assets/Images/Sidebar/Chart_fill.png";
import Chat from "../../Assets/Images/Sidebar/Chat.png";
import User from "../../Assets/Images/Sidebar/User.png";
import Calendar from "../../Assets/Images/Sidebar/Calendar.png";
import Search from "../../Assets/Images/Sidebar/Search.png";
import Chart from "../../Assets/Images/Sidebar/Chart.png";
import Folder from "../../Assets/Images/Sidebar/Folder.png";
import Setting from "../../Assets/Images/Sidebar/Setting.png";

const SideNavBar = () => {
  const [open, setOpen] = useState(false);
  const [Menus, setMenu] = useState([
    { title: "Dashboard", src: Chart_fill },
    {
      title: "Inbox",
      src: Chat,
      dropdown: true,
      subMenu: ["Link 1", "Link 2", "Link 3"],
    },
    { title: "Accounts", src: User, gap: true },
    {
      title: "Schedule",
      src: Calendar,
      dropdown: true,
      subMenu: ["Link 1", "Link 2", "Link 3"],
    },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files", src: Folder, gap: true },
    {
      title: "Setting",
      src: Setting,
    },
  ]);

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          onClick={() => setOpen(!open)}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <SubMenu key={index} data={Menu} open={open} />
        ))}
      </ul>
    </div>
  );
};
export default SideNavBar;
