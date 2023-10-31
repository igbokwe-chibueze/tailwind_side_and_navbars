import { about, contact, home } from "../assets/icons"; 

const NavLinksList2 = () => {
  return (
    <div>
      <ul className="md:Block text-white">
        <li className="font-bold py-1 rounded hover:bg-gray-700 dark:hover:bg-rose-700">
            <a href="#" className="flex justify-end flex-row-reverse">
              <span>Home</span>
              <img className="w-5 mr-2" src={home} alt="home" />
            </a>
        </li>
        <li className="py-1 rounded hover:bg-gray-700 dark:hover:bg-rose-700">
            <a href="#" className="flex justify-end flex-row-reverse">
              <span>About</span>
              <img className="w-5 mr-2" src={about} alt="about" />
            </a>
        </li>
        <li className="py-1 rounded hover:bg-gray-700 dark:hover:bg-rose-700">
            <a href="#" className="flex justify-end flex-row-reverse">
              <span>Contact</span>
              <img className="w-5 mr-2" src={contact} alt="contact" />
            </a>
        </li>
      </ul>
    </div>
  )
}

export default NavLinksList2