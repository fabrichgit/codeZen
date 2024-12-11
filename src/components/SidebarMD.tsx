import { Link, useLocation } from "react-router-dom"
import { IoLogoMarkdown } from "react-icons/io5";
import { MdOutlineEditNote } from "react-icons/md";
import { LuLibrary } from "react-icons/lu";
import { SiCodeceptjs } from "react-icons/si"
import { VscRunAll } from "react-icons/vsc";
import { FaCodepen } from "react-icons/fa";

function SidebarMD() {

    const {pathname} = useLocation()

  return (
    <div className="flex flex-col items-center w-max md:min-w-60 h-full overflow-hidden border-r border-neutral-600 rounded">
         {
            pathname.includes("/markdown-editor") ?
            <>
            <a className="flex items-center w-full px-5 py-3 mt-3" href="#">
                <IoLogoMarkdown/>
                <span className="ml-2 text-sm font-bold hidden md:block">Markdown</span>
            </a>
            <div className="w-full px-2">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                    <Link to="/markdown-editor/library" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                        <LuLibrary/>
                        <span className="ml-2 text-sm font-medium hidden md:block">Library</span>
                    </Link>
                    <Link to="/markdown-editor/editor" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                        <MdOutlineEditNote/>
                        <span className="ml-2 text-sm font-medium hidden md:block">Editor</span>
                    </Link>
                </div>
            </div>
            </>
            :
            <>
            <a className="flex items-center w-full px-5 py-3 mt-3" href="#">  
                <SiCodeceptjs/>
                <span className="ml-2 text-sm font-bold hidden md:block">JS</span>
            </a>
            <div className="w-full px-2">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                    <Link to="/js-playground/training" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                        <FaCodepen/>
                        <span className="ml-2 text-sm font-medium hidden md:block">Training</span>
                    </Link>
                    <Link to="/js-playground/console" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                        <VscRunAll/>
                        <span className="ml-2 text-sm font-medium hidden md:block">Console</span>
                    </Link>
                </div>
            </div>
            </>
        }
     </div>
  )
}

export default SidebarMD
