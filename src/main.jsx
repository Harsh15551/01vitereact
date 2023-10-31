import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Add from './Add.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   
    // <></>  it is used to bind when we have to run or return more than one element
    <>  
    <App />   
    <Add />
   </>
)
