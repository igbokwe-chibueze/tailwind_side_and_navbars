import { GithubIcon, InstagramIcon, TwitterIcon } from "./assets/icons/icons"
import { ContactBtn } from "./components"

const Contact = () => {
  return (
    <div className="flex items-center mb-10 p-4 gap-2">
        <span className="dark:text-slate-200 text-black">Contact</span>
        <ContactBtn 
          text="Github" 
          backgroundColor={"bg-gray-500"} 
          borderColor={"border-2 border-gray-400"} 
          textColor={"text-gray-900 dark:text-red-500"}
          onClick={() => window.open("https://github.com/igbokwe-chibueze")}
        >
          <GithubIcon className={"w-10 p-1"}/>
        </ContactBtn>

        <ContactBtn 
          text="Instagram" 
          backgroundColor={"bg-rose-700"} 
          borderColor={"border-2 border-gray-500"} 
          textColor={"text-black"}
          onClick={() => window.open("https://www.instagram.com/igbokwe_chibueze_o/")}
        >
          <InstagramIcon className={"w-10 p-1"}/>
        </ContactBtn>

        <ContactBtn 
          text="Twitter" 
          backgroundColor={"bg-blue-700"} 
          borderColor={"border-2 border-gray-500"} 
          textColor={"text-black"}
          onClick={() => window.open("https://twitter.com/chisteeldomain")}
        >
          <TwitterIcon className={"w-10 p-1"}/>
        </ContactBtn>
  </div>
  )
}

export default Contact