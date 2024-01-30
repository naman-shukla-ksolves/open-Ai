/* 
  This file is used to create a context object that will be used to pass data to components
  that are nested deep in the component tree without having to pass props down manually at every level.
  This is done by using the Provider component to wrap the components that need access to the context object.
*/
import { createContext } from 'react'
const AppContext = createContext()
export default AppContext
