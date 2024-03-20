import { createContext } from 'react';

// Create Context first
export const AppContext = createContext();

// Then make a provider which will provide all data to the child component
export const ContextProvider = ({ children }) => {
    // Value object which data would be shared
    let value = {
        userName: "user",
        userId: Date.now(),
        updateUsername: (userId) => { }
    }
    // Pass the value object in "value" props of Context.Provider component
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}