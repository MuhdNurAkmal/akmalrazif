document.addEventListener('DOMContentLoaded', function () {
  let menuIcon = document.querySelector("#menu-icon");
  let navbarLinks = document.querySelectorAll(".navbar a");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbarLinks.forEach(link => link.classList.toggle("active-link"));
  };

  navbarLinks.forEach(link => {
    link.addEventListener('click', function () {
      navbarLinks.forEach(otherLink => otherLink.classList.remove("active-link"));
      this.classList.add("active-link");
    });
  });
});

const jobTitles = ["Aspiring Data Scientist", "Computer Vision Intern"];
  let index = 0;

  function updateJobTitle() {
    document.getElementById("jobTitle").textContent = jobTitles[index];
    index = (index + 1) % jobTitles.length;
  }

  setInterval(updateJobTitle, 2000);