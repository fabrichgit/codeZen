import MarkdownPreview from '@uiw/react-markdown-preview';
import { Link } from 'react-router-dom';

function ItemLibMD({lib, i}: {lib: {title: string, description: string, example: string}, i: number}) {
  return (
    <div className="block relative group transition hover:scale-105 hover:-rotate-1 w-[20rem]">
        <Link to={`?id=${i}`} className="block w-full">
            <div className="relative w-full rounded-2xl h-[10rem] overflow-hidden">
                <MarkdownPreview source={lib.example} className="w-full h-full object-center object-cover p-5" />
                <div className='absolute z-50 top-0 left-0 w-full h-full inset-0 hover:backdrop-blur-[1px]'></div>
            </div>
            <div className="space-y-1 py-3 px-1">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="flex-1 font-medium text-xl">
                        {lib.title}
                    </h3>
                </div>
                <p className="text-gray-500">
                    {lib.description}
                </p>
            </div>
        </Link>
    </div>
  )
}

export default ItemLibMD
