import { GithubIcon, InstagramIcon, TwitterIcon } from "./assets/icons/icons"

const Contact = () => {
  return (
    <div className="flex items-center">
        <span className="dark:text-slate-200 text-black">Contact</span>
        <a href="http://twitter.com">
          <TwitterIcon className={"w-9 p-1"}/>
        </a>
        <a href="http://twitter.com">
          <GithubIcon className={"w-10 p-1 dark:text-white"}/>
        </a>
        <a href="http://twitter.com">
          <InstagramIcon className={"w-10 p-1"}/>
        </a>
  </div>
  )
}

export default Contact