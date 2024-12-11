import { useEffect, useState } from "react"
import axios from "axios"
import ItemLibMD from './ItemLibMD';

function MdLibrary() {
    const [libs, setLibs] = useState<{title: string, description: string, example: string}[]>()
    useEffect(() => {
        axios.get("/lib.json")
        .then(res => {
            setLibs(res.data)
        })
    }, [])
  return (
    <div className='flex flex-wrap items-start justify-start gap-10 flex-grow h-max p-5'>
        {
            libs?.map((lib, i) => <ItemLibMD key={i} lib={lib}/>)
        }
    </div>
  )
}

export default MdLibrary
