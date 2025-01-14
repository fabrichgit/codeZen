import MarkdownPreview from '@uiw/react-markdown-preview';
import { useState } from 'react';

function MdEditor() {
    const [source, setSource] = useState<string>("")

    return (
        <div className='flex flex-col gap-4 md:flex-row justify-between w-full h-max py-5 md:h-full'>
            <div className='w-full p-5 py-0'>
                <textarea placeholder='# Write markdown here ...' onChange={(e) => setSource(e.currentTarget.value)} name="" id="" className='bg-transparent w-full h-[50vh] rounded-xl p-3'></textarea>
            </div>
            <div className='w-full h-max md:h-full overflow-y-auto'>
                <MarkdownPreview source={source} style={{ padding: 16, width: "100%" }} />
            </div>
        </div>
    )
}

export default MdEditor
