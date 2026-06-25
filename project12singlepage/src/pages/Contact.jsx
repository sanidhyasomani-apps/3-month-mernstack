import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Contact() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleformdata(e) {
    const { name, value } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formdata.name.trim() === "" ||
      formdata.email.trim() === "" ||
      formdata.message.trim() === ""
    ) {
      return;
    }

    setFormdata({
      name: "",
      email: "",
      message: "",
    });

    setSubmitted(true);
  }

  return (
    <main
      className={`min-h-screen px-5 py-16 transition-colors duration-300 md:px-10 ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <section className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Contact Us
          </p>

          <h1
            className={`mt-3 text-4xl font-bold tracking-tight md:text-5xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Let’s start a conversation.
          </h1>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 md:text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have a question, idea, or project in mind? Send us a message and we
            will get back to you soon.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Contact information */}
          <div className="rounded-2xl bg-gray-950 p-8 text-white shadow-lg md:p-10">
            <h2 className="text-2xl font-bold">Get in touch</h2>

            <p className="mt-4 leading-7 text-gray-300">
              You can contact us through email or send a message using the form.
              We are happy to hear from you.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Email
                </p>

                <a
                  href="mailto:hello@example.com"
                  className="mt-1 inline-block text-lg font-medium transition hover:text-blue-400"
                >
                  hello@example.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Phone
                </p>

                <a
                  href="tel:+919876543210"
                  className="mt-1 inline-block text-lg font-medium transition hover:text-blue-400"
                >
                  +91 98765 43210
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Location
                </p>

                <p className="mt-1 text-lg font-medium">Indore, India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`rounded-2xl p-8 shadow-lg md:p-10 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Send a message
            </h2>

            {submitted && (
              <p className="mt-4 rounded-lg bg-green-100 px-4 py-3 text-sm font-medium text-green-700">
                Your message has been sent successfully.
              </p>
            )}

            {/* Name */}
            <div className="mt-6">
              <label
                htmlFor="name"
                className={`text-sm font-semibold ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formdata.name}
                onChange={handleformdata}
                required
                placeholder="Enter your name"
                className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 ${
                  isDark
                    ? "border-gray-600 bg-gray-700 text-white placeholder:text-gray-400"
                    : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
                }`}
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label
                htmlFor="email"
                className={`text-sm font-semibold ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formdata.email}
                onChange={handleformdata}
                required
                placeholder="Enter your email"
                className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 ${
                  isDark
                    ? "border-gray-600 bg-gray-700 text-white placeholder:text-gray-400"
                    : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
                }`}
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className={`text-sm font-semibold ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formdata.message}
                onChange={handleformdata}
                rows="5"
                required
                placeholder="Write your message..."
                className={`mt-2 w-full resize-none rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 ${
                  isDark
                    ? "border-gray-600 bg-gray-700 text-white placeholder:text-gray-400"
                    : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
                }`}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;