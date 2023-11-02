import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Add from './Add.jsx'

function Myfun()
{
     return(
        <h1>Myself Harsh Kumar Kakariya</h1>
     )
}


// It will not work directly on this because it is in random order which will unable read by react library
// const reactElement = {
//     type: 'a',
//     props: {
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }


const anotherElement=(
        <a href="https://google.com" target='_blank'>Visit google</a>
)

// creating react Element in this order
const anotheruser="  chai aur code"   // evaluated expression
const reactElement=React.createElement(
    'a',
    {href:"https://google.com",target:'_blank'},
    "click me to visit google",
    anotheruser
)


ReactDOM.createRoot(document.getElementById('root')).render(
   
    // <></>  it is used to bind when we have to run or return more than one element
//     <>  
    // <App />   
    // <Add />
//    </>

// we can also run directly any functin in this
//  <Myfun /> 
  
// it will not work
// reactElement

   // if we pass a const in this order it will directly work
   //    anotherElement

// paritcular method to make element in react
reactElement

)
