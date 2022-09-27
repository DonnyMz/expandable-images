const grouping = document.getElementById("image-section").children;

const removeClass = () => {
  for (const e of grouping) {
    e.classList.remove("active");
  }
};

for (const e of grouping) {
  const addClass = () => e.classList.add("active");
  e.addEventListener("click", () => {
    removeClass();
    addClass();
  });
}
console.log(removeClass());
