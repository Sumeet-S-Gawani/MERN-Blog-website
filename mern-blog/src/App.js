import React, { useContext } from 'react'
import Topbar from './components/topbar/Topbar'
import Home from './Pages/home/Home';
import SinglePost from './Pages/singlePage/SinglePage';
import Contact from './Pages/contact/Contact';
import WritePage from './Pages/writePage/WritePage';
import Settings from './Pages/settings/Settings';
import LoginPage from './Pages/login/LoginPage';
import RegisterPage from './Pages/register/RegisterPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/about/About';
import { Context } from './content api/Context';

const App = () => {
  const { user  } = useContext(Context);

  return(
    <BrowserRouter>
    <Topbar />
    
    <Routes>
        <Route excat path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <RegisterPage />} />
        <Route path="/login" element={user ? <Home /> : <LoginPage />} />
        <Route path="/about" element={user ? <About /> : <RegisterPage />} />
        <Route path="/contact" element={user ? <Contact /> : <RegisterPage />} />
        <Route path="/write" element={user ? <WritePage /> : <RegisterPage />} />
        <Route path="/settings" element={user ? <Settings /> : <RegisterPage /> } />
        <Route path="/post/:postid" element={<SinglePost />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;