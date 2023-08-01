const filter = document.querySelector(".search select");
const pyro = document.getElementsByClassName("pyro");
const hydro = document.getElementsByClassName("hydro");
const anemo = document.getElementsByClassName("anemo");
const electro = document.getElementsByClassName("electro");
const dendro = document.getElementsByClassName("dendro");
const cryo = document.getElementsByClassName("cryo");
const geo = document.getElementsByClassName("geo");
const character = document.getElementsByClassName("character");

function filterByElement() {
  console.log(filter.selectedIndex);
  switch (filter.selectedIndex) {
    case 0:
      for (i = 0; i < character.length; i++) {
        character[i].setAttribute("style", "display: block");
      }
      break;
    case 1:
      for (i = 0; i < character.length; i++) {
        character[i].setAttribute("style", "display: none");
      }
      for (i = 0; i < pyro.length; i++) {
        pyro[i].setAttribute("style", "display: block");
      }
      break;
    case 2:
      for (i = 0; i < character.length; i++) {
        character[i].setAttribute("style", "display: none");
      }
      for (i = 0; i < hydro.length; i++) {
        hydro[i].setAttribute("style", "display: block");
      }
      break;
    case 3:
      for (i = 0; i < character.length; i++) {
        character[i].setAttribute("style", "display: none");
      }
      for (i = 0; i < anemo.length; i++) {
        anemo[i].setAttribute("style", "display: block");
      }
      break;
    case 4:
      for (i = 0; i < character.length; i++) {
        character[i].setAttribute("style", "display: none");
      }
      for (i = 0; i < electro.length; i++) {
        electro[i].setAttribute("style", "display: block");
      }
      break;
    case 5:
      for (i = 0; i < character.length; i++) {
        character[i].setAttribute("style", "display: none");
      }
      for (i = 0; i < dendro.length; i++) {
        dendro[i].setAttribute("style", "display: block");
      }
      break;
    case 6:
      for (i = 0; i < character.length; i++) {
        character[i].setAttribute("style", "display: none");
      }
      for (i = 0; i < cryo.length; i++) {
        cryo[i].setAttribute("style", "display: block");
      }
      break;
    case 7:
      for (i = 0; i < character.length; i++) {
        character[i].setAttribute("style", "display: none");
      }
      for (i = 0; i < geo.length; i++) {
        geo[i].setAttribute("style", "display: block");
      }
      break;
  }
}

for (let i = 0; i < character.length; i++) {
  character[i].addEventListener("click", function(e) {
    e.target.
  })
}
