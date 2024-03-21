
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Dashboard from './Pages/Dashboard'
import Account from './Pages/Account'
import Settings from './Pages/Settings'
import Bookings from './Pages/Bookings'
import Users from './Pages/Users'
import PageNotFound from './Pages/PageNotFound'
import Cabins from './Pages/Cabins'
import AppLayout from './ui/AppLayout'
import Login from './Pages/Login'

function App() {
 

  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />} >
    <Route index element={<Navigate replace to="dashboard"/>}/>
      <Route path='dashboard' element={<Dashboard />}/>
      <Route path='account' element={<Account />}/>
      <Route path='Cabins' element={<Cabins />}/>
  
      <Route path='settings' element={<Settings />}/>
      <Route path='bookings' element={<Bookings />}/>
      <Route path='users' element={<Users />}/>
      </Route>
      <Route path='login' element={<Login />}/>
      <Route path='*' element={<PageNotFound />}/>
 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
