# Track 05 — Promises & API Calls

**Goal**: Master the two things you said are weakest — Promise chains vs async/await, and proper error handling. These assignments go deep on both.

---

## Level 1 — Chain to Async (Syntax Conversion + Understanding)

### The Concept
`.then()` chains and `async/await` are two syntaxes for the same thing. But `async/await` hides what's actually happening. If you only know one, you'll be confused when you see the other — and you'll write bugs when error handling gets tricky.

### Part A — Convert Chain to Async/Await

Here is a `.then()` chain. **Create a file `level1.js`** and write it out:

```js
// This fetches a user, then fetches their posts, then fetches the first post's comments
// Run this with: node level1.js

function fetchUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
      if (!response.ok) throw new Error(`User fetch failed: ${response.status}`);
      return response.json();
    });
}

function fetchPostsByUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => {
      if (!response.ok) throw new Error(`Posts fetch failed: ${response.status}`);
      return response.json();
    });
}

function fetchComments(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => {
      if (!response.ok) throw new Error(`Comments fetch failed: ${response.status}`);
      return response.json();
    });
}

// THE CHAIN — convert this to async/await
fetchUser(1)
  .then(user => {
    console.log('User:', user.name);
    return fetchPostsByUser(user.id);
  })
  .then(posts => {
    console.log('Posts count:', posts.length);
    const firstPost = posts[0];
    return fetchComments(firstPost.id);
  })
  .then(comments => {
    console.log('Comments on first post:', comments.length);
  })
  .catch(error => {
    console.error('Something failed:', error.message);
  });
```

**Your task:** Write `async function loadUserData(userId)` that does exactly the same thing using `async/await` + `try/catch`. Same console.logs, same error handling.

### Part B — The Catch Gotcha

Add these two functions to your file and run them:

```js
// Version 1 — .catch() that doesn't rethrow
function version1() {
  return fetch('https://jsonplaceholder.typicode.com/users/9999999')
    .then(res => res.json())
    .then(data => {
      console.log('Got data:', data);
    })
    .catch(err => {
      console.log('Caught in version1:', err.message);
      // Notice: we don't rethrow or return a rejected promise
    });
}

// Version 2 — .catch() that rethrows
function version2() {
  return fetch('https://jsonplaceholder.typicode.com/users/9999999')
    .then(res => res.json())
    .then(data => {
      console.log('Got data:', data);
    })
    .catch(err => {
      console.log('Caught in version2:', err.message);
      throw err; // rethrow
    });
}

version1().then(() => console.log('version1 chain continued'));
version2().then(() => console.log('version2 chain continued')).catch(() => console.log('version2 outer catch'));
```

**Your task:** Run this (you can use Node.js or a browser console). Observe the difference.
In a comment block, explain:
1. Why does `version1()` allow the chain to continue after `.catch()`?
2. When would this behavior be a bug? Give a real-world example.
3. What is the async/await equivalent of "catching but not rethrowing"?

### Part C — The `.json()` Error Trap

This is a bug many developers write:

```js
async function badErrorHandling(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error:', err.message);
  }
}
```

**Your task:** Identify the bug. When does this function return bad data silently? Write `goodErrorHandling(userId)` that fixes it.

**Hint:** Try calling `badErrorHandling(9999999)` — a user that doesn't exist. What does `response.ok` return for a 404? Does the `catch` block fire?

---

## Level 2 — Error Handling in Real Components

### What to Build
A user profile page that fetches data from an API. The fetch can fail in three different ways — you must handle each one distinctly.

### Spec

**File to create:** `UserProfile.jsx` (use inside a React app)

**API call to make:**
```js
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
```

**State shape:**
```js
const [user, setUser] = useState(null);
const [status, setStatus] = useState('idle');   // 'idle' | 'loading' | 'success' | 'error'
const [errorType, setErrorType] = useState(null);  // 'network' | 'not-found' | 'server'
```

**The three failure modes to handle:**

| Failure | How to detect | What to show |
|---------|--------------|-------------|
| Network error | `fetch()` throws (no internet) | "Network error — check your connection." + Retry button |
| Not found (404) | `response.ok === false && response.status === 404` | "User not found." (no retry) |
| Server error (5xx) | `response.ok === false && response.status >= 500` | "Server error — please try again later." + Retry button |

**Requirements:**
1. On mount, fetch the user. Show a loading state.
2. On success, show: name, email, phone, company name.
3. On each error type, show the correct message and correct buttons.
4. "Retry" button re-triggers the fetch. The status goes back to `'loading'`.
5. To test 404: use userId `9999999`. To test network error: disconnect from internet (or mock it — see hint below).

**Hint for testing network error:** Temporarily change the URL to `http://localhost:9999/users/1` — this will fail with a network error because nothing is running on that port.

**Hint for testing server error:** Use `https://httpstat.us/500` — it returns a 500 response.

**Requirements for the async function:**
```js
async function loadUser(userId) {
  // Must throw an object with shape: { type: 'network' | 'not-found' | 'server', message: string }
  // NOT a generic Error — callers need to know the type
}
```

The component's catch block reads `err.type` to decide what to show.

### Mastery Check
- Why do we throw an object `{ type, message }` instead of a plain `Error`? What does this enable in the component?
- If you put the `try/catch` inside `useEffect` vs outside it, does it matter? Why?
- What is the difference between `fetch` throwing and `response.ok` being false? Most tutorials only handle one — which one is more commonly missed?

---

## Level 3 — Parallel vs Sequential

### The Concept
Two patterns that look similar but behave very differently:

```js
// Sequential — total time = time(A) + time(B) + time(C)
const a = await fetchA();
const b = await fetchB();
const c = await fetchC();

// Parallel — total time = max(time(A), time(B), time(C))
const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);
```

And two variants of parallel that handle errors differently:

```js
// Promise.all — fails fast if ANY promise fails
// Promise.allSettled — waits for ALL, gives you each result + status
```

### What to Build
A user dashboard that loads multiple data sources. You'll implement it three times with different strategies.

**API calls to make:**
```js
// User profile
fetch('https://jsonplaceholder.typicode.com/users/1')

// User's posts
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')

// User's albums
fetch('https://jsonplaceholder.typicode.com/albums?userId=1')

// User's todos
fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
```

### Part A — Sequential (The Wrong Way)
Fetch all four endpoints sequentially. Add a `console.time('sequential')` before and `console.timeEnd('sequential')` after. Render all data when done.

### Part B — Parallel with Promise.all (Fast but Fragile)
Fetch all four in parallel using `Promise.all`. Time it. Compare to Part A.

Handle the error: if **any** request fails, show "Failed to load dashboard" — `Promise.all` gives you this for free.

### Part C — Parallel with Promise.allSettled (Resilient)
Fetch all four in parallel using `Promise.allSettled`. Each result has `{ status: 'fulfilled' | 'rejected', value?, reason? }`.

**Requirements for this part:**
- Show each section (Profile, Posts, Albums, Todos) independently.
- If one fails, show "Failed to load [section name]" in that section only — don't let one failure block the whole dashboard.
- The other sections must still render even if one fails.

**To simulate one failing:** Change the albums URL to `https://jsonplaceholder.typicode.com/albums-broken?userId=1`. The albums section should show an error, but profile/posts/todos should still load.

### Part D — Sequential After Parallel
Now do a combined pattern: fetch user profile AND user settings in parallel, then use the result to fetch a personalized recommendation.

```js
// Step 1: Parallel — fetch user and their preferences
const [user, prefs] = await Promise.all([
  fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
  fetch('https://jsonplaceholder.typicode.com/todos?userId=1').then(r => r.json()),
]);

// Step 2: Sequential — use both results to fetch something dependent
// In this fake example, fetch the post matching the count of completed todos
const completedCount = prefs.filter(t => t.completed).length;
const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${completedCount}`)
  .then(r => r.json());
```

Build a component that does this. Show the user name, how many todos are completed, and the "recommended post" title.

### Mastery Check
- What is the timing difference between sequential and parallel in your console? How does this scale with more endpoints?
- When would you choose `Promise.all` over `Promise.allSettled`? Give a real example of each being the right choice.
- In Part D, could the parallel step itself be done after the sequential step? Why would that be wrong?

---

## Level 4 — Race Conditions in React (The Most Important One)

### The Problem
This is the bug that causes "stale data" in search boxes and other dynamic fetching UIs. It's extremely common and subtle.

**The scenario:** You have a search input. As the user types, you fetch results from an API. The user types "re" → fetch fires. Then user types "rea" → another fetch fires. The "re" fetch is slower and arrives *after* "rea". Now you're showing results for "re" even though the input shows "rea". This is a race condition.

### What to Build
A user search component that is **immune to race conditions**.

**API to use:**
```js
// Search users by username (jsonplaceholder doesn't support search, so filter locally after fetching all)
fetch('https://jsonplaceholder.typicode.com/users')
```

### Spec

**File:** `UserSearch.jsx`

**State:**
```js
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);
const [status, setStatus] = useState('idle');
const [error, setError] = useState(null);
```

**Requirements:**

**1. Debouncing** — don't fire a fetch on every keystroke. Wait 400ms after the user stops typing. Use `useEffect` with a cleanup timeout.

**2. AbortController** — each new fetch must cancel the previous one. Use `AbortController` in `useEffect`'s cleanup. This is the correct fix for race conditions.

```js
useEffect(() => {
  if (!query.trim()) {
    setResults([]);
    return;
  }

  const controller = new AbortController();

  // YOUR FETCH HERE — pass { signal: controller.signal } to fetch()
  // If fetch is aborted, it throws a DOMException with name 'AbortError'
  // You must NOT set state if the request was aborted

  return () => {
    controller.abort(); // cancel on cleanup (query changed or component unmounted)
  };
}, [query]);
```

**3. Error handling:**
- If aborted: do nothing (don't set error state)
- If network error: set error message
- If no results: show "No users found for '[query]'"

**4. Loading state:** Show "Searching..." while a fetch is in flight. Clear it when results arrive.

**5. Filter logic:** Since the API returns all users, filter client-side by `username.toLowerCase().includes(query.toLowerCase())`.

**UI:**
- Text input with placeholder "Search by username..."
- Shows loading/error/results below
- Each result shows: username, name, email

**To observe race conditions (before you fix them):** Temporarily remove the AbortController and debounce. Type fast. Open Network tab in DevTools. Watch requests arrive out of order. Then add them back.

### Mastery Check
- What is the difference between debouncing and using AbortController? Does one replace the other?
- Why must you check `if (err.name === 'AbortError') return;` in your catch block?
- What happens if you call `setResults([])` after the request is aborted? Why is that wrong?
- If the component unmounts while a fetch is in flight, what happens without the AbortController cleanup? What React warning do you get?
- Could you solve the race condition by using a "request ID" counter instead of AbortController? How would that work? What's the difference?
