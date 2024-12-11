import MarkdownPreview from '@uiw/react-markdown-preview';
import { useState } from 'react';

function App() {
    const [source, setSource] = useState<string>("")
    return (
        <div className='flex justify-between w-full h-full'>
            <div className='w-full p-5'>
                <textarea onChange={(e) => setSource(e.currentTarget.value)} name="" id="" className='bg-transparent w-full h-[60%] rounded-xl p-3'></textarea>
            </div>
            <MarkdownPreview source={source} style={{ padding: 16, width: "50%" }} />
        </div>
    )
}

export default App