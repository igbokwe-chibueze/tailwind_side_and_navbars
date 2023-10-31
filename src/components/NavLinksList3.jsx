//This is the navlink list i am using for the main navbar.
import { logo } from "../assets/images";

const NavLinksList3 = () => {
  return (
    <div>
      <ul className="flex justify-between items-center text-gray-700 dark:text-slate-300 text-lg">
        <li className="rounded hover:bg-gray-700 dark:hover:bg-rose-700">
            <a href="#" className="flex justify-between items-center">
              <span className="px-10 text-yellow-600 font-bold">Home</span>
              <div className="w-2 h-2 rounded-full bg-gray-700 dark:bg-slate-100"></div>
            </a>
        </li>
        <li className="rounded hover:bg-gray-700 dark:hover:bg-rose-700">
          <a href="" className="flex justify-between items-center">
            <span className="px-10">Navbars</span>
            <div className="w-2 h-2 rounded-full bg-gray-700 dark:bg-slate-300"></div>
          </a>
        </li>
        <li>
          <a href="" className="flex justify-between items-center font-bold">
            <img src={logo} alt='logo' className="h-10 px-10"
          />
            <div className="w-2 h-2 rounded-full bg-gray-700 dark:bg-slate-300"></div>
          </a>
        </li>
        <li className="rounded hover:bg-gray-700 dark:hover:bg-rose-700">
          <a href="" className="flex justify-between items-center">
            <span className="px-10">Sidebars</span>
            <div className="w-2 h-2 rounded-full bg-gray-700 dark:bg-slate-300"></div>
          </a>
        </li>
        <li className="rounded hover:bg-gray-700 dark:hover:bg-rose-700">
          <a href="" className="">
            <span className="px-10">Contacts</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavLinksList3