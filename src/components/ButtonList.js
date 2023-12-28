import React from 'react'
import Button from './Button'


const list=["all","Gaming","Cooking","Songs","cricket","live","soker"];
const ButtonList = () => {
  return (
    <div className='flex '>
    {list.map((item,index)=><Button name={item} key={index} />)}
      
      {/* <Button name="Game"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Cookies"/> */}
     
    </div>
  )
}

export default ButtonList
