# ⚡ Advanced React Counter (Lab 10.1)

🔗 **Live Demo:** [https://chadgarc.github.io/lab10.1-ReactCounter/](https://chadgarc.github.io/lab10.1-ReactCounter/)

## 🚀 Features

- **Core Counter Controls**: Increment, decrement, and reset the counter seamlessly.
- **Custom Step Value**: Dynamically configure the step increment/decrement value using a dedicated number input.
- **History Tracking**: Visual record of all previous count changes with an automatic, scroll-contained view.
- **Auto-Save with LocalStorage**:
  - Automatically persists the count and history between browser sessions.
  - Implements a simulated debounced auto-save with a **cleanup function** (`clearTimeout`) to prevent race conditions during rapid clicks.
- **Keyboard Shortcuts**:
  - Press <kbd>↑</kbd> (**ArrowUp**) to increment.
  - Press <kbd>↓</kbd> (**ArrowDown**) to decrement.
  - Handled via `useEffect` with proper event listener cleanup (`removeEventListener`) on unmount.
- **Modern Responsive Design**: Clean UI styled with Tailwind CSS v4 and DaisyUI.

---

## 🧠 Learning Objectives & React Concepts Covered

1. **State Management (`useState`)**:
   - Managing multiple interconnected state variables (`currentCount`, `countHistory`, `stepValue`, `changeMessage`).
   - Initializing state directly from `localStorage`.
2. **Side Effects (`useEffect`)**:
   - Synchronizing React state with the browser's `localStorage` and status messages.
   - Attaching and detaching global window event listeners.
3. **Cleanup Functions**:
   - Clearing timeouts to eliminate memory leaks and avoid competing state updates.
   - Removing event listeners to prevent duplicate listener accumulation.
4. **CSS Flexbox & Overflow**:
   - Ensuring dynamic lists scroll smoothly within fixed parents using `min-h-0` and `overflow-y-auto`.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Counter/
│   │   └── Counter.tsx        # Counter display, buttons & step input
│   ├── History/
│   │   └── History.tsx        # Scrollable count history list
│   └── UseEffect/
│       └── UseEffect.tsx      # Auto-save & keyboard shortcut side effects
├── App.tsx                    # Root state management & component assembly
├── main.tsx                   # Application entry point
└── index.css                  # Global styles & Tailwind configuration
```
