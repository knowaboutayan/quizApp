import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from 'react-router-dom';
import { RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import QuizProcess from './pages/QuizProcess.jsx';
import SelectDifficulty from './pages/Selectdifficulty.jsx'; // Corrected import
import Question from './pages/Question.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Result from './pages/Result.jsx';
import Disclaimer from './pages/Disclaimer.jsx';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="quiz_process" element={<QuizProcess />} />
      <Route path="choose_difficulty" element={<SelectDifficulty />} /> {/* Corrected component name */}
      <Route path="disclaimer" element={<Disclaimer />} /> {/* Corrected component name */}
      <Route path="question" element={<Question />} /> {/* Corrected component name */}
      <Route path="result" element={<Result />} />
 <Route  path="*" element={<PageNotFound/>} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>
    <App />
  </RouterProvider>
);
