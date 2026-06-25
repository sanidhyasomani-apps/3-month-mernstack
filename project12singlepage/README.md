# MyWebsite

A responsive multi-page website built with React, React Router DOM, Tailwind CSS, and Context API.

The project includes a Home page, About page, Contact page, responsive navigation, active links, a contact form, and a dark/light theme toggle.

## Features

- Multi-page navigation using React Router DOM
- Home, About, and Contact pages
- Responsive header/navigation bar
- Active navigation links using `NavLink`
- Dark and light theme toggle
- Theme management using Context API
- Contact form with controlled inputs
- Form validation using `required`
- Success message after form submission
- Responsive UI built with Tailwind CSS
- Hover effects, transitions, cards, and shadows

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- Context API

## Pages

| Route | Page |
| --- | --- |
| `/` | Home page |
| `/about` | About page |
| `/contact` | Contact page |

## Project Structure

```text
src/
│
├── component/
│   └── Header.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css