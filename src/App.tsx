import JSPlayground from './pages/JSPlayground';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import MDPreview from './pages/MDPreview';

function App() {
    return (
        <div className='w-screen h-screen overflow-y-auto'>
            <Header/>
            <main className='flex w-full h-full'>
                <Routes>
                    <Route path='/js-playground/*' element={<JSPlayground/>}/>
                    <Route path='/markdown-editor/*' element={<MDPreview/>}/>
                </Routes>
            </main>
        </div>
    )
 
}

export default App