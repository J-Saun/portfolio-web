const nav = document.querySelector("#primary-nav");
const navBtn = document.querySelector('button[aria-controls="primary-nav"]');
const navIcon = navBtn.querySelector("img");

navBtn.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-mobile-visible");

  if (visibility === "false") {
    nav.setAttribute("data-mobile-visible", "true");
    navIcon.setAttribute("src", "x-solid.svg");
  } else {
    nav.setAttribute("data-mobile-visible", "false");
    navIcon.setAttribute("src", "bars-solid.svg");
  }
});
