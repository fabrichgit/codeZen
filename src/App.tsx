import { Link } from 'react-router-dom';
import JSPlayground from './pages/JSPlayground';
import Header from './components/Header';

function App() {
    return (
        <div className='w-screen h-screen overflow-y-auto'>
            <Header/>
            {/* <header>
                <div></div>
                <nav>
                    <ul>
                        <li>
                            <Link
                        </li>
                    </ul>
                </nav>
            </header> */}
            <main>
            <JSPlayground/>
            </main>
        </div>
    )
 
}

export default App