# 🚗 Car Expo

A simple React application that showcases a collection of luxury and sports cars using reusable Card components. Built with React and Tailwind CSS to demonstrate component-based architecture, props, and responsive UI design.

## Features

* Display multiple car cards
* Reusable Card component
* Dynamic content using props
* Responsive layout with Flexbox
* Clean and modern UI with Tailwind CSS
* Hover effects on cards

## Technologies Used

* React.js
* Tailwind CSS
* JavaScript (ES6+)
* Vite

## Project Structure

```text
src/
├── Card/
│   └── Card.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Props Used

Each card receives the following props:

* `title` - Car name
* `image` - Car image URL
* `description` - Short car description
* `price` - Car price

Example:

```jsx
<Card
  title="Tesla Model S"
  image="image-url"
  description="Luxury electric sedan"
  price="$100,000"
/>
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd car-expo
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## Learning Outcomes

* Understanding React components
* Working with props
* Creating reusable UI components
* Using Tailwind CSS for styling
* Building responsive layouts
* Implementing hover effects

## Future Improvements

* Search cars by name
* Filter by brand
* Sort by price
* Add car details page
* Fetch data from an API
* Dark mode support

## Author

Sanidhya Somani
