import { about, burger, close, contact, home } from "./assets/icons";  // Importing various icons from a file.
import { useState } from 'react';  // Importing the 'useState' hook from React.


const App = () => {
  // Define a state variable 'toggle' and a function 'setToggle' to update it, initialized with 'false'.
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="grid ">
        {/* switcher goes here*/}

        <main className="px-6 py-6 bg-gray-200">
          <header className="mt-4">
              <h2 className="text-gray-700 text-6xl font-semibold leading-none tracking-wider">Navbars</h2>
          </header>

          {/* All Cards */}
          <div>
            <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>

            <div className="mt-8 grid gap-10">
              
              {/* Card One */}
              <div className="card grid md:grid-cols-6 hover:shadow-lg">
                <div className="md:col-span-1">
                  {/* Navbar area */}
                  <div className="p-4 flex justify-between items-center bg-gray-800">
                    <span className="font-bold text-white">Nav</span>
                    <div className="cursor-pointer md:hidden" id="burger">
                      <img
                        src={toggle ? close : burger}  // Conditionally render 'close' or 'burger' icon based on 'toggle' state.
                        alt="burger"
                        className="w-6"
                        onClick={() => setToggle(!toggle)}  // Toggle the 'toggle' state when the icon is clicked.
                      />
                    </div>
                  </div>
                  {/* Menu area */}
                  <menu>
                    
                  </menu>

                </div>
                <div className="md:col-span-5">
                  <span className="bg-blue-200 block text-gray-500 text-sm">body</span>
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