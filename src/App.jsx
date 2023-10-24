import { useState } from 'react';  // Importing the 'useState' hook from React.
import { logo } from "./assets/images";

import { Menulist, Menulist2,  Menulist3, ProfileList} from "./components"


const App = () => {
  // Define a state variable 'toggle' and a function 'setToggle' to update it, initialized with 'false'.
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

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
                <nav className="md:col-span-1 bg-gray-800">
                  {/* Navbar area */}
                  <div className="p-4 flex justify-between items-center md:justify-end md:border-b-2 border-b-gray-400">
                    <a href='#'>
                      <img
                        src={logo}
                        alt='logo'
                        className="h-6"
                      />
                    </a>
                    <div className="cursor-pointer md:hidden">
                      <button type="button"
                        onClick={() => setToggle(!toggle)}  // Toggle the 'toggle' state when the icon is clicked.
                        className="hamburgerBtn"
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


              {/* Card Two */}
              <div className='card grid'>
                <h4 className="mb-2 font-bold text-gray-700">Nav Two</h4>
                {/* Card Nav */}
                <nav className='p-2 bg-gray-800 md:flex md:justify-between md:items-center'>
                  {/* Hamburger & Logo */}
                  <div className='mr-2 flex justify-between items-center'>
                    <a href='#'>
                      <img
                        src={logo}
                        alt='logo'
                        className="h-6"
                      />
                    </a>
                    {/* Hamburger */}
                    <div className="cursor-pointer md:hidden">
                      <button type="button"
                        onClick={() => setToggle2(!toggle2)}  // Toggle the 'toggle' state when the icon is clicked.
                        className="hamburgerBtn"
                      >
                        {/* Hamburger svg & close svg*/}
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
                  <div 
                    className={`${
                      !toggle2 ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
                    } md:flex my-2 text-white`}
                  >
                    <Menulist2/>
                  </div>
                </nav>
                {/* Card Body */}
                <div className="bg-gray-300 h-36">
                </div>
              </div>


              {/* Card Three */}
              <div className='card grid'>
                <h4 className="mb-2 font-bold text-gray-700">Nav Three</h4>
                {/* Card Nav */}
                <nav className='p-2 bg-gray-800 '>
                  <div className='flex justify-between items-center md:p-2'>
                    {/* Hamburger, Logo & Menu */}
                    <div className='md:flex md:items-center'>
                      {/* Hamburger & Logo */}
                      <div className='mr-2 flex justify-between items-center'>
                        {/* Hamburger */}
                        <div className="cursor-pointer md:hidden mr-2">
                          <button type="button"
                            onClick={() => setToggle3(!toggle3)}  // Toggle the 'toggle' state when the icon is clicked.
                            className="hamburgerBtn"
                          >
                            {/* Hamburger svg & close svg*/}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              {toggle3 ? (
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
                      {/* Logo & Menu area (Large Screens): Shows on Large screens only */}
                      <div className='hidden md:flex items-center text-white'>
                        <a href='#'>
                          <img src={logo} alt='logo' className="h-6"/>
                        </a>
                        <Menulist3/>
                      </div>
                    </div>

                    {/* logo (Mobile): Shows on mobile screens only */}
                    <div className='md:hidden'>
                      <a href='#'>
                        <img src={logo} alt='logo' className="h-6"/>
                      </a>
                    </div>
                    
                    {/* Profile & Notification Btn */}
                    <div className='flex items-center space-x-2'>
                      <button type="button" className='notificationBtn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                      </button>
                      <ProfileList/>
                    </div>
                  </div>

                  {/* Menu area (Mobile): Shows on mobile screens only */}
                  <div 
                    className={`${
                      !toggle3 ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
                    } md:hidden my-2 text-white`}
                  >
                    <Menulist3/>
                  </div>
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