//This is the menu i am using for the main navbar

import { navLinks } from "../constants";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "../assets/icons/icons";

//Slides the menu in from the top of the screen and exist in reverse order.
const menuVariant1 = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      staggerChildren: 0.15, delayChildren: 0.4
    }
  },
  exit: {
    y: '-100vh',
    transition: {
      delay: 0.6, //Duration before retracting the menu
      type: 'tween',
      duration: 2, // speed at which the menu retracts
      staggerChildren: 0.15, staggerDirection: -1 
    },
  }
};

//Slides the menu in from the side of the screen and exist in reverse order.
const menuVariant2 = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'tween', 
      duration: 0.5,
      staggerChildren: 0.15, delayChildren: 0.4
    }
  },
  exit: {
    x: '100vw',
    transition: {
      delay: 0.6,
      type: 'tween',
      duration: 1,
      staggerChildren: 0.15, staggerDirection: -1 
    },
  }
};

//Controls how individual cards slides into view
const childrenVarients = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: 50,
    opacity: 0
  }
}
//Controls how individual cards slides into view
const childrenVarients2 = {
  hidden: {
    x: 50,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: -50,
    opacity: 0
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

const Menu5 = () => {
    
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
            className="relative z-50 hamburgerBtn"
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
      <AnimatePresence>
      {menuToggle && (
        <motion.div
          key="menu"
          variants={window.innerWidth > 639 ? menuVariant2 : menuVariant1} //sm in tailwind starts from 640px, so an screensize above 639(from 640 upwards) menuVariant2 is applied.
          initial="hidden"
          animate="visible"
          exit="exit" // Animate the menu out when it's closed
          // className={`absolute right-0 mt-4 w-full pt-2 pb-4 z-40 bg-gray-800 dark:bg-rose-800 opacity-95 shadow-lg 
          //   sm:w-1/2 sm:h-screen sm:mt-0 sm:top-0 sm:py-8 sm:shadow-2xl`}
          className={`${
                !menuToggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
            } absolute right-0 mt-4 w-full pt-2 pb-4 z-40 bg-gray-800 dark:bg-rose-800 opacity-95 shadow-lg 
            sm:w-1/2 sm:h-screen sm:mt-0 sm:top-0 sm:py-8 sm:shadow-2xl`}
        >
          <motion.ul 
            className="py-2">
            {navLinks.map((item) => (
              <li key={item.label} className="font-bold py-2 padding-x text-gray-400 hover:bg-gray-700 dark:hover:bg-rose-700 hover:text-white sm:py-2 sm:mt-2"
                
              >
                <motion.div
                  variants={window.innerWidth > 639 ? childrenVarients2 : childrenVarients}
                  whileHover={{scale: 1.1, originX: 1}}
                  whileTap={{ scale: 0.7 }}
                  transition={{type: 'spring', stiffness: 90}}
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuToggle(false)}
                    className="px-2 flex justify-end font-montserrat leading-normal"
                  >
                    <span>{item.label}</span>
                    <img className="w-5 ml-2" src={item.imgURL} alt="about" />
                  </a>
                </motion.div>
              </li>
              
            ))}
          </motion.ul>
          <div className="flex justify-end px-2 border-t border-gray-700 pt-2">
            <motion.button type="button" 
              onClick={() => window.open("https://github.com/igbokwe-chibueze/tailwind_side_and_navbars")} 
              variants={buttonVariants}
              whileHover="hover"
              className="flex items-center space-x-2 github_btn"
            >
              <GithubIcon className={"w-10"}/>
              <span>Github</span>
            </motion.button>
          </div>
        </motion.div>
      )}  
      </AnimatePresence>   
    </div>
  )
}

export default Menu5