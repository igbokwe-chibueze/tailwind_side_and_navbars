import { navLinks } from "../constants";
import { useState, useEffect } from 'react';

const Menu2 = () => {
    
    // Define a state variable 'menuToggle' and a function 'setMenuToggle' to manage the toggle state.
    const [menuToggle, setMenuToggle] = useState(false);

    // This "useEffect" is just so i can close the overlay using "Escape" key on keyboard.
    // Use the 'useEffect' hook to add an event listener for the "Escape" key press.
    useEffect(() => {
        // Define a function 'handleKeyPress' to handle the key press event.
        const handleKeyPress = (e) => {
            if (e.key === "Escape") {
                // If the "Escape" key is pressed, set 'menuToggle' to 'false' to close the menu list.
                setMenuToggle(false);
            }
        };

        // Add the event listener to the window object to listen for keydown events.
        window.addEventListener("keydown", handleKeyPress);

        // Clean up the event listener when the component is unmounted.
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []); // The empty dependency array ensures this effect only runs once when the component is mounted.

  return (
    <div className="">
      <div className="flex items-center space-x-2">
        {/* Hamburger */}
        <div className='md:hidden'>
          <button type="button"
            onClick={() => setMenuToggle(!menuToggle)}  // Toggle the 'toggle' state when the icon is clicked.
            className="relative z-40 hamburgerBtn"
          >
            {/* Hamburger svg & close svg*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {menuToggle ? (
                // Render the first path(close) when toggle is true
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Render the second path(Hamburger) when toggle is false
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              )}
            </svg>
          </button>
        </div> 
      </div>

      {/* OverlayBtn: Closes the menu list when clicking outside of the list. */}
      <div 
        className={`${
            !menuToggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
        } `}
      >
        <button type="button"
            onClick={() => setMenuToggle(false)}
            tabIndex={-1} // Ensures this button is not accessible by keyboard
            className="fixed inset-0 z-20 bg-transparent h-screen w-screen cursor-default"
        >
        </button> 
      </div>

      {/* Menu List area */}
      <div 
        className={`${
              !menuToggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
          } absolute left-0 mt-4 w-full pt-2 pb-4 z-20 bg-gray-800 dark:bg-rose-800 opacity-95 shadow-lg 
          sm:w-1/2 sm:h-screen sm:mt-8 sm:top-0 sm:py-8 sm:shadow-2xl`} // On a real project, set "sm:mt-0"
      >
        <ul className="py-2">
          {navLinks.map((item) => (
            <li key={item.label} className="font-bold py-2 padding-x text-gray-400 hover:bg-gray-700 dark:hover:bg-rose-700 hover:text-white sm:py-2 sm:mt-2">
              {/*  
                Applying flex-row-reverse to anchor tags reverses child order, showing images before spans.
                justify reverses too, with justify-end now acting as justify-start and vice versa.
                Since the image now comes first "mr" is now used as against "ml" previously.

              */}
              <a
                href={item.href}
                onClick={() => setMenuToggle(false)}
                className="px-2 flex justify-end flex-row-reverse font-montserrat leading-normal"
              >
                <span>{item.label}</span>
                <img className="w-5 mr-2" src={item.imgURL} alt="about" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu2