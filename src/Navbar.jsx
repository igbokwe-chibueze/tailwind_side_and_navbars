import { ThemeSwitcher } from "./components"
import { logo } from "./assets/images";
import { Menu5, NavLinksList3 } from "./components"

const Navbar = () => {
  return (

    <nav className="fixed w-full p-2 z-40 shadow-lg backdrop-blur-3xl bg-gray-700/50">
      <div className="flex justify-between items-center px-6 md:hidden">
        <div>
          {/* Logo */}
          <a href='#'>
            <img
              src={logo}
              alt='logo'
              className="h-6"
            />
          </a>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <ThemeSwitcher />
          <Menu5 />
        </div>
      </div>

      
      <div className='hidden md:flex md:justify-evenly md:items-center md:py-4 md:px-10 md:mx-4'>
        <NavLinksList3 />
        <ThemeSwitcher />
      </div>
      
    </nav>
    
  )
}

export default Navbar