import { Link, useLocation } from "react-router-dom"
import { IoLogoMarkdown } from "react-icons/io5";
import { MdOutlineEditNote } from "react-icons/md";
import { LuLibrary } from "react-icons/lu";
import { SiCodeceptjs } from "react-icons/si"

function SidebarMD() {

    const {pathname} = useLocation()

  return (
    <div className="flex flex-col items-center min-w-60 h-full overflow-hidden border-r border-neutral-600 rounded">
        <a className="flex items-center w-full px-5 py-3 mt-3" href="#">
        {
            pathname.includes("/markdown-editor") ?
            <>
            <IoLogoMarkdown/>
            <span className="ml-2 text-sm font-bold">Markdown</span>
            </>
            :
            <>
                <SiCodeceptjs/>
                <span className="ml-2 text-sm font-bold">JS</span>
            </>
        }
        </a>
        <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                <Link to="library" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                    <LuLibrary/>
                    <span className="ml-2 text-sm font-medium">Library</span>
                </Link>
                <Link to="editor" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                    <MdOutlineEditNote/>
                    <span className="ml-2 text-sm font-medium">Editor</span>
                </Link>
            </div>
        </div>
     </div>
  )
}

export default SidebarMD
