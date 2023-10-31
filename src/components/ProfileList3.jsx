import { profile } from "../assets/images";

const ProfileList3 = () => {

    return (
        <div className='mt-2 border-t pl-2 border-gray-700'>
            {/* Profile Picture & Notification btn */}
            <div className="mx-1 mt-3 flex items-center justify-end">
                {/* Notification Btn */}
                <button type="button" className='notificationBtn mr-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                </button>
                {/* Profile Picture & Info */}
                <div className="flex items-center space-x-3">
                    {/* Info */}
                    <div className="grid">
                        <span className="font-semibold text-white">Amara Ayo</span>
                        <span className="font-semibold text-sm text-gray-400">amara@example.com</span>
                    </div>
                    {/* Profile Picture */}
                    <div
                        className='h-11 w-11 rounded-full overflow-hidden border-2 border-gray-400'
                    >
                        <img className='object-cover' src={profile} alt="profile" />
                    </div>
                </div>

            </div>
            
            {/* Profile List area */}
            <ul 
                className="my-2 space-y-1 text-right text-gray-400"
            >
                <li className='px-2 py-1 rounded hover:bg-gray-700 dark:hover:bg-rose-700 hover:text-white'>
                    <a href="#">Profile</a>
                </li>
                <li className='px-2 py-1 rounded hover:bg-gray-700 dark:hover:bg-rose-700 hover:text-white'>
                    <a href="#">Settings</a>
                </li>
                <li className='px-2 py-1 rounded hover:bg-gray-700 dark:hover:bg-rose-700 hover:text-white'>
                    <a href="#">Signout</a>
                </li>
            </ul>
        </div>
    )
}

export default ProfileList3;
