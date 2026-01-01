function showThankYou() {
  setTimeout(() => {
    document.querySelector(".contact-form").style.display = "none";
    document.getElementById("thankyou-message").style.display = "block";
  }, 500);
}
