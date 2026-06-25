import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function About() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen px-5 py-16 transition-colors duration-300 md:px-10 ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <section className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            About Us
          </p>

          <h1
            className={`text-4xl font-bold tracking-tight md:text-5xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Building simple and useful digital experiences.
          </h1>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 md:text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We create modern, user-friendly solutions that help people and
            businesses turn ideas into real products.
          </p>
        </div>

        {/* Content cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <div
            className={`rounded-2xl p-7 shadow-md ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Who we are
            </h2>

            <p
              className={`mt-4 leading-7 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We are a passionate team focused on creating clean, responsive,
              and easy-to-use web experiences. Our goal is to make technology
              simple and accessible for everyone.
            </p>
          </div>

          <div
            className={`rounded-2xl p-7 shadow-md ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              What we do
            </h2>

            <p
              className={`mt-4 leading-7 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              From modern websites to interactive web applications, we focus on
              thoughtful design, strong performance, and a smooth user
              experience.
            </p>
          </div>
        </div>

        {/* Values */}
        <section className="mt-12 rounded-2xl bg-gray-950 p-8 text-white shadow-lg md:p-10">
          <h2 className="text-3xl font-bold tracking-tight">Our values</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Simple</h3>
              <p className="mt-2 leading-7 text-gray-300">
                We keep products clear, useful, and easy to understand.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Reliable</h3>
              <p className="mt-2 leading-7 text-gray-300">
                We focus on quality, performance, and maintainable code.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">User-focused</h3>
              <p className="mt-2 leading-7 text-gray-300">
                Every decision starts with making the experience better for
                users.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default About;