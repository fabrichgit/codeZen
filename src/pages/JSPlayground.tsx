import { Route, Routes } from 'react-router-dom'
import ConsoleJS from '../components/ConsoleJS'
import Training from '../components/Training'

function JSPlayground() {

  return (
    <>
    <Routes>
      <Route path='console' element={<ConsoleJS/>}/>
      <Route path='training' element={<Training/>}/>
    </Routes>
    </>
  )
}

export default JSPlayground
