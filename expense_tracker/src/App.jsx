import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ExpensesPage from './pages/ExpensesPage';
import Login from './pages/LoginPage';
import NewUser from './pages/NewUser';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='./pages/LoginPage.jsx' element={<Login/>} />
      <Route path='./pages/NewUser.jsx' element={<NewUser/>} />
      <Route path='./pages/ExpensesPage.jsx' element={<ExpensesPage/>}/>
    </Routes>
    </>
  )
}

export default App;
