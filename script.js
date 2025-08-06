document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const floweringSection = document.getElementById("flowering-plants");
  const nonFloweringSection = document.getElementById("non-flowering-plants");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active-tab"));
      // Add active class to clicked button
      btn.classList.add("active-tab");

      const selectedType = btn.getAttribute("data-type");

      // Show only the selected type section
      if (selectedType === "flowering") {
        floweringSection.classList.remove("hidden");
        nonFloweringSection.classList.add("hidden");
      } else {
        floweringSection.classList.add("hidden");
        nonFloweringSection.classList.remove("hidden");
      }
    });
  });
});
