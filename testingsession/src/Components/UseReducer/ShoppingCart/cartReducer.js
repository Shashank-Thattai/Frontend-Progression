export var initialState = {
  items: [], // { id, name, price, quantity }
  total: 0,
};

export default function cartReducer(state, action) {
  switch (action.type) {
    case "add_items":
      var exists = state.items.find((items) => items.id === action.payload.id);

      var updatedItems = exists
        ? state.items.map((items) =>
            items.id === action.payload.id
              ? { ...items, quantity: items.quantity + 1 }
              : items,
          )
        : [...state.items, { ...action.payload, quantity: 1 }];
      return {
        items: updatedItems,
        total: state.total + action.payload.price,
      };
    case "remove_item":
      var filtered = state.items.filter((items) => {
        return items.id !== action.payload.id;
      });
      var itemToRemove = state.items.find(
        (item) => item.id === action.payload.id,
      );

      return {
        items: filtered,
        total: state.total - itemToRemove.price * itemToRemove.quantity,
      };
    case "reset_cart":
      return {
        items: [],
        total: 0,
      };
    case "update_quantity":
      var updatedQ = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity + 1 }
          : item,
      );
      var newTotal = updatedQ.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      return {
        items: updatedQ,
        total: newTotal,
      };
  }
}
