import { logo } from "./assets/images";
import { NavLinksList, NavLinksList2, Menu, Menu2, Menu3, Menu4, ProfileList, SearchBar, NavEight } from "./components";
import { motion } from "framer-motion";

//Slide in all the cards from the bottom of the screen
const cardVarients = {
    hidden: {
      y: '100vh'
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.6,
        type: 'tween', 
        duration: 1,
        staggerChildren: 0.5, // Ensures the children cards come in one after the other.
        when: "beforeChildren" //complete this animation before starting childrens animation.
      }
    }
}

//Controls how individual cards slides into view
const childrenVarients = {
    hidden: {
      y: '100vw'
    },
    visible: {
      y: 0,
      transition: {
        type: 'tween', 
        duration: 1,
      }
    }
}

const Navs = () => {
  return (
    <motion.div className="grid px-6 py-10 gap-10"
    variants={cardVarients}
    initial="hidden"
    animate="visible"
    >

        {/* Card One */}
        <motion.div className="card grid"
            variants={childrenVarients}
        >
            <h4 className="mb-2 font-bold text-gray-700 dark:text-slate-300"> Nav One</h4>
            <nav className="p-2 bg-gray-800 dark:bg-rose-800 flex justify-between items-center">
                {/* Logo */}
                <div>
                    <a href='#'>
                      <img
                        src={logo}
                        alt='logo'
                        className="h-6"
                      />
                    </a>
                </div>
                {/* NavLinks (Large Screens): Shows on Large screens only */}
                <div className='hidden md:flex md:items-center md:ml-8'>
                    <NavLinksList />
                </div>
                {/* Menu (Mobile): Shows on mobile screens only */}
                <div className="md:hidden">
                    <Menu />
                </div>

            </nav>

            {/* Card Body */}
            <div className="bg-gray-300 p-2 md:h-60">
                <span>
                    <span className="font-bold">Start</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum. <span className="font-bold">End</span>
                </span>
            </div>
        </motion.div>

        
        {/* Card Two */}
        <motion.div className="card grid"
            variants={childrenVarients}
        >
            <h4 className="mb-2 font-bold text-gray-700 dark:text-slate-300"> Nav Two</h4>
            <nav className="p-2 bg-gray-800 dark:bg-rose-800 flex justify-between items-center">
                {/* Menu, Logo & NavLinks */}
                <div className="md:flex md:items-center">
                    {/* Menu (Mobile): Shows on mobile screens only */}
                    <div className="md:hidden">
                        <Menu2 />
                    </div>
                    {/* Logo & NavLinks (Large Screens): Shows on Large screens only */}
                    <div className='hidden md:flex md:items-center md:ml-2'>
                        {/* Logo */}
                        <a href='#'>
                        <img
                            src={logo}
                            alt='logo'
                            className="h-6"
                        />
                        </a>
                        <NavLinksList />
                    </div>
                </div>
                {/* logo (Mobile): Shows on mobile screens only */}
                <div className='md:hidden'>
                    <a href='#'>
                    <img src={logo} alt='logo' className="h-6"/>
                    </a>
                </div>
                {/* Profile */}
                <div className='flex items-center space-x-2'>
                    <ProfileList/>
                </div>

            </nav>

            {/* Card Body */}
            <div className="bg-gray-300 p-2 md:h-60">
                <span>
                    <span className="font-bold">Start</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum. <span className="font-bold">End</span>
                </span>
            </div>
        </motion.div>

        
        {/* Card Three */}
        <motion.div className="card grid"
            variants={childrenVarients}
        >
            <h4 className="mb-2 font-bold text-gray-700 dark:text-slate-300"> Nav Three</h4>
            <nav className="p-2 bg-gray-800 dark:bg-rose-800 flex justify-between items-center">
                {/* Menu, Logo & NavLinks */}
                <div className="flex items-center">
                    {/* Menu (Mobile): Shows on mobile screens only */}
                    <div className="md:hidden">
                        <Menu3 />
                    </div>
                    {/* Logo */}
                    <div className='flex md:items-center md:ml-2'>
                        <a href='#'>
                        <img
                            src={logo}
                            alt='logo'
                            className="h-6"
                        />
                        </a>
                    </div>
                    {/* NavLinks (Large Screens): Shows on Large screens only */}
                    <div className="hidden md:flex">
                        <NavLinksList />
                    </div>
                </div>
                {/* New Job Btn & Profile */}
                <div className='flex items-center space-x-2'>
                    {/* New Job Btn */}
                    <button type="button" className='addBtn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>New Job</span>
                    </button>
                    {/* Profile */}
                    <div className="hidden md:flex">
                        <ProfileList/>
                    </div>
                </div>
            </nav>

            {/* Card Body */}
            <div className="bg-gray-300 p-2 h-96 md:h-60">
                <span>
                    <span className="font-bold">Start</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum. <span className="font-bold">End</span>
                </span>
            </div>
        </motion.div>


        {/* Card Four */}
        <motion.div className="card grid"
            variants={childrenVarients}
        >
            <h4 className="mb-2 font-bold text-gray-700 dark:text-slate-300"> Nav Four</h4>
            <nav className="p-2 bg-gray-800 dark:bg-rose-800 flex justify-between items-center">
                {/* Logo & NavLinks */}
                <div className="flex items-center">
                    {/* Logo */}
                    <div className='flex md:items-center md:ml-2'>
                        <a href='#'>
                        <img
                            src={logo}
                            alt='logo'
                            className="h-6"
                        />
                        </a>
                    </div>
                    {/* NavLinks (Large Screens): Shows on Large screens only */}
                    <div className="hidden md:flex">
                        <NavLinksList />
                    </div>
                </div>
                {/* Menu & Profile */}
                <div className='flex items-center space-x-2'>
                    {/* Menu (Mobile): Shows on mobile screens only */}
                    <div className="md:hidden">
                        <Menu4 />
                    </div>
                    {/* Profile */}
                    <div className="hidden md:flex">
                        <ProfileList/>
                    </div>
                </div>
            </nav>

            {/* Card Body */}
            <div className="bg-gray-300 p-2 h-96 md:h-60">
                <span>
                    <span className="font-bold">Start</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum. <span className="font-bold">End</span>
                </span>
            </div>
        </motion.div>


        {/* Card Five */}
        <motion.div className="card grid"
            variants={childrenVarients}
        >
            <h4 className="mb-2 font-bold text-gray-700 dark:text-slate-300"> Nav Five</h4>
            <nav className="p-2 bg-gray-800 dark:bg-rose-800 flex justify-between items-center">
                {/* Logo & NavLinks */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className='flex md:items-center md:ml-2'>
                        <a href='#'>
                        <img
                            src={logo}
                            alt='logo'
                            className="h-6"
                        />
                        </a>
                    </div>
                    {/* NavLinks (Large Screens): Shows on Large screens only */}
                    <div className="hidden md:flex">
                        <NavLinksList />
                    </div>
                </div>

                {/* Search Bar(Mobile): Shows on mobile screens only */}  
                <div className='grow ml-4 md:hidden'>
                    <SearchBar/>
                </div>

                {/* Search bar, Menu & Profile */}
                <div className='flex items-center ml-4'>
                    {/* Search Bar(Large Screens): Shows on Large screens only */}
                    <div className='hidden md:block md:w-grow md:mr-2'>
                        <SearchBar/>
                    </div>
                    {/* Menu (Mobile): Shows on mobile screens only */}
                    <div className="md:hidden">
                        <Menu4 />
                    </div>
                    {/* Profile */}
                    <div className="hidden md:flex">
                        <ProfileList/>
                    </div>
                </div>
            </nav>

            {/* Card Body */}
            <div className="bg-gray-300 p-2 h-96 md:h-60">
                <span>
                    <span className="font-bold">Start</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum. <span className="font-bold">End</span>
                </span>
            </div>
        </motion.div>


        {/* Card Six */}
        <motion.div className="card grid"
            variants={childrenVarients}
        >
            <h4 className="mb-2 font-bold text-gray-700 dark:text-slate-300"> Nav Six</h4>
            <nav className="p-2 bg-gray-800 dark:bg-rose-800">
                {/* Logo, Search, Menu & Profile */}
                <div className="p-2 flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <a href='#'>
                        <img
                            src={logo}
                            alt='logo'
                            className="h-6"
                        />
                        </a>
                    </div>

                    {/* Search Bar */}  
                    <div className='grow ml-4 mr-2 md:grow-0 md:w-3/5'>
                        <SearchBar/>
                    </div>

                    {/* Menu & Profile */}
                    <div className='flex items-center space-x-2'>
                        {/* Menu (Mobile): Shows on mobile screens only */}
                        <div className="md:hidden">
                            <Menu4 />
                        </div>
                        {/* Profile */}
                        <div className="hidden md:flex">
                            <ProfileList/>
                        </div>
                    </div>
                </div>

                {/* NavLinks (Large Screens): Shows on Large screens only */}
                <div className="hidden md:flex mb-2 pt-2 ml:2 border-t border-gray-700 dark:border-rose-700">
                    <NavLinksList />
                </div>

            </nav>

            {/* Card Body */}
            <div className="bg-gray-300 p-2 h-96 md:h-60">
                <span>
                    <span className="font-bold">Start</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum. <span className="font-bold">End</span>
                </span>
            </div>
        </motion.div>


        {/* Card Seven */}
        <motion.div className="card grid md:grid-cols-8"
            variants={childrenVarients}
        >
            <h4 className="mb-2 font-bold text-gray-700 dark:text-slate-300 md:col-span-8"> Nav Seven</h4>
            <nav className="p-2 bg-gray-800 dark:bg-rose-800 flex justify-between items-center md:block md:col-span-1">
                {/* Logo */}
                <div>
                    <a href='#'>
                      <img
                        src={logo}
                        alt='logo'
                        className="h-6"
                      />
                    </a>
                </div>
                {/* NavLinks (Large Screens): Shows on Large screens only */}
                <div className='hidden md:block md:mt-4'>
                    <NavLinksList2 />
                </div>
                {/* Menu (Mobile): Shows on mobile screens only */}
                <div className="md:hidden">
                    <Menu />
                </div>

            </nav>

            {/* Card Body */}
            <div className="bg-gray-300 p-2 md:h-60 md:col-span-7">
                <span>
                    <span className="font-bold">Start</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum. <span className="font-bold">End</span>
                </span>
            </div>
        </motion.div>


        {/* Card Eight */}
        <motion.div className="card grid"
            variants={childrenVarients}
        >
            <h4 className="mb-2 font-bold text-gray-700 dark:text-slate-300"> Nav Eight</h4>
            <nav className="h-screen flex justify-center items-center bg-gray-900 dark:bg-white">
                <NavEight />
            </nav>
        </motion.div>

    </motion.div>
  )
}

export default Navs