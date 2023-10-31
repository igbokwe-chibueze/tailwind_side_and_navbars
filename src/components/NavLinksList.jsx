import { about, contact, home } from "../assets/icons"; 

const NavLinksList = () => {
  return (
    <div>
      <ul className="md:flex text-white">
        <li className="font-bold py-1 rounded hover:bg-gray-700 dark:hover:bg-rose-700">
            <a href="#" className="px-4 flex justify-end">
              <span>Home</span>
              <img className="w-5 ml-2" src={home} alt="home" />
            </a>
        </li>
        <li className="py-1 rounded hover:bg-gray-700 dark:hover:bg-rose-700">
            <a href="#" className="px-4 flex justify-end">
              <span>About</span>
              <img className="w-5 ml-2" src={about} alt="about" />
            </a>
        </li>
        <li className="py-1 rounded hover:bg-gray-700 dark:hover:bg-rose-700">
            <a href="#" className="px-4 flex justify-end">
              <span>Contact</span>
              <img className="w-5 ml-2" src={contact} alt="contact" />
            </a>
        </li>
      </ul>
    </div>
  )
}

export default NavLinksList