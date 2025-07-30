// This function shows an alert when the button is clicked
function showMessage() {
  alert("Hello! This message comes from script.js");
}

// Change the background color randomly
function changeBackgroundColor() {
  const colors = ['#f4f4f4', '#cceeff', '#ffddcc', '#e6ffe6', '#fff0f5'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Run after the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page is fully loaded. script.js is working!");

  // Optional: change background after 3 seconds
  setTimeout(changeBackgroundColor, 3000);

  // Optional: set up more interactive logic
  const button = document.getElementById("clickButton");
  if (button) {
    button.addEventListener("click", showMessage);
  }
});
