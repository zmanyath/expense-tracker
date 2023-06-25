import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ExpensesPage from './pages/ExpensesPage';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='./pages/loginPage.jsx' element={<loginPage/>} />
      <Route path='./pages/newUser.jsx' element={<newUser/>} />
      <Route path='./pages/ExpensesPage.jsx' element={<ExpensesPage/>}/>
    </Routes>
    </>
  )
}

export default App;
