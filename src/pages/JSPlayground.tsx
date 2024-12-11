import  { useState } from 'react'
import LoggerComponent from '../components/LoggerComponent'

function JSPlayground() {

const [source, setSource] = useState<string>("")
    
  return (
    <div className='flex justify-between w-full h-full'>
        <div className='w-[50%] p-5'>
            <textarea onChange={(e) => setSource(e.currentTarget.value)} name="" id="" className='bg-transparent w-full h-[60%] rounded-xl p-3'></textarea>
        </div>
        <LoggerComponent code={source}/>
    </div>
  )
}

export default JSPlayground
