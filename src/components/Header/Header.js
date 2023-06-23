import React from 'react'


export default function Header(props) {

  function openCart(e)
  {
    e.preventDefault();
    props.showCart();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href='/' >Tshirt Paradise</a>
      <button onClick={openCart}>Cart</button>  
      </div>
    </nav>
  )
}
