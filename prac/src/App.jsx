
import './App.css'
import  {contextProvider}  from './contexts'
function App() {
 
  

  return (

   <contextProvider value={{userName,userId,updateUsername }} >
   

   </ contextProvider>
  )
}

export default App
