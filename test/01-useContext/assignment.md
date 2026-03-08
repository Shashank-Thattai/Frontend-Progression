# Track 01 — useContext

**Goal**: Go from "I know what context is" to "I know exactly when to use it, how to structure it, and how to avoid its pitfalls."

---

## Level 1 — Theme System

### What to Build
A simple app with a light/dark theme toggle. The toggle lives in a header. The theme affects components deep in the tree.

### Spec
Create a new Vite + React project (or add files to an existing one). Build the following:

**Components to create:**
- `ThemeContext.jsx` — creates and exports the context + a custom hook `useTheme()`
- `ThemeProvider.jsx` — wraps children, holds the `theme` state (`'light'` or `'dark'`), provides `theme` and `toggleTheme`
- `App.jsx` — wraps everything in `ThemeProvider`
- `Header.jsx` — displays current theme name and a "Toggle Theme" button
- `Card.jsx` — a UI card that changes background/text color based on theme
- `Footer.jsx` — also changes style based on theme

**Requirements:**
1. The `theme` state must live **only** in `ThemeProvider` — `Header`, `Card`, and `Footer` must not have their own state.
2. Create a custom hook `useTheme()` that throws a helpful error if used outside the provider.
3. `Card` and `Footer` must use `useTheme()` — they should **not** receive theme as a prop.
4. Toggling theme must update all three components simultaneously.

**Styling requirement:** Use inline styles (no CSS files needed). Light = white bg + black text. Dark = `#1a1a1a` bg + white text.

### Mastery Check
After it works, answer these without Googling:
- What would happen if you forgot to wrap `App` in `ThemeProvider` and called `useTheme()` inside `Card`?
- Why did we export a `useTheme()` hook instead of exporting the context object directly?

---

## Level 2 — Auth Context with Conditional Rendering

### What to Build
An authentication context that controls what different parts of the UI show. Multiple components at different nesting levels depend on the auth state.

### Spec

**Components to create:**
- `AuthContext.jsx` — context + `useAuth()` custom hook
- `AuthProvider.jsx` — holds `user` (object or null) and provides `login(userData)` + `logout()`
- `App.jsx` — renders `<Navbar />` and either `<Dashboard />` or `<LoginForm />` based on auth state
- `Navbar.jsx` — shows "Welcome, [name]" + logout button if logged in, or "Please log in" if not
- `LoginForm.jsx` — a form with name + email fields; on submit calls `login({ name, email })`
- `Dashboard.jsx` — shows "Hello [name]! Your email is [email]." and renders `<UserSettings />`
- `UserSettings.jsx` — nested inside Dashboard, shows the user's email from context (no props)

**Requirements:**
1. `App.jsx` must decide what to render based on context — no prop drilling.
2. `UserSettings` is 2 levels deep from `App` but must access user data from context only.
3. Logging out must clear the user and bring back `LoginForm`.
4. `login()` and `logout()` must come from context — `LoginForm` must not manage its own user state.

**Gotcha to handle:**
The `user` value starts as `null`. Make sure `Dashboard` and `UserSettings` don't crash when user is null.

### Mastery Check
- What is the difference between `useContext(AuthContext)` and your custom `useAuth()` hook? When does the custom hook matter?
- If `Navbar` re-renders on every context change, is that a problem here? Why or why not?

---

## Level 3 — Context Splitting (Performance Gotcha)

### What to Build
A notification + user preferences app. You'll start with a single context, discover the performance problem, then fix it by splitting context.

### Part A — Build with Single Context (Then Observe the Problem)

**Context to create:** `AppContext` that holds:
```js
{
  user: { name: 'Alex', email: 'alex@email.com' },   // rarely changes
  notifications: [],                                   // changes often
  addNotification: (msg) => {},
  dismissNotification: (id) => {},
}
```

**Components:**
- `AppProvider.jsx` — single provider with the combined state above
- `UserProfile.jsx` — displays user name and email (no notification data)
- `NotificationBell.jsx` — shows count of notifications, has "Add Notification" button
- `NotificationList.jsx` — lists all notifications with a "Dismiss" button per item
- `App.jsx` — renders all three components

Add a `console.log('UserProfile rendered')` inside `UserProfile`.
Add a notification. Notice the log fires — **UserProfile is re-rendering even though user data didn't change.** This is the problem.

### Part B — Fix It by Splitting Context

Split the single context into two:
- `UserContext` — holds only `user` data
- `NotificationContext` — holds `notifications`, `addNotification`, `dismissNotification`

Each component should now only consume the context it actually needs.

Add the same `console.log`. Add a notification. Verify `UserProfile` no longer re-renders.

**Requirements:**
1. You must have two separate context files and two separate providers.
2. `App.jsx` must nest both providers (think about which wraps which — it doesn't matter here, but you should be deliberate).
3. `UserProfile` must use only `UserContext`.
4. `NotificationBell` and `NotificationList` must use only `NotificationContext`.

### Mastery Check
- Why does adding a notification cause `UserProfile` to re-render when they share a context?
- What is the trade-off of splitting context? When would you NOT split it?
- Could `React.memo` solve the same problem? What's the difference between that approach and context splitting?
