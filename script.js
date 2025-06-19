// ================== Loader (optional) ==================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Duration = Half of your video length (in milliseconds)
  const showTime = 5000;

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, showTime);
});

const appleImage = document.getElementById("appleImage");
const appleProducts = [
  "apple.jpeg",
  "intro.jpg",
  "second.jpg",
  "apple.jpeg",
  "third1.jpg",
  "fourth.jpg"
];

let index = 0;

setInterval(() => {
  appleImage.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % appleProducts.length;
    appleImage.src = appleProducts[index];
    appleImage.style.opacity = 1;
  }, 500);
}, 4000); // Every 4 seconds

// ================== Light/Dark Mode ==================
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", newTheme);
  });
}

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (toggleBtn) {
      toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    }
  }
});

// ================== Parallax Scroll ==================
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const parallax = document.getElementById("parallaxBg");
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

