import { profile } from "../assets/images";
import { useState, useEffect } from 'react';  // Importing the 'useState' and 'useEffect' hooks from React.

const ProfileList = () => {

    // Define a state variable 'profileToggle' and a function 'setProfileToggle' to manage the toggle state.
    const [profileToggle, setProfileToggle] = useState(false);

    // This "useEffect" is just so i can close the overlay using "Escape" key on keyboard.
    // Use the 'useEffect' hook to add an event listener for the "Escape" key press.
    useEffect(() => {
        // Define a function 'handleKeyPress' to handle the key press event.
        const handleKeyPress = (e) => {
            if (e.key === "Escape") {
                // If the "Escape" key is pressed, set 'profileToggle' to 'false' to close the profile list.
                setProfileToggle(false);
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
        <div className='relative'>
            {/* Profile button */}
            <button type="button"
                onClick={() => setProfileToggle(!profileToggle)} // Toggle the 'toggle' state when the btn is clicked.
                //"z-10" makes the profile btn display above the overlay btn.
                //"relative" is only used here so z-10 could work.
                className='relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-400 focus:outline-none focus:border-white hover:border-white'
            >
                <img className='object-cover' src={profile} alt="profile" />
            </button>
            
            {/* OverlayBtn: Closes the profile list when clicking outside of the list. */}
            <div 
                className={`${
                    !profileToggle ? "hidden" : "block"  // Conditionally display the profile based on 'toggle' state.
                } `}
            >
                <button type="button"
                    onClick={() => setProfileToggle(false)}
                    tabIndex={-1} // Ensures this button is not accessible by keyboard
                    className="fixed inset-0 bg-black opacity-30 cursor-default"
                >
                </button> 
            </div>
            
            {/* Profile List area */}
            <ul 
                className={`${
                    !profileToggle ? "hidden" : "block"  // Conditionally display the profile based on 'toggle' state.
                } absolute right-0 mt-2 w-48 py-1 bg-white rounded-lg text-gray-800 shadow-lg overflow-hidden`}
            >
                <li className='px-4 py-2 hover:bg-gray-300'>
                    <a href="#">Profile</a>
                </li>
                <li className='px-4 py-2 hover:bg-gray-300'>
                    <a href="#">Settings</a>
                </li>
                <li className='px-4 py-2 hover:bg-gray-300'>
                    <a href="#">Signout</a>
                </li>
            </ul>
        </div>
    )
}

export default ProfileList;
