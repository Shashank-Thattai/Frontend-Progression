# Track 03 — Context + useReducer (Lite Redux)

**Goal**: Combine what you built in tracks 01 and 02. This is the pattern your Naresh React folder calls "Lite Redux" — global state management without the Redux dependency. Master this and Redux will feel obvious.

**Do Track 01 and Track 02 first.**

---

## Level 1 — Global Shopping Cart

### What and Why
Take the shopping cart from Track 02, Level 1 — right now, `dispatch` and `cart` are passed as props. That means every parent component in the tree has to pass them down. This is prop drilling.

The fix: lift the cart state into a Context + useReducer so **any component anywhere in the tree** can access it without props.

### Spec

**Files to create:**
- `CartContext.jsx` — creates context, sets up `useReducer` with your `cartReducer` from Track 02, provides `{ state, dispatch }`, exports a `useCart()` custom hook
- `CartProvider.jsx` — or combine into `CartContext.jsx` (your choice)
- `App.jsx` — wraps the whole app in the cart provider
- `Header.jsx` — shows cart item count (uses `useCart()`, no props)
- `ProductPage.jsx` — renders product grid (components use `useCart()` to dispatch)
- `ProductCard.jsx` — individual product, dispatches `ADD_ITEM` on click (no props for cart)
- `CartSidebar.jsx` — shows full cart, dispatches `REMOVE_ITEM` / `UPDATE_QUANTITY` / `CLEAR_CART` (no props for cart)

**Reuse your `cartReducer.js` from Track 02 Level 1 — copy it here.**

**Requirements:**
1. **Zero prop drilling** for cart state. No component should receive `cart` or `dispatch` as a prop.
2. `useCart()` must throw an error if called outside `CartProvider`.
3. `Header` shows the total item count (sum of all quantities, not number of unique items).
4. `CartSidebar` shows total price.
5. Adding the same product multiple times increments quantity (this is your reducer's job — it already handles this).

**Component tree:**
```
App
 └── CartProvider
      ├── Header          (shows count via useCart)
      └── main
           ├── ProductPage
           │    └── ProductCard × 4  (dispatches via useCart)
           └── CartSidebar            (reads + dispatches via useCart)
```

### Mastery Check
- What is the difference between how `CartProvider` handles state vs how a regular parent component would handle it?
- If you add `React.memo` to `ProductCard`, would it prevent re-renders when the cart changes? Why or why not?
- What does `useCart()` actually return? Trace it: what is in `value` inside the Provider?

---

## Level 2 — Global Notification System with Auto-Dismiss

### What and Why
This is a real-world pattern. Toast notifications (the little pop-ups that say "Saved!" or "Error!") need to be triggerable from *anywhere* in the app — deep in a form, from an API error handler, from any component. Context + useReducer is the perfect tool.

The extra complexity: notifications must auto-dismiss after 3 seconds. This means side effects that interact with reducer state.

### Spec

**Files to create:**
- `NotificationContext.jsx` — context, reducer, provider, and `useNotifications()` hook — all in one file
- `NotificationContainer.jsx` — renders all active notifications (floated top-right)
- `NotificationItem.jsx` — a single toast (text, type, dismiss button)
- `App.jsx` — wraps in provider, renders a demo page
- `DemoPage.jsx` — has buttons to trigger different notification types from different depths
- `NestedComponent.jsx` — a component inside `DemoPage` that also triggers notifications (tests "from anywhere")

**Notification shape:**
```js
{
  id: Date.now(),       // unique id for keying + dismissal
  message: 'string',
  type: 'success' | 'error' | 'info' | 'warning',
}
```

**State shape:**
```js
const initialState = {
  notifications: [],
};
```

**Actions your reducer must handle:**

| Action type | Payload | What it does |
|-------------|---------|-------------|
| `ADD_NOTIFICATION` | `{ id, message, type }` | Add to notifications array. |
| `REMOVE_NOTIFICATION` | `{ id }` | Remove by id. |
| `CLEAR_ALL` | none | Empty the array. |

**`useNotifications()` must expose:**
```js
{
  notifications,             // array from state
  notify(message, type),     // dispatches ADD_NOTIFICATION, schedules auto-dismiss
  dismiss(id),               // dispatches REMOVE_NOTIFICATION
  clearAll(),                // dispatches CLEAR_ALL
}
```

**Auto-dismiss requirement:**
`notify()` must start a `setTimeout` of 3000ms after which it dispatches `REMOVE_NOTIFICATION`. But there's a gotcha: **if the user manually dismisses a notification before 3 seconds, the timeout still fires and tries to remove an already-removed id.** Your reducer must handle a `REMOVE_NOTIFICATION` for an id that doesn't exist — it should do nothing, not crash.

**UI Requirements:**
- `NotificationContainer` is fixed top-right, shows all active notifications stacked.
- Each `NotificationItem` has a colored left border based on type (green=success, red=error, blue=info, yellow=warning). Shows message text. Has an "×" dismiss button.
- `DemoPage` has 4 buttons: "Show Success", "Show Error", "Show Info", "Show Warning" — each calls `notify()` with an appropriate message.
- `NestedComponent` (inside DemoPage) has a "Notify from deep" button that calls `notify()`.
- A "Clear All" button in `NotificationContainer` or `DemoPage`.

**Memory leak gotcha to solve:**
If the component using `notify()` unmounts before the timeout fires, the timeout will try to dispatch into a potentially unmounted context. For this level, you don't need to solve this fully, but **write a comment in your code explaining why it's a risk and what you'd do to fix it** (hint: look at how `useEffect` cleanup works).

### Mastery Check
- Why does `notify()` live in the custom hook and not in the reducer?
- What is the difference between having `notify()` as a context value vs having it as a local function inside `useNotifications()`?
- If two notifications have the same message added at the exact same millisecond, what breaks? How would you fix the id generation?
- The reducer ignores a `REMOVE_NOTIFICATION` for a nonexistent id. Is this correct behavior? What is the principle of making reducers handle invalid actions gracefully?
