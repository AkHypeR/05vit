import './App.css'
import { Test } from './Test'
import { ContextProvider } from './contexts'
function App() {
  return (
    // Wrap the component where data would be shared 
    <ContextProvider>
      <Test />
    </ContextProvider>
  )
}

export default App
