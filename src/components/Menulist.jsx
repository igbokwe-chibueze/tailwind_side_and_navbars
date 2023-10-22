import { about, contact, home } from "../assets/icons";  // Importing various icons from a file.

const Menulist = () => {
  return (
    <div>
        <li className="font-bold py-1 rounded hover:bg-gray-800">
            <a href="#" className="px-4 flex justify-end focus:border-r-4 border-red-500">
            <span>Home</span>
            <img className="w-5 ml-2" src={home} alt="home" />
            </a>
        </li>
        <li className="py-1 rounded hover:bg-gray-800">
            <a href="#" className="px-4 flex justify-end focus:border-r-4 border-red-500">
            <span>About</span>
            <img className="w-5 ml-2" src={about} alt="about" />
            </a>
        </li>
        <li className="py-1 rounded hover:bg-gray-800">
            <a href="#" className="px-4 flex justify-end focus:border-r-4 border-red-500">
            <span>Contact</span>
            <img className="w-5 ml-2" src={contact} alt="contact" />
            </a>
        </li>
    </div>

  )
}

export default Menulist