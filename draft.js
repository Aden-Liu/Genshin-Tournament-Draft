const filterChar = document.querySelector(".search select");
const pyro = document.querySelectorAll(".pyro");
const hydro = document.querySelectorAll(".hydro");
const anemo = document.querySelectorAll(".anemo");
const electro = document.querySelectorAll(".electro");
const dendro = document.querySelectorAll(".dendro");
const cryo = document.querySelectorAll(".cryo");
const geo = document.querySelectorAll(".geo");
const character = document.querySelectorAll(".character");

let selection = 1;

function filterByElement() {
  switch (filterChar.selectedIndex) {
    case 0:
      character.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 1:
      character.forEach((element) => {
        element.classList.add("hidden");
      });
      pyro.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 2:
      character.forEach((element) => {
        element.classList.add("hidden");
      });
      hydro.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 3:
      character.forEach((element) => {
        element.classList.add("hidden");
      });
      anemo.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 4:
      character.forEach((element) => {
        element.classList.add("hidden");
      });
      electro.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 5:
      character.forEach((element) => {
        element.classList.add("hidden");
      });
      dendro.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 6:
      character.forEach((element) => {
        element.classList.add("hidden");
      });
      cryo.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 7:
      character.forEach((element) => {
        element.classList.add("hidden");
      });
      geo.forEach((element) => {
        element.classList.remove("hidden");
      });
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
