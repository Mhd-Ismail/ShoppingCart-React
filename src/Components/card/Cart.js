import React from 'react'
import './Cart.css'

const Card = ({ cartItems, addItem, removeItem, deleteProduct }) => {
    // console.log(cartItems);
    return (
        <div className="">
            <h2 className="mt-5 pt-5 text-center mb-4">Cart Items</h2>
            {cartItems.map((value, index) => {
                return (
                    <div key={value.id}>
                        <div className="cartItemsContainer">
                            <div className="cart-img">
                                <img className="cartImages" src={value.image} alt="" />
                            </div>
                            <div className="text-center">
                                <h6>{value.title}</h6>
                                <p className="price">$ {value.price}</p>
                                <button onClick={()=>{addItem(value)}} className="btn btn-info">+</button>
                                <span className="px-3">{value.qty}</span>
                                <button onClick={() => { removeItem(value) }} className="btn btn-danger">-</button>
                                <button onClick={() => { deleteProduct(value) }} className="btn btn-danger ml-3 trashIcon"><i className="fas fa-trash"></i></button>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Card






