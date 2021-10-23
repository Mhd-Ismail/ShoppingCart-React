import React from 'react'
import './Products.css'
import data from '../../Store.js'


const Products = ({addItem}) => {
    return (
        <div>
            <div className="row text-center ">
                {data.map((value, index) => {
                    return (
                        <div key={value.id} className="col-md-4 mt-4 mb-5">
                            <div className="items ">
                                <img height="330" className="w-100" src={value.image} alt="" />
                                <div className="cartTitles">
                                    <h6 className="my-4">{value.title}</h6>
                                    <span>$ {value.price}</span>
                                </div>
                                <button onClick={()=>{
                                    addItem(value)
                                }} className="btn w-100 productBtn">Add To Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products
