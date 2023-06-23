import React from 'react'
import Modal from './Modal'


export default function Cart(props) {
    let amount = 0;
    
    let len = props.dataToCart.length;
    for(let i=0; i<len; i++)
    {
        amount+=parseInt(props.dataToCart[i][2])
    }
  return (
    <Modal>
      {props.dataToCart.map((item) =>{
        return <li>{item[0]}   Rs {item[2]}</li>
      })}
      
      <li>Total amount Rs {amount}</li>
      <button onClick={props.close}>Close</button>
    </Modal>
  )
}
