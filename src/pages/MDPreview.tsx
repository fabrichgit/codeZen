import { Route, Routes } from 'react-router-dom';
import MdEditor from '../components/MdEditor';
import SidebarMD from '../components/SidebarMD';

function MDPreview() {

    return (
        <div className="flex w-full">
            <SidebarMD/>
            <Routes>
                <Route path="/preview" element={<MdEditor/>}/>
            </Routes>
        </div>
    )
}

export default MDPreview
