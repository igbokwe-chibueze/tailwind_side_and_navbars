import { about, contact, home } from "../assets/icons";  // Importing various icons from a file.

const Menulist3 = () => {
  return (
    <div>
      <ul className="md:flex space-y-1 md:space-y-0 md:space-x-4 text-white">
        {/*  
        Applying flex-row-reverse to anchor tags reverses child order, showing images before spans.
        justify reverses too, with justify-end now acting as justify-start and vice versa.
        Since the image now comes first "mr" is now used as against "ml" previously.

        */}
        <li className="bg-gray-900 font-bold py-1 rounded hover:bg-gray-700">
            <a href="#" className="px-2 flex flex-row-reverse justify-end focus:border-l-4 border-red-500 md:focus:border-0">
              <span>Home</span>
              <img className="w-5 mr-2" src={home} alt="home" />
            </a>
        </li>
        <li className="py-1 rounded hover:bg-gray-700">
            <a href="#" className="px-2 flex flex-row-reverse justify-end focus:border-l-4 border-red-500 md:focus:border-0">
              <span>About</span>
              <img className="w-5 mr-2" src={about} alt="about" />
            </a>
        </li>
        <li className="py-1 rounded hover:bg-gray-700">
            <a href="#" className="px-2 flex flex-row-reverse justify-end focus:border-l-4 border-red-500 md:focus:border-0">
              <span>Contact</span>
              <img className="w-5 mr-2" src={contact} alt="contact" />
            </a>
        </li>
      </ul>
    </div>

  )
}

export default Menulist3