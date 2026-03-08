# Mastery Assignments — React State & Async

These assignments are designed to take you from "can build with reference" to **true mastery** — meaning you can build these patterns from memory, debug them under pressure, and know *why* each piece exists.

---

## How to Work Through These

- **Build from scratch** — no copy-pasting from Naresh React. The struggle is the learning.
- **No solutions are provided.** Your existing code in `Naresh React/` is your reference when stuck.
- Each track has multiple levels. **Do not skip levels** — each one introduces a gotcha that the next level depends on.
- After finishing each assignment, **delete your code and rebuild it** without looking. If you can do that, you've hit mastery.

---

## Tracks

| # | Track | Key Skills | Levels |
|---|-------|-----------|--------|
| 01 | [useContext](./01-useContext/assignment.md) | createContext, Provider, useContext, context splitting | 3 |
| 02 | [useReducer](./02-useReducer/assignment.md) | reducer pattern, complex state, action design | 3 |
| 03 | [Context + useReducer](./03-context-reducer/assignment.md) | global state without Redux, provider pattern | 2 |
| 04 | [Redux Toolkit](./04-redux/assignment.md) | createSlice, configureStore, thunks, selectors | 3 |
| 05 | [Promises & API Calls](./05-promises-api/assignment.md) | chaining, async/await, error handling, race conditions | 4 |

---

## Recommended Order

1. `01-useContext` Level 1 → Level 2 → Level 3
2. `02-useReducer` Level 1 → Level 2 → Level 3
3. `03-context-reducer` Level 1 → Level 2 (combines 01 + 02)
4. `05-promises-api` Level 1 → Level 2 → Level 3 → Level 4
5. `04-redux` Level 1 → Level 2 → Level 3 (builds on 03 and 05)

---

## Mastery Checklist

Before moving to the next level, make sure you can answer:
- **useContext**: Why does the whole tree re-render when context changes? How do you prevent it?
- **useReducer**: What is the difference between reducer state and component state? When does useReducer win over useState?
- **Context + useReducer**: What problem does this solve that neither solves alone?
- **Redux**: What does createSlice actually generate? What is the difference between an action and an action creator?
- **Promises**: What is the difference between `Promise.all` failing fast vs `Promise.allSettled`? What happens to a `.catch()` if you don't rethrow?
