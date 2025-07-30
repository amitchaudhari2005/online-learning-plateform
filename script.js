// === Utility Function: Show Alert on Button Click ===
function showMessage() {
  alert("🎉 Hello! This message comes from script.js");
}

// === Utility Function: Change Background to a Random Color ===
function changeBackgroundColor() {
  const colors = ['#f4f4f4', '#cceeff', '#ffddcc', '#e6ffe6', '#fff0f5', '#fde68a', '#d1fae5'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  console.log(`Background changed to: ${randomColor}`);
}

// === Utility Function: Add Hover Feedback to Buttons ===
function enhanceButtons(selector) {
  const buttons = document.querySelectorAll(selector);
  buttons.forEach(btn => {
    btn.style.transition = 'all 0.3s ease';
    btn.addEventListener('mouseover', () => {
      btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseout', () => {
      btn.style.transform = 'scale(1)';
    });
  });
}

// === DOM Ready Handler ===
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Page is fully loaded. script.js is working!");

  // Delay background change after 3 seconds
  setTimeout(changeBackgroundColor, 3000);

  // Bind alert to button
  const clickButton = document.getElementById("clickButton");
  if (clickButton) {
    clickButton.addEventListener("click", showMessage);
  }

  // Apply button hover effects to all buttons
  enhanceButtons("button");
});

