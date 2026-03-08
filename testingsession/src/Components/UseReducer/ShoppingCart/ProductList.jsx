import React from "react";

const ProductList = ({ dispatch }) => {
  console.log(dispatch);

  const PRODUCTS = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 29 },
    { id: 3, name: "Keyboard", price: 79 },
    { id: 4, name: "Monitor", price: 349 },
  ];

  function handleAddItem(product) {
    dispatch({ type: "add_items", payload: product });
  }

  function handleRemoveItem(product) {
    dispatch({ type: "remove_item", payload: product });
  }
  function handleReset(product) {
    dispatch({ type: "reset_cart", payload: product });
  }
  
  return (
    <>
      {PRODUCTS.map((items) => {
        return (
          <div key={items.id}>
            item name: {items.name}
            item price: {items.price}
            <br />
            <button onClick={() => handleAddItem(items)}>Add Item</button>
            <button onClick={() => handleRemoveItem(items)}>Remove Item</button>
            <button onClick={() => handleReset(items)}>Reset Cart</button>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
