import { useState } from 'react';  // Importing the 'useState' hook from React.
import { logo } from "./assets/images";

import { Menulist, Menulist2,  Menulist3, Menulist4, ProfileList, ProfileList2, SearchBar} from "./components"


const App = () => {
  // Define a state variable 'toggle' and a function 'setToggle' to update it, initialized with 'false'.
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);

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
                  <div 
                    className={`${
                      !toggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
                    } md:block my-2 mx-2`}
                  >
                    <Menulist/>
                  </div>
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
                    } md:flex my-2`}
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
                      {/* Hamburger */}
                      <div className="md:hidden">
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
                      {/* Logo & Menu area (Large Screens): Shows on Large screens only */}
                      <div className='hidden md:flex items-center'>
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
                      {/* <button type="button" className='notificationBtn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                      </button> */}
                      <ProfileList/>
                    </div>
                  </div>

                  {/* Menu area (Mobile): Shows on mobile screens only */}
                  <div 
                    className={`${
                      !toggle3 ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
                    } md:hidden my-2`}
                  >
                    <Menulist3/>
                  </div>
                </nav>
                {/* Card Body */}
                <div className="bg-gray-300 h-36">
                </div>
              </div>


              {/* Card Four */}
              <div className='card grid'>
                <h4 className="mb-2 font-bold text-gray-700">Nav Four</h4>
                {/* Card Nav */}
                <nav className='bg-gray-800 '>
                  <div className='flex justify-between items-center m-2 md:p-2'>
                    {/* Hamburger, Logo & Menu */}
                    <div className='md:flex md:items-center'>
                      {/* Hamburger & Logo */}
                      <div className="flex justify-between items-center space-x-2 md:hidden">
                        {/* Hamburger */}
                        <button type="button"
                          onClick={() => setToggle4(!toggle4)}  // Toggle the 'toggle' state when the icon is clicked.
                          className="hamburgerBtn"
                        >
                          {/* Hamburger svg & close svg*/}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            {toggle4 ? (
                              // Render the first path(close) when toggle is true
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                              // Render the second path(Hamburger) when toggle is false
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            )}
                          </svg>
                        </button>
                        {/* Logo */}
                        <a href='#'>
                          <img src={logo} alt='logo' className="h-6"/>
                        </a>
                      </div>
                      {/* Logo & Menu area (Large Screens): Shows on Large screens only */}
                      <div className='hidden md:flex items-center'>
                        <a href='#'>
                          <img src={logo} alt='logo' className="h-6"/>
                        </a>
                        <Menulist3/>
                      </div>
                    </div>
                    
                    {/* New Job Btn, Profile & Notification Btn */}
                    <div className='flex items-center space-x-2'>
                      {/* New Job Btn */}
                      <button type="button" className='addBtn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>New Job</span>
                      </button>
                      {/* Notification Btn & Profile */}
                      <div className='hidden md:flex items-center space-x-2'>
                        {/* Notification Btn */}
                        {/* <button type="button" className='notificationBtn'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                          </svg>
                        </button> */}
                        {/* Profile*/}
                        <ProfileList/>
                      </div>
                    </div>
                  </div>

                  {/* Menu area (Mobile): Shows on mobile screens only */}
                  <div 
                    className={`${
                      !toggle4 ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
                    } md:hidden`}
                  >
                    <div className='px-2'>
                      <Menulist3/>
                    </div>
                    <div>
                      <ProfileList2/>
                    </div>
                  </div>
                </nav>
                {/* Card Body */}
                <div className="bg-gray-300 h-36">
                </div>
              </div>


              {/* Card Five */}
              <div className='card grid'>
                <h4 className="mb-2 font-bold text-gray-700">Nav Five</h4>
                {/* Card Nav */}
                <nav className='bg-gray-800 '>
                  <div className='flex justify-between items-center m-2 md:p-2'>
                    {/* Logo & Menu */}
                    <div className='md:flex md:items-center'>
                      {/* Logo */}
                      <a href='#'>
                        <img src={logo} alt='logo' className="h-6"/>
                      </a>
                      {/* Menu area (Large Screens): Shows on Large screens only */}
                      <div className='hidden md:flex items-center'>
                        <Menulist3/>
                      </div>
                    </div>
                    
                    {/* Profile, Hamburger & Notification Btn */}
                    <div className='flex items-center space-x-2'>
                      {/* Hamburger */}
                      <div className='md:hidden'>
                        <button type="button"
                          onClick={() => setToggle5(!toggle5)}  // Toggle the 'toggle' state when the icon is clicked.
                          className="hamburgerBtn"
                        >
                          {/* Hamburger svg & close svg*/}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            {toggle5 ? (
                              // Render the first path(close) when toggle is true
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                              // Render the second path(Hamburger) when toggle is false
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            )}
                          </svg>
                        </button>
                      </div>                     
                      {/* Notification Btn & Profile */}
                      <div className='hidden md:flex items-center space-x-2'>
                        {/* Notification Btn. 
                            I have now moved this into "profileList" component
                        */}
                        {/* <button type="button" className='notificationBtn'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                          </svg>
                        </button> */}
                        {/* Profile*/}
                        <ProfileList/>
                      </div>
                    </div>
                  </div>

                  {/* Menu area & Profile (Mobile): Shows on mobile screens only */}
                  <div 
                    className={`${
                      !toggle5 ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
                    } md:hidden`}
                  >
                    <div className='px-2'>
                      <Menulist3/>
                    </div>
                    <div>
                      <ProfileList2/>
                    </div>
                  </div>
                </nav>
                {/* Card Body */}
                <div className="bg-gray-300 h-36">
                </div>
              </div>


              {/* Card Six */}
              <div className='card grid'>
                <h4 className="mb-2 font-bold text-gray-700">Nav Six</h4>
                {/* Card Nav */}
                <nav className='bg-gray-800 '>
                  <div className='flex justify-between items-center m-2 md:p-2'>
                    {/* Logo & Menu */}
                    <div className='md:flex md:items-center'>
                      {/* Logo */}
                      <a href='#'>
                        <img src={logo} alt='logo' className="h-6"/>
                      </a>
                      {/* Menu area (Large Screens): Shows on Large screens only */}
                      <div className='hidden md:flex items-center'>
                        <Menulist3/>
                      </div>
                    </div>
                    
                    {/* Search Bar(Mobile): Shows on mobile screens only */}  
                    <div className='grow ml-3 mr-2 md:hidden'>
                      <SearchBar/>
                    </div>
                    
                    {/* Profile, Hamburger & Notification Btn */}
                    <div className='flex items-center space-x-2'>
                      {/* Search Bar(Large Screens): Shows on Large screens only */}
                      {/* I dont know why using "w-80" in conjuction with "block" 
                        makes the searchbar longer than when using "w-full,
                        but it makes the searchbar look better.
                      */}
                      <div className='hidden md:block md:w-80 mx-2'>
                        <SearchBar/>
                      </div>
                    
                      {/* Hamburger */}
                      <div className='md:hidden'>
                        <button type="button"
                          onClick={() => setToggle6(!toggle6)}  // Toggle the 'toggle' state when the icon is clicked.
                          className="hamburgerBtn"
                        >
                          {/* Hamburger svg & close svg*/}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            {toggle6 ? (
                              // Render the first path(close) when toggle is true
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                              // Render the second path(Hamburger) when toggle is false
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            )}
                          </svg>
                        </button>
                      </div>
                      {/* Notification Btn & Profile */}
                      <div className='hidden md:flex items-center space-x-2'>
                        {/* Notification Btn. 
                            I have now moved this into "profileList" component
                        */}
                        {/* <button type="button" className='notificationBtn'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                          </svg>
                        </button> */}
                        {/* Profile*/}
                        <ProfileList/>
                      </div>
                    </div>
                  </div>

                  {/* Menu area & Profile (Mobile): Shows on mobile screens only */}
                  <div 
                    className={`${
                      !toggle6 ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
                    } md:hidden`}
                  >
                    <div className='px-2'>
                      <Menulist3/>
                    </div>
                    <div>
                      <ProfileList2/>
                    </div>
                  </div>
                </nav>
                {/* Card Body */}
                <div className="bg-gray-300 h-36">
                </div>
              </div>


              {/* Card Seven */}
              <div className='card grid'>
                <h4 className="mb-2 font-bold text-gray-700">Nav Seven</h4>
                {/* Card Nav */}
                <nav className='bg-gray-800 '>
                  <div className='flex justify-between items-center m-2 md:p-2'>
                    {/* Logo */}
                    <a href='#'>
                        <img src={logo} alt='logo' className="h-6"/>
                      </a>
                    
                    {/* Search Bar(Mobile): Shows on mobile screens only */}  
                    <div className='grow md:grow-0 md:w-1/3 mx-3'>
                      <SearchBar/>
                    </div>
                    
                    {/* Profile, Hamburger & Notification Btn */}
                    <div className='flex items-center space-x-2'>
                      {/* Search Bar(Large Screens): Shows on Large screens only */}  
                      {/* <div className='hidden md:flex mx-3'>
                        <SearchBar/>
                      </div> */}
                    
                      {/* Hamburger */}
                      <div className='md:hidden'>
                        <button type="button"
                          onClick={() => setToggle7(!toggle7)}  // Toggle the 'toggle' state when the icon is clicked.
                          className="hamburgerBtn"
                        >
                          {/* Hamburger svg & close svg*/}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            {toggle7 ? (
                              // Render the first path(close) when toggle is true
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                              // Render the second path(Hamburger) when toggle is false
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            )}
                          </svg>
                        </button>
                      </div>
                      {/* Notification Btn & Profile */}
                      <div className='hidden md:flex items-center space-x-2'>
                        {/* Notification Btn. 
                            I have now moved this into "profileList" component
                        */}
                        {/* <button type="button" className='notificationBtn'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                          </svg>
                        </button> */}
                        {/* Profile*/}
                        <ProfileList/>
                      </div>
                    </div>
                  </div>

                  {/* Menu area (Large Screens): Shows on Large screens only */}
                  <div className='hidden md:flex items-center mb-2 pt-2 mx-4 border-t border-gray-700'>
                    <Menulist4/>
                  </div>

                  {/* Menu area & Profile (Mobile): Shows on mobile screens only */}
                  <div 
                    className={`${
                      !toggle7 ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
                    } md:hidden`}
                  >
                    <div className='px-2'>
                      <Menulist/>
                    </div>
                    <div>
                      <ProfileList2/>
                    </div>
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