const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const contactData = {
    name,
    email,
    message
  };

  sessionStorage.setItem(
    "contactData",
    JSON.stringify(contactData)
  );

  alert("Data stored successfully!");

  form.reset();
});