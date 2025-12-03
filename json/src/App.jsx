import { Route, Routes } from 'react-router-dom'
import Form from './Component/Form'
import Showdata from './Component/Showdata'


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Form />} />
        <Route path="/Showdata" element={<Showdata/>} />
      </Routes>
    </>
  )
}

export default App
