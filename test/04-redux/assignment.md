# Track 04 — Redux Toolkit

**Goal**: Understand Redux Toolkit deeply enough to use it confidently in a real codebase — including async thunks, multiple slices, and derived state with selectors.

**Do Track 03 first.** Redux solves the same problem as Context + useReducer but scales better. If you understand Lite Redux, Redux will click immediately.

---

## Level 1 — Convert Lite Redux to Real Redux

### The Concept
You've already built a global cart using Context + useReducer (Track 03, Level 1). Now rebuild it using Redux Toolkit. Same features, same UI — just a different state management approach.

This forces you to map the concepts: reducer → slice, dispatch → useDispatch, context value → useSelector.

### Spec

**Install Redux Toolkit:**
```bash
npm install @reduxjs/toolkit react-redux
```

**Files to create:**
- `store/store.js` — configures the Redux store using `configureStore`
- `store/cartSlice.js` — creates the cart slice using `createSlice`
- `main.jsx` — wraps `<App />` in Redux `<Provider store={store}>`
- Reuse your UI components from Track 03 Level 1, but replace all `useCart()` calls with `useSelector` and `useDispatch`

**`cartSlice.js` must define:**
- `name: 'cart'`
- `initialState: { items: [], total: 0 }`
- Reducers: `addItem`, `removeItem`, `updateQuantity`, `clearCart`
- Export the action creators and the reducer

**`store.js` must:**
- Import the cart reducer from `cartSlice.js`
- Export `store` using `configureStore`

**In components, replace `useCart()` with:**
```js
const items = useSelector(state => state.cart.items);
const total = useSelector(state => state.cart.total);
const dispatch = useDispatch();
```

**Requirements:**
1. The `total` must still be calculated inside the reducer (slice reducer), not in the component.
2. No Context or `useReducer` — pure Redux.
3. `Header` shows item count using `useSelector`.
4. `CartSidebar` shows items and total using `useSelector`, dispatches actions using `useDispatch`.
5. `ProductCard` dispatches `addItem` action.

### Slice vs Lite Redux — Side-by-Side
After building this, compare your `cartSlice.js` to your `CartContext.jsx` from Track 03. Write a comment block in `cartSlice.js` answering:
- What does `createSlice` generate automatically that you had to write manually in the Lite Redux version?
- What is an "action creator" and where does Redux Toolkit create it?
- Why does `configureStore` replace the manual context Provider pattern?

### Mastery Check
- What does `createSlice` actually return? Name all the things exported from a slice.
- If you `console.log(cartSlice.actions.addItem)`, what do you see? What does calling `cartSlice.actions.addItem({ id: 1 })` return?
- What does `useSelector` do when the selected state changes? What does it do when *other* state changes?

---

## Level 2 — Multiple Slices + Derived State

### What to Build
An e-commerce app with three slices of state that interact with each other. You'll learn how to select derived state across slices.

### Spec

**Slices to create:**

**`productsSlice.js`:**
```js
initialState: {
  items: [
    { id: 1, name: 'Laptop', price: 999, stock: 5 },
    { id: 2, name: 'Mouse', price: 29, stock: 12 },
    { id: 3, name: 'Keyboard', price: 79, stock: 8 },
    { id: 4, name: 'Monitor', price: 349, stock: 3 },
  ]
}
// Reducers: decrementStock(id), restoreStock(id, quantity)
```

**`cartSlice.js`** — same as Level 1, reuse it.

**`userSlice.js`:**
```js
initialState: {
  name: 'Alex',
  email: 'alex@shop.com',
  membershipTier: 'gold',   // 'standard' | 'gold' | 'platinum'
}
// Reducers: updateProfile({ name, email })
// No tier changes needed
```

**Store:**
```js
configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
  }
})
```

**Components to create:**
- `ProductGrid.jsx` — shows all products with stock count. "Add to Cart" is disabled if stock is 0. Adding an item dispatches `addItem` (cart) AND `decrementStock` (products).
- `CartPanel.jsx` — shows items, total. Removing an item dispatches `removeItem` (cart) AND `restoreStock` (products).
- `UserPanel.jsx` — shows user info, membership tier.
- `DiscountBadge.jsx` — shows discount percentage based on tier:
  - standard: 0%
  - gold: 10%
  - platinum: 20%
- `OrderSummary.jsx` — shows cart total, discount amount, and final price after discount. **This component must not do math in JSX** — use selectors.

**Derived State Selectors (write these in a `selectors.js` file):**
```js
// Select cart total
export const selectCartTotal = state => state.cart.total;

// Select membership discount rate (0, 0.1, or 0.2)
export const selectDiscountRate = state => {
  const tier = state.user.membershipTier;
  const rates = { standard: 0, gold: 0.1, platinum: 0.2 };
  return rates[tier] ?? 0;
};

// Select final price after discount
export const selectFinalPrice = state => {
  const total = selectCartTotal(state);
  const rate = selectDiscountRate(state);
  return total * (1 - rate);
};

// Select whether a product is in stock (takes productId)
export const selectIsInStock = (state, productId) =>
  state.products.items.find(p => p.id === productId)?.stock > 0;
```

**Requirements:**
1. `OrderSummary` uses `selectCartTotal`, `selectDiscountRate`, and `selectFinalPrice`. No math in the component.
2. `ProductGrid` uses `selectIsInStock` to disable the "Add to Cart" button per product.
3. Both cart and products state update atomically when adding/removing items.
4. Removing an item from cart must restore the exact quantity removed to products stock.

### Mastery Check
- Why do we put selector logic in a separate `selectors.js` file instead of inline in components?
- What is a "memoized selector" (look up `createSelector` from RTK) — why would you use it for `selectFinalPrice`?
- When `productSlice` and `cartSlice` both need to update on "add to cart", how do you handle that? Did you dispatch two actions or one? What are the trade-offs?

---

## Level 3 — Async Thunks (API Integration)

### What and Why
`createAsyncThunk` is how Redux Toolkit handles async operations (API calls). It generates three action types automatically: `pending`, `fulfilled`, `rejected`. Your slice handles each.

### What to Build
Replace the hardcoded products in Level 2 with products fetched from a real API. Handle loading and error states properly.

**API to use:** `https://fakestoreapi.com/products` (free, no auth)

### Spec

**Update `productsSlice.js`:**

```js
initialState: {
  items: [],
  status: 'idle',     // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}
```

**Create a thunk:**
```js
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    // YOUR CODE: fetch from the API
    // If fetch throws, use rejectWithValue to pass the error message
  }
);
```

**Handle the thunk in `extraReducers`:**
```js
extraReducers: (builder) => {
  builder
    .addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload ?? action.error.message;
    });
}
```

**Update `ProductGrid.jsx`:**
- On mount, dispatch `fetchProducts()` using `useEffect` + `useDispatch`.
- Read `status` and `error` from the slice.
- If `status === 'loading'`: show "Loading products..."
- If `status === 'failed'`: show error message + "Retry" button that dispatches `fetchProducts()` again.
- If `status === 'succeeded'`: show the products grid.

**Requirements:**
1. `fetchProducts` must use `rejectWithValue` to pass the error message to the rejected case — don't just let the error propagate naturally (they behave differently — understand why).
2. Do not dispatch `fetchProducts` more than once if it's already loading. Check `status` before dispatching.
3. Products from the API have this shape: `{ id, title, price, image, category }`. Map these to your UI.
4. Add a `selectProductsStatus` and `selectProductsError` selector to `selectors.js`.

**Error simulation:** To test the error state, temporarily change the URL to `https://fakestoreapi.com/products-broken` in your thunk. Confirm the error state shows. Then change it back.

### Mastery Check
- What is the difference between `action.error.message` and `action.payload` in the rejected case? When does each exist?
- Why use `rejectWithValue` instead of just throwing an error in the thunk?
- If the user navigates away from the products page while the fetch is in flight, what happens? (Research: `AbortController` with thunks — you don't need to implement it, just explain it.)
- What does `status: 'idle'` represent, and why is it important to have it separate from `'loading'`?
