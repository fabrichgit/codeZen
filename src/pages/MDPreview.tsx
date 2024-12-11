import { Route, Routes } from 'react-router-dom';
import MdEditor from '../components/MdEditor';
import SidebarMD from '../components/SidebarMD';
import MdLibrary from '../components/MdLibrary';

function MDPreview() {

    return (
        <div className="flex w-full">
            <SidebarMD/>
            <Routes>
                <Route path="editor" element={<MdEditor/>}/>
                <Route path="library" element={<MdLibrary/>}/>
            </Routes>
        </div>
    )
}

export default MDPreview
