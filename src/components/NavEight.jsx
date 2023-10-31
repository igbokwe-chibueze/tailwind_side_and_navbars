import { useState } from "react";
import { HomeIcon, ContactIcon, PhotosIcon, SettingsIcon } from "../assets/icons/icons"

const NavEight = () => {
  const links = [
    { label: 'About', imgURL: <HomeIcon />, href: '/', anim: "translate-x-0" },
    { label: 'Contact', imgURL: <ContactIcon/>, href: '/', anim: "translate-x-16" },
    { label: 'Photos', imgURL: <PhotosIcon />, href: '/', anim: "translate-x-32" },
    { label: 'Settings', imgURL: <SettingsIcon />, href: '/', anim: "translate-x-48" },
  ];

  const [active, setActive] = useState(0);
  
  return (
    <div className="bg-white dark:bg-gray-900 h-auto px-6 rounded-t-xl">
        <ul className="flex relative">
          <span
            className={`bg-rose-600 duration-500 ${links[active].anim} border-4 border-gray-900 dark:border-white h-16 w-16 absolute
          -top-5 rounded-full`}
          >
            <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
            rounded-tr-[11px] shadow-myShadow1Dark dark:shadow-myShadow1White"
            //style={{ boxShadow: `4.1px -5px 0 0  rgb(17,24,39)` }}
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
            rounded-tl-[11px] shadow-myShadow2Dark dark:shadow-myShadow2White"
            //style={{ boxShadow: `-4.1px -5px 0 0  rgb(17,24,39)` }}
            ></span>
            </span>
          {links.map((menu, i) => (
            <li key={i} className="w-16 z-10">
              <a
                className="flex flex-col items-center pt-4 dark:text-white"
                onClick={() => setActive(i)}
              >
                <span className={`label-xl w-8 cursor-pointer duration-500 ${
                    i === active && "-mt-5 text-white dark:text-black"
                  }`}>{menu.imgURL}</span>
                <span
                  className={` ${
                    active === i
                      ? "translate-y-4 duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default NavEight