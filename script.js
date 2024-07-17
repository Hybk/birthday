document.addEventListener("DOMContentLoaded", () => {
  const name = prompt("Enter the birthday person's name:");
  document.getElementById("name").textContent = name;
});
document.addEventListener("DOMContentLoaded", () => {
  let name = "";
  while (!/oluyemi|yemi/i.test(name)) {
    name = prompt(
      "Enter the birthday person's name (must include 'oluyemi' or 'yemi'):"
    );
    if (!/oluyemi|yemi/i.test(name)) {
      alert(
        "Invalid name. Please enter a name that includes 'oluyemi' or 'yemi'."
      );
    }
  }
  document.getElementById("name").textContent = name;
});
