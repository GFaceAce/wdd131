const form = document.querySelector("#eventForm");
const typeSelect = document.querySelector("#type");
const extraContainer = document.querySelector("#extraContainer");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const errors = document.querySelector("#errors");
const output = document.querySelector("#output");

function updateExtraField() {
  const type = typeSelect.value;

  if (type === "student") {
    extraContainer.hidden = false;
    extraLabel.textContent = "Student I#";
    extraInput.required = true;
    extraInput.value = "";
  }
  else if (type === "guest") {
    extraContainer.hidden = false;
    extraLabel.textContent = "Access Code";
    extraInput.required = true;
    extraInput.value = "";
  }
  else {
    extraContainer.hidden = true;
    extraInput.required = false;
    extraInput.value = "";
  }
}

typeSelect.addEventListener("change", updateExtraField);
updateExtraField();

function isFutureDate(dateValue) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const chosenDate = new Date(dateValue);
  return chosenDate > today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  errors.innerHTML = "";
  output.innerHTML = "";

  const errorMessages = [];

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const eventDate = form.eventDate.value;
  const extraValue = extraInput.value.trim();

  if (!isFutureDate(eventDate)) {
    errorMessages.push("Event date must be later than today's date.");
  }

  if (type === "student") {
    const studentRegex = /^\d{9}$/;

    if (!studentRegex.test(extraValue)) {
      errorMessages.push("Student I# must contain exactly 9 digits.");
    }
  }

  if (type === "guest") {
    if (extraValue !== "EVENT131") {
      errorMessages.push("Guest access code must be EVENT131.");
    }
  }

  if (errorMessages.length > 0) {
    errors.innerHTML = `
      <h3>Please fix the following errors:</h3>
      <ul>
        ${errorMessages.map(error => `<li>${error}</li>`).join("")}
      </ul>
    `;
    return;
  }

  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${email}</p>
    <p>${type}</p>
    <p>${eventDate}</p>
  `;

  form.reset();
  updateExtraField();
});