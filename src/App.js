import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from "./pages/Home"
import About from "./pages/About"
import AddUserForm from "./pages/AddUserForm"
import NoPage from './pages/NoPage';
import User from './pages/User';

function App() 
{


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='user/:id' element={<User/>} />

          <Route path='adduser' element={<AddUserForm/>} />
          <Route path='*' element={<NoPage/>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
