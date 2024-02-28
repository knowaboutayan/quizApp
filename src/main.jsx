import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import Home from './pages/Home.jsx'
import QuizProcess from './pages/QuizProcess.jsx'
import SelectDifficulty from './pages/Selectdifficulty.jsx'
import Question from './pages/Question.jsx'
import Result from './pages/Result.jsx'



const route = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "quiz_process",
        element: <QuizProcess />,
      }, {
        path: 'choose_difficulty',
        element: <SelectDifficulty />


      },
      {
        path: 'question',
        element: <Question />


      },
      {
        path: 'result',
        element: <Result />


      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={route}>
<App/>
  </RouterProvider>

)
