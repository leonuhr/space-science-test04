# How the Web Actually Works

> A clear, visual, interactive demonstration of how the exact same application evolves across frontend technologies.

This repository is not a collection of disconnected demos. It is **one single application (a Todo List)**, progressively enhanced through 5 stages of web technology. It is designed as an interactive educational hub to help beginners and students instantly visualize what each layer of the web actually *does*.

## 🎯 The Concept

Frontend development can be overwhelming. Beginners often ask: *"Why do we need CSS if we have HTML?"* or *"Why do we use React instead of just JavaScript?"*

This project answers those questions visually. By navigating through the 5 stages, you can see the exact same Todo List built in 5 different ways, with an interactive X-Ray view showing the core concepts and the source code side-by-side with the live preview.

## 🚀 The 5 Stages of Web Evolution

1. **HTML (`/html`)**: Structure only. The raw skeleton of the web relying entirely on the browser's default appearance.
2. **CSS (`/css`)**: Visual presentation. We add a modern, glassmorphism stylesheet. The app looks beautiful, but the buttons still do nothing.
3. **JavaScript (`/js`)**: Behavior and logic. We write imperative scripts to manipulate the DOM, finally making the Todo list interactive.
4. **React (`/react`)**: Components and global state. We rebuild the app using declarative UI, showing how React simplifies complex interfaces.
5. **TypeScript (`/typescript`)**: Static typing. We add compile-time safety, demonstrating how interfaces prevent bugs before they happen.

## 📂 Project Structure

```text
.
├── index.html           # The Interactive Learning Hub (Landing Page)
├── xray.css             # The split-screen UI framework used across all stages
├── html/                # Stage 1: Pure HTML structure
├── css/                 # Stage 2: HTML + CSS Styling
├── js/                  # Stage 3: HTML + CSS + Vanilla JS Logic
├── react/               # Stage 4: React Components (Babel Standalone for pure demo)
│   ├── index.html       # React setup
│   └── src/             # React source code (App.jsx, TodoItem.jsx)
└── typescript/          # Stage 5: React + TypeScript
    ├── index.html       # TypeScript setup
    └── src/             # TypeScript source code (App.tsx, TodoItem.tsx, types.ts)
```

## 🛠️ How to Use This Repo

This repository is built to be **100% statically deployable** without any complex build steps. There is no need to run `npm install` or configure a bundler. 

The React and TypeScript stages utilize `babel-standalone` to compile the modern syntax directly in the browser. This ensures that the source code remains readable, clean, and immediately executable as an educational tool.

To run the project:
1. Clone the repository.
2. Open `index.html` in your browser.
3. Use the navigation hub to explore each stage.

## ✨ Features

- **Split-Screen X-Ray UI**: Code and concepts on the left, live preview on the right.
- **Premium Design**: Modern glassmorphism UI with smooth animations.
- **Interactive Explanations**: Toggle CSS on/off, disable JS, and see live TypeScript errors.
- **Static Hosting Ready**: Instantly deployable to Cloudflare Pages, GitHub Pages, or Vercel.
