# React Todo List App

## Overview

A simple and responsive Todo List application built with React and Tailwind CSS. Users can add tasks, delete tasks, and track completed and pending tasks using checkboxes.

## Features

* Add new tasks
* Delete existing tasks
* Mark tasks as completed
* Display completed task count
* Display pending task count
* Responsive UI with Tailwind CSS
* Uses React Hooks (`useState`)

## Technologies Used

* React.js
* JavaScript (ES6+)
* Tailwind CSS

## Project Structure

```text
src/
├── App.jsx
├── main.jsx
└── index.css
```

## How It Works

### Adding a Task

* User enters a task in the input field.
* Clicking the **Add** button appends the task to the todo list.
* Empty tasks are not allowed.

### Deleting a Task

* Each task contains a **Delete** button.
* Clicking the button removes the selected task from the list using the `filter()` method.

### Completing a Task

* Each task has a checkbox.
* When checked, the completed count increases.
* When unchecked, the completed count decreases.

### Pending Tasks

Pending tasks are calculated as:

```javascript
array.length - check
```

where:

* `array.length` = total tasks
* `check` = completed tasks

## React Concepts Used

* Functional Components
* useState Hook
* Event Handling
* Controlled Components
* Array Mapping with `map()`
* Array Filtering with `filter()`
* Conditional State Updates

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd todo-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## Future Improvements

* Edit tasks
* Local Storage support
* Dark Mode
* Task completion persistence
* Filter completed and pending tasks
* Due dates and priorities

## Learning Outcomes

This project helped practice:

* React state management
* Controlled form inputs
* Rendering dynamic lists
* Handling user events
* Updating arrays immutably
* Building responsive interfaces with Tailwind CSS
