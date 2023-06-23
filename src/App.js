import React,{useState} from 'react'
import Header from './components/Header/Header'
import Form from './components/Form'
import Inventory from './components/Inventory';
import Cart from './components/Cart';



export default function App() {

  const [shirtArray, setShirtArray] = useState([]) 

  const [cartState, setCartState] = useState(false);

  const pushData = obj =>{
    console.log(obj)
    setShirtArray((p) =>{
      return [...p,[obj.name,obj.desc,obj.price,obj.large,obj.medium,obj.small]]
    })
    //shirtArray.push(obj);
    setDisplayArray(true)
  }

  function showCart()
  {
    setCartState(true)
  }

  function close()
  {
    setCartState(false)
  }

  function invChanged(n,d,p,size)
  {
    setShirtArray((p) =>{
      return [...p,[n,d,p]]
    })
  }

  const [displayArray,setDisplayArray] = useState(false);
  return (
    <div>
      {cartState && <Cart dataToCart={shirtArray } close={close} />}
      <Header showCart={showCart}/>
      <br></br>
      <br></br>
      <Form pushData={pushData}/>
      {displayArray && <Inventory shirtArray={shirtArray} invChanged={invChanged}/>}
    </div>
  )
}

