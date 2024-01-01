// Set the date we're counting down to
const countDownDate = new Date("Dec 21, 2024 17:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown with fun text and emojis
  const countdownText = `
    Nog even geduld!
    Het Abcoude Twelve Diner begint over:
    ${days} dagen ${hours} uur ${minutes} minuten ${seconds} seconden! 🍽️🎉
  `;

  document.getElementById("countdown").innerHTML = countdownText;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "🎉 Het is tijd voor het Abcoude Twelve Diner! 🎉";
  }
}, 1000);
