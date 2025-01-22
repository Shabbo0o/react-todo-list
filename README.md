# React Todo List with LocalStorage and Tailwind CSS

This project is a simple Todo List application built using React. It features the ability to add, complete, and delete todos, with the state persisting across page reloads using `localStorage`.

## Features

- Add new todos
- Mark todos as completed
- Delete todos
- Persistent state using `localStorage`

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shabbo0o/react-todo-list.git
   ```
2. Navigate to the project directory:
   ```bash
       cd react-todo-list
   ```
3. Install the dependencies:
   ```bash
       npm install
   ```

## Usage

1. Start the development server:
   ```bash
       npm run dev
   ```
2. Open your browser and navigate to http://localhost:5173.

## Code Overview

`App.js`

- The main component of the application.
- Manages the state of todos using React's useState hook.
- Uses useEffect to load and save todos from/to localStorage.

## `localStorage` Integration

- The todos are loaded from localStorage when the app initializes.
- Every time the todos state changes, the new state is saved to localStorage.

## Dependencies

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
