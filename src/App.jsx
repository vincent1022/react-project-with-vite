import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/welcome'
import Login from './views/login'
import NotFound from './views/notFound'

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
    </BrowserRouter>

  );
}