# Track 02 — useReducer

**Goal**: Understand *when* useReducer replaces useState, how to design actions, and how to handle complex state transitions without spaghetti.

---

## Level 1 — Shopping Cart

### Why useReducer Here?
A shopping cart has multiple related operations (add, remove, update quantity, clear). With `useState`, you'd have 3–4 state variables and logic scattered across handlers. With `useReducer`, all state transitions live in one place and are predictable.

### What to Build
A simple shopping cart with a product list and a cart panel.

### Spec

**Files to create:**
- `cartReducer.js` — the reducer function and initial state (no React here, pure JS)
- `ShoppingCart.jsx` — the main component, uses `useReducer(cartReducer, initialState)`
- `ProductList.jsx` — receives `dispatch` as a prop, shows 4 hardcoded products
- `CartPanel.jsx` — receives `cart` state and `dispatch` as props, shows cart items

**Hardcoded products (put these in `ProductList.jsx`):**
```js
const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 29 },
  { id: 3, name: 'Keyboard', price: 79 },
  { id: 4, name: 'Monitor', price: 349 },
];
```

**State shape:**
```js
const initialState = {
  items: [],   // { id, name, price, quantity }
  total: 0,
};
```

**Actions your reducer must handle:**

| Action type | Payload | What it does |
|-------------|---------|-------------|
| `ADD_ITEM` | `{ id, name, price }` | If item exists, increment quantity. If new, add with quantity 1. Always recalculate total. |
| `REMOVE_ITEM` | `{ id }` | Remove item completely. Recalculate total. |
| `UPDATE_QUANTITY` | `{ id, quantity }` | Set quantity to new value. If quantity becomes 0, remove item. Recalculate total. |
| `CLEAR_CART` | none | Reset to initialState. |

**UI Requirements:**
- `ProductList`: Each product has an "Add to Cart" button that dispatches `ADD_ITEM`.
- `CartPanel`: Shows each item's name, quantity, price × quantity. Shows total at bottom. Each item has "+" and "−" buttons (dispatch `UPDATE_QUANTITY`) and a "Remove" button (dispatch `REMOVE_ITEM`). A "Clear Cart" button dispatches `CLEAR_CART`.

**Critical rule:** The total must be calculated **inside the reducer**, not in the component. If you compute total in JSX, you're doing it wrong.

### Mastery Check
- Where does the total live? Why is it better to keep it in the reducer than derive it in the component?
- What happens in your reducer if `UPDATE_QUANTITY` receives a quantity of 0? Did you handle that?
- Why do we pass `dispatch` as a prop here instead of using context? (This sets up Level 3.)

---

## Level 2 — Multi-Step Form

### Why useReducer Here?
A multi-step form has: current step index, field values per step, validation errors per field, and submission status. That's 4+ pieces of state that change together. Managing them separately with `useState` leads to sync bugs. useReducer keeps them atomic.

### What to Build
A 3-step user registration form.

**Step 1 — Personal Info:** First name, Last name, Date of birth
**Step 2 — Account Info:** Email, Password, Confirm password
**Step 3 — Review & Submit:** Show all entered data, a "Submit" button

### Spec

**Files to create:**
- `formReducer.js` — reducer + initialState
- `RegistrationForm.jsx` — main component using `useReducer`
- `Step1.jsx`, `Step2.jsx`, `Step3.jsx` — each step gets `state` and `dispatch` as props

**State shape:**
```js
const initialState = {
  step: 1,
  fields: {
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  errors: {},         // { fieldName: 'error message' }
  submitted: false,
};
```

**Actions your reducer must handle:**

| Action type | Payload | What it does |
|-------------|---------|-------------|
| `UPDATE_FIELD` | `{ field, value }` | Update one field in `fields`. Clear that field's error if it exists. |
| `SET_ERRORS` | `{ errors }` | Replace the errors object. |
| `NEXT_STEP` | none | Increment step (max 3). |
| `PREV_STEP` | none | Decrement step (min 1). |
| `SUBMIT` | none | Set `submitted: true`. |
| `RESET` | none | Return to initialState. |

**Validation rules (implement in component, dispatch `SET_ERRORS` before `NEXT_STEP`):**

Step 1:
- First name and last name: required, min 2 chars
- DOB: required, must be a past date

Step 2:
- Email: required, must contain `@`
- Password: required, min 8 chars
- Confirm password: must match password

**Requirements:**
1. "Next" button must validate the current step's fields before dispatching `NEXT_STEP`. If validation fails, dispatch `SET_ERRORS` and stay on the current step.
2. Step 3 is read-only — show all field values. No editing.
3. On submit, show a success message and a "Start Over" button that dispatches `RESET`.
4. Errors must clear when the user starts typing in a field (handle this in `UPDATE_FIELD`).

### Mastery Check
- Why is validation logic in the component (before dispatching) instead of inside the reducer?
- What would break if you put validation inside the reducer?
- The `errors` object is replaced entirely by `SET_ERRORS`. Could this cause a bug? (Hint: what if you only validate one field?)

---

## Level 3 — Optimistic Updates with Rollback

### Why This Level?
This is the pattern real apps use. You update the UI instantly (optimistic), send the API call, and if it fails — you roll back. This requires the reducer to hold both "committed" and "pending" state.

### What to Build
A todo list that makes fake API calls. Items appear instantly on add, but roll back if the "API" fails.

### Spec

**Files to create:**
- `todoReducer.js` — reducer + initialState
- `TodoApp.jsx` — main component
- `fakeApi.js` — fake async functions that randomly fail

**`fakeApi.js` contents (copy this exactly):**
```js
// This simulates a real API — it succeeds 60% of the time, fails 40%
export function fakeAddTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.4) {
        resolve({ ...todo, id: Date.now() });
      } else {
        reject(new Error('Server error: could not save todo'));
      }
    }, 1000);
  });
}

export function fakeDeleteTodo(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.4) {
        resolve({ id });
      } else {
        reject(new Error('Server error: could not delete todo'));
      }
    }, 800);
  });
}
```

**State shape:**
```js
const initialState = {
  todos: [],          // { id, text, status: 'saved' | 'saving' | 'error' }
  error: null,        // global error message
};
```

**Actions your reducer must handle:**

| Action type | Payload | What it does |
|-------------|---------|-------------|
| `ADD_OPTIMISTIC` | `{ tempId, text }` | Add todo immediately with `status: 'saving'` and the tempId. |
| `CONFIRM_ADD` | `{ tempId, confirmedTodo }` | Replace the temp todo (by tempId) with the real one from the server. Set status to `'saved'`. |
| `REJECT_ADD` | `{ tempId, error }` | Mark the temp todo's status as `'error'`. Set global error message. |
| `REMOVE_OPTIMISTIC` | `{ id }` | Mark todo as `status: 'saving'` (removing). |
| `CONFIRM_REMOVE` | `{ id }` | Remove the todo from the array. |
| `REJECT_REMOVE` | `{ id, error }` | Set todo status back to `'saved'`. Set global error message. |
| `DISMISS_ERROR` | none | Clear the global error. |

**UI Requirements:**
- Input + "Add" button. On click: dispatch `ADD_OPTIMISTIC` with a `tempId` (use `Date.now()`), then call `fakeAddTodo()`.
  - On success: dispatch `CONFIRM_ADD`
  - On failure: dispatch `REJECT_ADD`
- Todo list: Each todo shows its text and status. If status is `'saving'`, show "(saving...)" and disable the delete button. If status is `'error'`, show the text in red with "(failed — will be retried)" and a "Retry" button.
- Delete button: dispatch `REMOVE_OPTIMISTIC`, call `fakeDeleteTodo()`. On success: `CONFIRM_REMOVE`. On failure: `REJECT_REMOVE`.
- If global error exists, show a red banner with a "Dismiss" button.

**Retry requirement:** The "Retry" button on a failed todo must try the add again. The todo's status must go back to `'saving'` while retrying.

### Mastery Check
- What is a "tempId" and why do you need it? What would break without it?
- If the user clicks "Add" 3 times quickly before any API response, what does the state look like? Does your reducer handle this?
- Why do we optimistically update the UI instead of waiting for the API? What is the UX trade-off?
