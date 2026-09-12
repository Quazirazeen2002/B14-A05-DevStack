# 🧱 Dev Stack

Dev Stack is a small web app for developers who are starting a new project and
can't decide what to build it with. Instead of googling "React vs Vue" for the
tenth time, you browse a curated list of frontend, backend, database, and
tooling options, compare them at a glance, and drop the ones you like into a
personal "stack" that you can review, trim, and clear whenever you want.

**Live Site:** _add your deployed link here_
**Repository:** _add your GitHub repo link here_

---

## 🛠️ Built With

- [React](https://react.dev/) — component-driven UI
- [Vite](https://vite.dev/) — dev server & build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [React-Toastify](https://fkhadra.github.io/react-toastify/) — toast notifications
- Plain JSON — the technology catalog that powers the whole grid

---

## 📦 What's Inside

**Navbar** — sticky at the top, with the brand mark, centered links, and Sign
In / Sign Up on desktop. Below the `md` breakpoint it collapses into a
hamburger + centered logo + auth buttons, with a slide-down link list on
toggle.

**Hero** — a two-tone heading (plain text plus the shared gradient), a short
pitch, an "Explore Technologies" button that jumps straight to the catalog,
and an outlined "Learn More" button.

**Technology catalog** — 15 technologies spanning every required category
(Frontend, Backend, Database, Language, Styling, DevOps, Tools), loaded from
`public/technologies.json` at runtime rather than hardcoded into a component.
Each card shows an icon, badge, name, description, category chip, difficulty,
and star rating, laid out 3-up on desktop, 2-up on tablet, and 1-up on mobile.

**Your Stack sidebar** — sits beside the grid on desktop and stacks below it
on mobile. Shows an empty-state placeholder until something is added, then
lists each selected technology with a one-click remove (✕), plus a
"Remove All" action once the stack isn't empty. Adding a technology that's
already in the stack is blocked with a warning instead of a duplicate entry,
and that card's button flips to a disabled "✓ Added to Stack" state.

**Footer** — brand block with social links, three link groups (Product,
Company, Legal), and a bottom bar with copyright and legal links.

**Toasts & loading state** — every add, duplicate-add attempt, remove, and
remove-all fires a react-toastify notification, and the catalog fetch shows a
spinner (via `useTechnologies.js` + `Loader.jsx`) while `technologies.json` is
loading.

---

## 🚀 Getting Started

```bash
npm install
npm run dev      # start the local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

---

## 🗂️ Project Structure

```
public/
  technologies.json   # the technology catalog, fetched at runtime
src/
  App.jsx             # owns the "stack" state and toast notifications
  index.css           # Tailwind import + the shared gradient tokens
  hooks/
    useTechnologies.js # fetches the JSON catalog, exposes loading/error state
  components/
    Navbar.jsx
    Hero.jsx
    TechnologiesSection.jsx
    TechCard.jsx
    StackSidebar.jsx
    Loader.jsx
    Footer.jsx
```

---

## ✨ Features

1. **Build-your-own stack, live.** Add any technology to your stack with one
   click and see the sidebar update instantly — no page reloads, no
   duplicates, and a one-click "Remove All" when you want to start over.
2. **Data-driven catalog.** Every technology card is rendered from a single
   `technologies.json` file that's fetched at runtime, so adding, editing, or
   removing a technology never means touching component code.
3. **A UI that feels considered, not generated.** One shared gradient token
   drives the brand name, the hero highlight, and every primary button, and
   the whole layout adapts cleanly from a one-column phone view up to the
   three-column desktop grid with a sticky sidebar.

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-looking markup directly
inside JavaScript. Under the hood it compiles down to regular
`React.createElement` calls. We use it because it makes components far easier
to read and write — you can see the structure of the UI and the logic that
drives it in the same place, instead of jumping between a markup file and a
script file.

**2. What is the difference between props and state?**
Props are values a component receives from its parent — they're read-only
from the component's own point of view, and they let a parent configure how a
child looks or behaves. State is data a component owns and manages itself,
and it can change over time in response to user actions. In this project, a
`TechCard`'s `tech` object is a prop passed down from `App`, while the list of
technologies the user has added to their stack is state that lives in `App`.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` gives a component a piece of memory that survives between renders,
plus a function to update it and trigger a re-render. I used it in `App.jsx`
to hold the `stack` array (the technologies the user has selected) and in
`Navbar.jsx` to track whether the mobile menu is open or closed.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets a component run side effects — things like fetching data,
subscriptions, or timers — after it renders, separately from the render
itself. Fetching is asynchronous and isn't something you can do directly
while a component is rendering, so `useTechnologies.js` uses `useEffect` to
kick off the `fetch("/technologies.json")` call once, right after the
component first mounts, and stores the result in state when it arrives.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items apart between renders, so when the list
changes — an item is added, removed, or reordered — React knows exactly which
DOM elements to keep, update, or throw away instead of re-rendering
everything from scratch. Without a stable, unique key, React can mix up
which state belongs to which item and you get subtle rendering bugs.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition,
using plain JavaScript (`if`, ternaries, or `&&`) inside your component. In
`StackSidebar.jsx`, I check `count === 0` to decide whether to show the
"Your stack is empty." placeholder or the actual list of selected
technologies with their remove buttons.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through props — for example, `App`
passes the `technologies` array and the `stack` array down to
`TechnologiesSection`, which passes individual `tech` objects down to each
`TechCard`. For a child to send information back up, the parent passes a
function down as a prop, and the child calls that function with whatever data
it wants to share. That's how `TechCard`'s "Add to Stack" button tells `App`
which technology was clicked — it calls the `onAdd(tech)` prop it was given.
