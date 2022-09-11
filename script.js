var dropdown = document.getElementsByClassName("nav__side-bar-dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    // this.classList.toggle("active");
    var icon = this.children[0];
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      icon.classList.remove("fa-solid")
      icon.classList.remove("fa-caret-up")
      icon.classList.add("fa-solid")
      icon.classList.add("fa-caret-down")
    } else {
      dropdownContent.style.display = "block";
      icon.classList.remove("fa")
      icon.classList.remove("fa-caret-down")
      icon.classList.add("fa-solid")
      icon.classList.add("fa-caret-up")
    }
  });
}

let sideBarBtn = document.querySelector(".nav__icon");
let sideBar = document.querySelector(".nav__side-bar");
let hidden = true;
sideBarBtn.addEventListener("click", (e) => {
  if (window.innerWidth <= 760) {
    if (hidden) {
      sideBar.style.display = "block";
      hidden = false;
      sideBar.animate(
        [{ transform: "translateX(-500px)" }, { transform: "translateX(0px)" }],
        {
          duration: 300,
        }
      );
    } else {
      sideBar.animate([{ transform: "translateX(-500px)" }], {
        duration: 300,
      });
      sideBar.style.display = "none";
      hidden = true;
    }
  }
});

window.addEventListener('resize', e => {
  if (window.innerWidth > 760) {
    sideBar.style.display = "none";
    sideBarBtn.style.display = "none";
    hidden = false;
  }
})
