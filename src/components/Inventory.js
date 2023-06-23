import React,{useRef} from 'react'
import Card from './Card'

export default function Inventory(props) {

  const lref = useRef()
  const mref = useRef()
  const sref = useRef()

  function largeChange(){
    console.log()
    props.invChanged(lref.current.parentNode.children[0].textContent.split(" ")[0],lref.current.parentNode.children[0].textContent.split(" ")[1],lref.current.parentNode.children[0].textContent.split(" ")[2],"large")
  }

  function mediumChange(){
    props.invChanged()
  }

  function smallChange(){
    props.invChanged()
  }


  return (
    <Card>
      {props.shirtArray.map((arr) =>{
        return (
            <div>
            <li>{arr[0]} {arr[1]} {arr[2]}</li>
            <button ref={lref} onClick={largeChange}>Buy Large {arr[3]}</button>
            <button ref={mref} onClick={mediumChange}>Buy Medium {arr[4]}</button>
            <button ref={sref} onClick={smallChange}>Buy Small {arr[5]}</button>
            </div>
        )
      })}
    </Card>
  )
}
