import React, { useState } from 'react'
import CartContext from './cart-context'

export default function CartProvider(props) {

    const val ={
        items:[]
    }

    const [latestValue, setLatestValue] = useState(val)
    return (
        <CartContext.Provider value={latestValue}>
            {props.children}
        </CartContext.Provider>
    )
}
