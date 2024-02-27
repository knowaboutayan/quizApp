import { Provider } from 'react-redux'
import './App.css'
import Header from './components/Header'
import { store } from './reduxTools/store'
import { Outlet } from 'react-router-dom'
import Result from './pages/Result'
import Footer from './components/Footer'

function App() {

//   document.addEventListener('contextmenu', function (event) {
//     event.preventDefault();
//   });
//   document.addEventListener('keydown', function(event) {
//     // Check if Ctrl (or Cmd on Mac) and N keys are pressed
//     if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c' &&event.shiftKey) {
//         // Prevent the default behavior (opening a new window or tab)
//         event.preventDefault();
//     }
// });

  return (
    <>
      <Provider store={store}>
        <div style={{height:"100vh"}}>
        <Header/>
        <Outlet />
        <Footer/>
        </div>
      </Provider>
    </>
  )
}

export default App
