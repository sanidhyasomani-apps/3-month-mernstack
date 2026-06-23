import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      description:
        "Learn the basics of React and build modern user interfaces.",
    },
    {
      id: 2,
      title: "Understanding useEffect",
      description: "A complete guide to React's useEffect hook.",
    },
    {
      id: 3,
      title: "React Router Tutorial",
      description: "Learn how to add navigation and routing in React apps.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Blog</h1>

        <Link
          to="/about"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          About
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h2 className="text-5xl font-bold mb-4">Welcome to My Blog App</h2>
        <p className="text-gray-600 text-lg">
          Read articles, share ideas, and learn something new every day.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 pb-10 ">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-3">{blog.title}</h3>

            <p className="text-gray-600 mb-4">{blog.description}</p>

            <Link
              to={`/blog/${blog.id}`}
              className="text-blue-600 font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
