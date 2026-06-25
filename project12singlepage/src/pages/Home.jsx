import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Hero section */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Welcome
          </p>

          <h1
            className={`mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Build better experiences with simple, modern design.
          </h1>

          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-7 md:text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We create clean, responsive, and user-friendly web experiences that
            help ideas become useful digital products.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Get in Touch
            </Link>

            <Link
              to="/about"
              className={`rounded-lg border px-6 py-3 font-semibold transition ${
                isDark
                  ? "border-gray-600 bg-gray-800 text-white hover:bg-gray-700"
                  : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              What We Offer
            </p>

            <h2
              className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Everything you need for a better web experience.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div
              className={`rounded-2xl border p-7 shadow-sm ${
                isDark
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                01
              </div>

              <h3
                className={`mt-5 text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Modern Design
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Clean layouts and thoughtful interfaces that look good on every
                screen size.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-7 shadow-sm ${
                isDark
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                02
              </div>

              <h3
                className={`mt-5 text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Responsive Layout
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Websites that work smoothly on mobile, tablet, laptop, and
                desktop devices.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-7 shadow-sm ${
                isDark
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600">
                03
              </div>

              <h3
                className={`mt-5 text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                User Focused
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Easy navigation and clear content so visitors can quickly find
                what they need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-5xl rounded-2xl bg-gray-950 px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Have an idea you want to build?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Tell us about your project and we will help you turn it into a
            useful, modern web experience.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;