import { Link } from "react-router-dom"
import {FaStar} from "react-icons/fa"
import { IoLogoMarkdown } from "react-icons/io5"
import { LuLibrary } from "react-icons/lu"

function Header() {
  return (
   <>
    <div className="bg-teal-600">
        <div className="mx-auto max-w-7xl py-2 text-sm px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
            <div className="flex flex-1 items-center lg:mr-3 lg:flex-none">
            <p className="ml-3 text-center font-medium text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="mr-2 hidden h-6 w-6 lg:inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z">
                </path>
                </svg>Thanks for the visite,
                <span className="font-semibold">your opinion</span> means a lot
            </p>
            </div>
            <div className="mt-2 w-full flex-shrink-0 lg:mt-0 lg:w-auto">
                <a className="flex gap-2 items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-teal-600 shadow-sm hover:bg-teal-50" target="_blank" href="https://github.com/tinkererPlayground/codeZen">
                    Give star <FaStar className="-translate-y-[2px]"/>
                </a>
            </div>
        </div>
        </div>
    </div>
    <header className="backdrop-filter backdrop-blur-lg border-b border-neutral-600">
        <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">CodeZen</Link>
            <div className="hidden md:flex space-x-6">
                <Link to="/js-playground/training" className="block py-2 px-4 text-sm hover:bg-white hover:bg-opacity-20 transition-colors duration-300">JS Playground</Link>
                <Link to="/markdown-editor/library" className="block py-2 px-4 text-sm hover:bg-white hover:bg-opacity-20 transition-colors duration-300">Markdown Editor</Link>
            </div>
            <div className="md:hidden flex space-x-2">
                <Link to="/js-playground/training" className="block py-2 px-4 text-sm rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors duration-300">
                    <LuLibrary/>
                </Link>
                <Link to="/markdown-editor/library" className="block py-2 px-4 rounded-lg text-sm hover:bg-white hover:bg-opacity-20 transition-colors duration-300">
                    <IoLogoMarkdown/>
                </Link>
            </div>
            </div>
        </nav>
    </header>
   </>
  )
}

export default Header
