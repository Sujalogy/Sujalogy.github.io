// JavaScript to update the "mySkills" span tag every 1.5 seconds
document.addEventListener("DOMContentLoaded", function () {
  const skillsSpan = document.getElementById("mySkills");
  const skills = [
    "Coder",
    "Programmer",
    "Node Developer",
    "Full-Stack Developer",
  ];
  let index = 0;

  setInterval(function () {
    skillsSpan.style.animation = "slideOut 0.5s ease-in-out"; // Apply the slide-out animation
    setTimeout(function () {
      skillsSpan.textContent = skills[index];
      skillsSpan.style.animation = "slideIn"; // Apply the slide-in animation
      index = (index + 1) % skills.length;
    }, 4000); // Wait for 0.5 seconds (duration of the slide-out animation)
  }, 2500); // Change every 1.5 seconds (1500 milliseconds)
});

