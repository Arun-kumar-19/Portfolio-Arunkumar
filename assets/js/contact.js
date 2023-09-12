emailjs.init("wY1qLMyiLvIOfoZSp");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector(
      "#contact-form input[name='name']"
    );
    const emailInput = document.querySelector(
      "#contact-form input[name='email']"
    );
    const subjectInput = document.querySelector(
      "#contact-form input[name='subject']"
    );
    const messageInput = document.querySelector(
      "#contact-form textarea[name='message']"
    );

    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;

    emailjs
      .send("service_2ul0imd", "template_vqjyqni", {
        to_email: "arun19ict@gmail.com",
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      })
      .then(
        function (response) {
          console.log("Email sent successfully:", response);
          // Optionally, you can display a success message to the user
          const formMessage = document.querySelector(".form-message");
          formMessage.innerHTML = "Thank you! Your message has been sent.";
          formMessage.style.color = "green";

          // Clear input fields after successful submission
          nameInput.value = "";
          emailInput.value = "";
          subjectInput.value = "";
          messageInput.value = "";
        },
        function (error) {
          console.error("Email sending failed:", error);
          // Optionally, you can display an error message to the user
          const formMessage = document.querySelector(".form-message");
          formMessage.innerHTML =
            "Sorry, there was an error sending your message.";
          formMessage.style.color = "red";
        }
      );
  });
