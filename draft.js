const filterChar = document.querySelector(".search select");
const pyro = document.getElementsByClassName("pyro");
const hydro = document.getElementsByClassName("hydro");
const anemo = document.getElementsByClassName("anemo");
const electro = document.getElementsByClassName("electro");
const dendro = document.getElementsByClassName("dendro");
const cryo = document.getElementsByClassName("cryo");
const geo = document.getElementsByClassName("geo");
const character = document.getElementsByClassName("character");

let selection = 1;

function filterByElement() {
  switch (filterChar.selectedIndex) {
    case 0:
      for (i = 0; i < character.length; i++) {
        character[i].classList.remove("hidden");
      }
      break;
    case 1:
      for (i = 0; i < character.length; i++) {
        character[i].classList.add("hidden");
      }
      for (i = 0; i < pyro.length; i++) {
        pyro[i].classList.remove("hidden");
      }
      break;
    case 2:
      for (i = 0; i < character.length; i++) {
        character[i].classList.add("hidden");
      }
      for (i = 0; i < hydro.length; i++) {
        hydro[i].classList.remove("hidden");
      }
      break;
    case 3:
      for (i = 0; i < character.length; i++) {
        character[i].classList.add("hidden");
      }
      for (i = 0; i < anemo.length; i++) {
        anemo[i].classList.remove("hidden");
      }
      break;
    case 4:
      for (i = 0; i < character.length; i++) {
        character[i].classList.add("hidden");
      }
      for (i = 0; i < electro.length; i++) {
        electro[i].classList.remove("hidden");
      }
      break;
    case 5:
      for (i = 0; i < character.length; i++) {
        character[i].classList.add("hidden");
      }
      for (i = 0; i < dendro.length; i++) {
        dendro[i].classList.remove("hidden");
      }
      break;
    case 6:
      for (i = 0; i < character.length; i++) {
        character[i].classList.add("hidden");
      }
      for (i = 0; i < cryo.length; i++) {
        cryo[i].classList.remove("hidden");
      }
      break;
    case 7:
      for (i = 0; i < character.length; i++) {
        character[i].classList.add("hidden");
      }
      for (i = 0; i < geo.length; i++) {
        geo[i].classList.remove("hidden");
      }
      break;
  }
}

for (i = 0; i < character.length; i++) {
  character[i].addEventListener("click", (e) => {
    if (selection === 1) {
      const banned = document.getElementById("banned");
      const addChar = document.createElement("img");
      addChar.src = e.target.src;
      banned.appendChild(addChar);
    }
    if (selection === 2) {
      const guobaRoster = document.getElementById("guoba-roster");
      const addChar = document.createElement("img");
      addChar.src = e.target.src;
      guobaRoster.appendChild(addChar);
    }
    if (selection === 3) {
      const yuigueRoster = document.getElementById("yuigue-roster");
      const addChar = document.createElement("img");
      addChar.src = e.target.src;
      yuigueRoster.appendChild(addChar);
    }

    console.log(e.target.src);
  });
}
