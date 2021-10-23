import './App.css';
import Navbar from "./Components/navbar/Navbar"
import Cart from "./Components/card/Cart"
import Products from "./Components/products/Products"
import { useEffect, useState } from 'react';


function App() {
  const [cartItems, setCartItems] = useState([]);


  // to save the data in Localstorage 
  const addToLocalStorage = (cart) => {
    localStorage.setItem("data", JSON.stringify(cart))
  }


  // to display the data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"))
    if (data != null) {
      setCartItems(data)
    }
  }, [])


  // add to cart + increment
  const addItem = (value) => {

    // if condition to make the increment
    let exist = cartItems.find((element) => element.id === value.id)
    if (exist) {
      //  increment the exist product(increment)
      let cart = cartItems.map((element) => element.id === value.id ? { ...exist, qty: exist.qty + 1 } : element);
      setCartItems(cart)
      addToLocalStorage(cart)
    } else {
      // add a new product
      let cart = [...cartItems, { ...value, qty: 1 }]
      setCartItems(cart)
      addToLocalStorage(cart)
    }
  };


  // decrement funtion to decrease the quintity of the exist product
  const removeItem = (value) => {
    // if condition to make the increment
    let exist = cartItems.find((element) => element.id === value.id)
    if (exist.qty > 1) {
      // remove an item (decrement)
      let cart = cartItems.map((element) => element.id === value.id ? { ...exist, qty: exist.qty - 1 } : element);
      setCartItems(cart)
      addToLocalStorage(cart)
    }

  };


  // Delete the product
  const deleteProduct = (value) => {
    const cart = cartItems.filter((element) => element.id !== value.id)
    setCartItems(cart)
    addToLocalStorage(cart)
  }


  // total qty of the products - reflected in navbar
  // 0 ====> initial value
  const totalQTY = cartItems.reduce((x, y) => x + y.qty, 0)


  // total price 
  const totalPrice = cartItems.reduce((x, y) => x + y.qty * y.price, 0)


  return (
    <div>
      {/* Navbar */}
      <Navbar totalPrice={totalPrice} totalQTY={totalQTY} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            {/* Products */}
            <Products addItem={addItem} />
          </div>
          <div className="col-md-3">
            {/* cart */}
            <Cart deleteProduct={deleteProduct} removeItem={removeItem} addItem={addItem} cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
