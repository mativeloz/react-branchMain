 import React from 'react'
 
 const MyComponents = (props) => {
  props.saludar()
   return (
     <div>
      <h1>BIENVENIDOS A REACT {props.name} </h1>
     </div>
   )
 }
 
 export default MyComponents