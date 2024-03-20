import React, { useContext } from 'react'
import { AppContext } from './contexts/Mycon';

export const Test = () => {
  // Access the data from Context by using hook useContext
  const { userName, userId, updateUsername } = useContext(AppContext);
  return (
    <div>
      <h1>{userName}</h1>
    </div>
  )
}
