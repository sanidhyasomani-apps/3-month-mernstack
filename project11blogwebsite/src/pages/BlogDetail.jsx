import React from "react";
import { useParams, Link } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      content:
        "React is a JavaScript library used for building user interfaces. It helps create reusable UI components.",
    },
    {
      id: 2,
      title: "Understanding useEffect",
      content:
        "useEffect lets you perform side effects in function components such as API calls and subscriptions.",
    },
    {
      id: 3,
      title: "React Router Tutorial",
      content:
        "React Router enables navigation between different pages without reloading the browser.",
    },
  ];

 const blog=blogs.find((b)=>b.id===Number(id))

  if (!blog) {
    return (
      <div className="text-center mt-10 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
         <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <p className="text-gray-700 leading-8 mb-6">
          {blog.content}
        </p>

        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default BlogDetail;