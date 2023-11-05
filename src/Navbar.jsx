import { ThemeSwitcher } from "./components"
import { logo } from "./assets/images";
import { Menu5, NavLinksList3 } from "./components"
import { motion } from "framer-motion";
import { GithubIcon } from "./assets/icons/icons";

const navVarients = {
  hidden: {
    y: '-100vh'
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      type: 'tween', 
      duration: 1
    }
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

const Navbar = () => {
  return (

    <motion.nav className="fixed w-full p-2 z-40 shadow-lg backdrop-blur-3xl bg-gray-900/50"
      variants={navVarients}
      initial="hidden"
      animate="visible"
    >
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
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
          >
            <ThemeSwitcher />
          </motion.div>
          <Menu5 />
        </div>
      </div>

      
      <div className='hidden md:flex md:justify-evenly md:items-center md:py-4 md:px-10 md:mx-4'>
        <NavLinksList3 />
        <motion.button type="button" 
          onClick={() => window.open("https://github.com/igbokwe-chibueze/tailwind_side_and_navbars")} 
          variants={buttonVariants}
          whileHover="hover"
          className="flex items-center space-x-2 github_btn"
        >
          <GithubIcon className={"w-10"}/>
          <span>Github</span>
        </motion.button>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
        >
          <ThemeSwitcher />
        </motion.div>
      </div>
      
    </motion.nav>
    
  )
}

export default Navbar