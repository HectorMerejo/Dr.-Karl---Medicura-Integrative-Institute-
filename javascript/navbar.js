document.addEventListener("DOMContentLoaded", function() {
  fetch('../js-html/navbar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar-placeholder').innerHTML = data;
      });
});
