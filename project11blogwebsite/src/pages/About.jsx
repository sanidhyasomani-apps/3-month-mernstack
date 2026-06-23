import React from "react";
import { Link } from "react-router-dom";
function About() {
    const skills=["React","React Router","Tailwind CSS","JavaScript"]
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl bg-white rounded-2xl shadow-xl p-10">
         <Link
            to="/"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300"
          >
            ← Back to Home
          </Link>
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
          About BlogSphere
        </h1>

        <p className="text-lg text-gray-600 text-center mb-10">
          A platform where ideas, stories, and knowledge come together.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Mission
            </h2>

            <p className="text-gray-700 leading-8">
              BlogSphere was created to provide a simple and engaging space for
              people to share their thoughts, experiences, and expertise.
              Whether you're a beginner learning something new or an expert
              sharing insights, every voice matters here.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              What You Can Do
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>📖 Read articles on various topics</li>
              <li>🚀 Explore ideas and gain knowledge</li>
              <li>🌍 Connect through meaningful content</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Built with Modern Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill)=>(
            <span className="px-4 py-2 bg-white rounded-lg shadow">{skill}</span>
             ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600">Designed and Developed by</p>
          <h3 className="text-2xl font-bold text-blue-600 mt-2">
            Sanidhya Somani
          </h3>
         
        </div>
      </div>
    </div>
  );
}

export default About;
