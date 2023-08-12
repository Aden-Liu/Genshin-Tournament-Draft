const filterChar = document.querySelector(".search select");
const pyro = document.querySelectorAll(".pyro");
const hydro = document.querySelectorAll(".hydro");
const anemo = document.querySelectorAll(".anemo");
const electro = document.querySelectorAll(".electro");
const dendro = document.querySelectorAll(".dendro");
const cryo = document.querySelectorAll(".cryo");
const geo = document.querySelectorAll(".geo");
const character = document.querySelectorAll(".character");
const selectedChar = document.querySelectorAll(".selected-char");

let phase = 1;
let selected = 1;
let turn = 0;

function filterByElement() {
  character.forEach((element) => {
    element.classList.add("hidden");
  });
  switch (filterChar.selectedIndex) {
    case 0:
      character.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 1:
      pyro.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 2:
      hydro.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 3:
      anemo.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 4:
      electro.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 5:
      dendro.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 6:
      cryo.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
    case 7:
      geo.forEach((element) => {
        element.classList.remove("hidden");
      });
      break;
  }
}

character.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (selected <= 2) {
      const banned = document.getElementById("banned");
      const guobaRoster = document.getElementById("guoba-roster");
      const yuigueRoster = document.getElementById("yuigue-roster");
      const addChar = document.createElement("img");

      addChar.src = e.target.src;
      addChar.classList.add("selected-char");
      addChar.addEventListener("click", (e) => {
        character.forEach((element) => {
          if (element.src == e.target.src) {
            element.classList.remove("chosen");
          }
        });
        e.target.remove();
        selected--;
      });

      if ((phase === 1 || phase === 2) && !e.target.classList.contains("chosen")) {
        banned.appendChild(addChar);
        selected++;
      } else if (phase === 3 && !e.target.classList.contains("chosen")) {
        guobaRoster.appendChild(addChar);
        selected++;
      } else if (phase === 4 && !e.target.classList.contains("chosen")) {
        yuigueRoster.appendChild(addChar);
        selected++;
      }
      e.target.classList.add("chosen");
    }
  });
});

function changePhase() {
  selected = 0;
}