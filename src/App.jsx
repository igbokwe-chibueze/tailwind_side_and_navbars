import { useState } from 'react';  // Importing the 'useState' hook from React.
import { logo } from "./assets/images";

import { Menulist, Menulist2 } from "./components"


const App = () => {
  // Define a state variable 'toggle' and a function 'setToggle' to update it, initialized with 'false'.
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <div>
      <div className="grid">
        {/* switcher goes here*/}

        <main className="px-6 py-6 bg-gray-100">
          <header className="mt-2">
            <h2 className="text-gray-700 text-6xl font-semibold leading-none tracking-wider">Navbars</h2>
          </header>

          {/* All Cards */}
          <div>

            <div className="mt-8 grid gap-10">
              
              {/* Card One */}
              <div className="card grid md:grid-cols-8">
                <h4 className="mb-2 font-bold text-gray-700 md:col-span-8">Nav One</h4>
                {/* Card Nav */}
                <nav className="md:col-span-1 bg-gray-900">
                  {/* Navbar area */}
                  <div className="p-4 flex justify-between items-center md:justify-end md:border-b-2 border-b-gray-400">
                    <a href='#'>
                      <img
                        src={logo}
                        alt='logo'
                        className="h-8"
                      />
                    </a>
                    <div className="cursor-pointer md:hidden">
                      <button type="button"
                        onClick={() => setToggle(!toggle)}  // Toggle the 'toggle' state when the icon is clicked.
                        className="block p-1 text-gray-400 rounded hover:text-white hover:bg-gray-800 hover:rounded-lg transition-all duration-300 ease-linear focus:bg-gray-800"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          {toggle ? (
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
                  {/* Menu area */}
                  <ul 
                    className={`${
                      !toggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
                    } md:block my-2 mx-2 text-white`}
                  >
                    <Menulist/>
                  </ul>
                </nav>
                {/* Card Body */}
                <div className="bg-gray-300 md:col-span-7 h-36 md:h-auto">
                </div>
              </div>

              <div className='card grid'>
                <nav className='p-2 bg-gray-900 md:flex md:justify-between md:items-center'>
                  <div className=' mr-2 flex justify-between items-center'>
                    <a href='#'>
                      <img
                        src={logo}
                        alt='logo'
                        className="h-8"
                      />
                    </a>
                    <div className="cursor-pointer md:hidden">
                      <button type="button"
                        onClick={() => setToggle2(!toggle2)}  // Toggle the 'toggle' state when the icon is clicked.
                        className="block p-1 text-gray-400 rounded hover:text-white hover:bg-gray-800 hover:rounded-lg transition-all duration-300 ease-linear focus:bg-gray-800"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          {toggle2 ? (
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
                  {/* Menu area */}
                  <ul 
                    className={`${
                      !toggle2 ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
                    } md:flex my-2 text-white`}
                  >
                    <Menulist2/>
                  </ul>
                </nav>
                {/* Card Body */}
                <div className="bg-gray-300 h-36">
                </div>
              </div>
            </div>
          </div>

        </main>

      </div>
    </div>
  )
}

export default App