import JSPlayground from './pages/JSPlayground';
import Header from './components/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import MDPreview from './pages/MDPreview';
import SidebarMD from './components/SidebarMD';
import Home from './components/Home';

function App() {
    const {pathname} = useLocation()
    
    return (
        <div className='w-screen h-screen overflow-y-auto'>
            <Header/>
            <main className='flex w-full h-full'>
                {pathname !== "/" ? <SidebarMD/> : null}
                <Routes>
                    <Route path='/js-playground/*' element={<JSPlayground/>}/>
                    <Route path='/markdown-editor/*' element={<MDPreview/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </main>
        </div>
    )
 
}

export default App