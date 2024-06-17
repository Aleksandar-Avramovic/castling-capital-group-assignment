const validateName = () => {
  const name = document.getElementById("name").value;
  const nameMsg = document.getElementById("name-msg");

  nameMsg.textContent = "";
  nameMsg.classList.remove("shown");

  if (!name) {
    nameMsg.classList.add("shown");
    nameMsg.textContent = "The field is required";
    return false;
  }
  return true;
};

const validateEmail = () => {
  const email = document.getElementById("email").value;
  const emailMsg = document.getElementById("email-msg");

  emailMsg.textContent = "";

  if (!email) {
    emailMsg.classList.add("shown");
    emailMsg.textContent = "The field is required";
    return false;
  }
  return true;
};

const validatePhone = () => {
  const phone = document.getElementById("phone").value;
  const phoneMsg = document.getElementById("phone-msg");

  phoneMsg.textContent = "";

  if (!phone) {
    phoneMsg.classList.add("shown");
    phoneMsg.textContent = "The field is required";
    return false;
  }
  return true;
};

const validateMessage = () => {
  const message = document.getElementById("message").value;
  const messageMsg = document.getElementById("message-msg");

  messageMsg.textContent = "";

  if (!message) {
    messageMsg.classList.add("shown");
    messageMsg.textContent = "The field is required";
    return false;
  }
  return true;
};

// Validate form on submit
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
    console.log("Form data is valid.");
  }
});

// Validate fields on change
document.getElementById("name").addEventListener("change", validateName);
document.getElementById("email").addEventListener("change", validateEmail);
document.getElementById("phone").addEventListener("change", validatePhone);
document.getElementById("message").addEventListener("change", validateMessage);
