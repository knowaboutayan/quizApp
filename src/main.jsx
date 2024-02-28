import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createRoutesFromElements,createBrowserRouter, redirect } from 'react-router-dom'
import Home from './pages/Home.jsx'
import QuizProcess from './pages/QuizProcess.jsx'
import SelectDifficulty from './pages/Selectdifficulty.jsx'
import Question from './pages/Question.jsx'
import Result from './pages/Result.jsx'



const route = createBrowserRouter(
createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />
<Route path="quiz_process" element={<QuizProcess/>} />
<Route path="choose_difficulty" element={<SelectDifficuly/>} />
<Route path="question" element={<Question/>} />

<Route path="result" element={<Result/>} />   <Route/>
  ));

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={route}>
<App/>
  </RouterProvider>

)
