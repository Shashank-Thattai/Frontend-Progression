import React from "react";

const CartPanel = ({ initialState, dispatch }) => {
  console.log("This is my cart panel");
  console.log(initialState);
  console.log(dispatch);
  function handleUpdate(product) {
    dispatch({ type: "update_quantity", payload: product });
  }
  return (
    <>
      {initialState.items.map((item) => {
        return (
          <div key={item.id}>
            Cart item:{item.name}
            Item Price:{item.price}
            <button onClick={() => handleUpdate(item)}> Update Quantity</button>
            {item.quantity}
          </div>
        );
      })}
    </>
  );
};

export default CartPanel;
