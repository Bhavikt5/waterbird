const total = 7;
let cur = 1;
const dotsEl = document.getElementById("dots");
for (let i = 1; i <= total; i++) {
  const b = document.createElement("button");
  b.className = "progress-dot" + (i === 1 ? " active" : "");
  b.setAttribute("aria-label", "Slide " + i);
  b.onclick = () => goTo(i);
  dotsEl.appendChild(b);
}
function goTo(n) {
  document.getElementById("slide-" + cur).classList.remove("active");
  dotsEl.children[cur - 1].classList.remove("active");
  cur = n;
  document.getElementById("slide-" + cur).classList.add("active");
  dotsEl.children[cur - 1].classList.add("active");
  document.getElementById("counter").textContent = cur + " / " + total;
  document.getElementById("prev-btn").disabled = cur === 1;
  document.getElementById("next-btn").disabled = cur === total;
}
function changeSlide(dir) {
  const n = cur + dir;
  if (n >= 1 && n <= total) goTo(n);
}
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") changeSlide(1);
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") changeSlide(-1);
});
