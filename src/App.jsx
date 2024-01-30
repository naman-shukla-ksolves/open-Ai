import { useReducer } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/layout/Header'
import AppContext from './context/AppContext'
import initialState from './context/initialState'
import reducer from './context/reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ToastContainer />
      <Header />
      <div className="wrapper gradient-highlight">
        <main className="container mt-4 pb-5">
          <Outlet />
        </main>
      </div>
    </AppContext.Provider>
  )
}

export default App
