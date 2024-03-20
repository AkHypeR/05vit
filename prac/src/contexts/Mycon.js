import {createContext, useContext} from 'react'
export const makecontext=createContext({
   userName:"user",
   userId:Date.now(),
   updateUsername:(userId)=>{}

})


export const useValue=()=>{
    return useContext(makecontext)
}

export const contextProvider=makecontext.Provider