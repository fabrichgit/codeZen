import { useEffect, useState } from "react"
import axios from "axios"
import ItemLibMD from './ItemLibMD';
import useQuery from "../hook/useQuery";
import MarkdownPreview from '@uiw/react-markdown-preview';

function MdLibrary() {

    const id = useQuery("id")

    const [libs, setLibs] = useState<{title: string, description: string, example: string}[]>()
    useEffect(() => {
        axios.get("/lib.json")
        .then(res => {
            setLibs(res.data)
        })
    }, [])

    const oneLib = id ? libs?.find((_, i) => i === Number(id)) : null

  return (
    <div className='flex flex-wrap items-start justify-start gap-10 flex-grow h-max p-5'>
        {
            !oneLib ?
            libs?.map((lib, i) => <ItemLibMD key={i} lib={lib} i={i}/>)
            :
            <div className="flex flex-col gap-10 w-full h-max">
                <div>
                    <h1>{oneLib.title}</h1>
                    <p>{oneLib.description}</p>
                </div>
                <div className='flex flex-wrap flex-col gap-4 md:flex-row justify-between w-full h-max py-5 md:h-full'>
                    <div className='w-[50%] p-5 py-0'>
                        <pre className='text-wrap bg-transparent w-full h-[50vh] rounded-xl p-3'>
                            {
                                oneLib.example
                            }
                        </pre>
                    </div>
                    <div className='relative flex-grow h-max md:h-full overflow-y-auto'>
                        <MarkdownPreview source={oneLib.example} style={{ padding: 16, width: "100%" }} />
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default MdLibrary
