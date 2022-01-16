import React, { useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)

  function handleAddToCart() {
    setCart((cart) => !cart)
  }

  const inCart = cart ? "in-cart" : ""

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{ cart ? "Remove From Cart" : "Add to Cart"   }</button>
    </li>
  );
}

export default Item;
