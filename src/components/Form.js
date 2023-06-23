import React,{useRef,useContext} from 'react'
import './Form.css';
import Card from './Card';
import CartContext from '../store/cart-context';


export default function Form(props) {

    const cartCtx = useContext(CartContext)

    const dataName = useRef();
    const dataDesc = useRef();
    const dataPrice = useRef();
    const dataL = useRef();
    const dataM = useRef();
    const dataS = useRef();

    function sendDataObj(e)
{
    e.preventDefault();
    let obj = {
        name:dataName.current.value,
        desc:dataDesc.current.value,
        price:dataPrice.current.value,
        large:dataL.current.value,
        medium:dataM.current.value,
        small:dataS.current.value,
    }
    props.pushData(obj)
    cartCtx.items.push(obj)


}

    return (
        <Card>
        <div className='form-ip'>
            <form  className="row g-3" onSubmit={sendDataObj}>
                <div className="col-md-4">
                    <label htmlFor="validationDefault01" className="form-label">Tshirt Name</label>
                    <input type="text" className="form-control" id="validationDefault01" ref={dataName} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault02" className="form-label">Tshirt Description</label>
                    <input type="text" className="form-control" id="validationDefault02" ref={dataDesc} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault03" className="form-label">Price</label>
                    <input type="number" className="form-control" id="validationDefault03" ref={dataPrice} />
                </div>
                

                <div className="col-md-5">
                    <label htmlFor="validationDefault03" className="form-label">Large</label>
                    <input type="number" className="form-control" id="validationDefault05" ref={dataL} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationDefault03" className="form-label">Medium</label>
                    <input type="number" className="form-control" id="validationDefault06" ref={dataM}/>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationDefault07" className="form-label">Small</label>
                    <input type="number" className="form-control" id="validationDefault07" ref={dataS} />
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
            
        </div>
        </Card>
    )
}
