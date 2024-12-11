import { useState } from "react"
import LoggerComponent from "./LoggerComponent"

function ConsoleJS() {
    const [source, setSource] = useState<string>("")
    
    return (
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="w-full md:w-1/2 p-4">
          <textarea
            onChange={(e) => setSource(e.currentTarget.value)}
            className="w-full h-full p-4 bg-neutral-950 text-white rounded-md border font-mono border-gray-700 focus:outline-none focus:ring-teal-500"
            placeholder="Write your JavaScript code here"
            rows={15}
          ></textarea>
        </div>
        <LoggerComponent code={source}/>
    </div>
    )
}

export default ConsoleJS
