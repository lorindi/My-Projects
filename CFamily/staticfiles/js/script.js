const button = document.querySelector(".cystic-fibrosis-title");
const content = document.querySelector(".cystic-fibrosis-dropdown-content");

button.addEventListener("click", () => {
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});
