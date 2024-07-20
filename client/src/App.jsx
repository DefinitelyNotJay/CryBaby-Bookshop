import './App.css'
import {Routes, Route} from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import ManagerNavbar from './components/manager-navbar'
import BookRegister from './pages/BookRegister'

function App() {

  return (
    <div className='font-NotoSans'>
     <Routes>
     <Route path='/' element={<ManagerNavbar/>}>
      <Route path='/book' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/book-register' element={<BookRegister/>}/>
      </Route>
     </Routes>
    </div>
  )
}

export default App
