import MarkdownPreview from '@uiw/react-markdown-preview';
import { useState } from 'react';

function MDPreview() {
    const [source, setSource] = useState<string>("")

    return (
        <div className='flex justify-between w-full h-full'>
            <div className='w-full p-5'>
                <textarea placeholder='# Write markdown here ...' onChange={(e) => setSource(e.currentTarget.value)} name="" id="" className='bg-transparent w-full h-[50vh] rounded-xl p-3'></textarea>
            </div>
            <div className='w-full h-full overflow-y-auto'>
                <MarkdownPreview source={source} style={{ padding: 16, width: "100%", height: "50vh" }} />
            </div>
        </div>
    )
}

export default MDPreview
