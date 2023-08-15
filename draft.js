const filterChar = document.querySelector(".search select");
const pyro = document.querySelectorAll(".pyro");
const hydro = document.querySelectorAll(".hydro");
const anemo = document.querySelectorAll(".anemo");
const electro = document.querySelectorAll(".electro");
const dendro = document.querySelectorAll(".dendro");
const cryo = document.querySelectorAll(".cryo");
const geo = document.querySelectorAll(".geo");
const character = document.querySelectorAll(".character");

const banned = document.getElementById("banned");
const guobaRoster = document.getElementById("guoba-roster");
const yuigueRoster = document.getElementById("yuigue-roster");
const freeRoster = document.getElementById("free-roster");

const guobaPrompt = document.getElementById("guoba-prompt");
const yuiguePrompt = document.getElementById("yuigue-prompt");

let phase = 0;
let selected = -1000;
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
    if (selected < 2) {
      const addChar = document.createElement("img");

      addChar.src = e.target.src;
      addChar.classList.add("selected-char");
      addChar.addEventListener("click", removeCharacter);

      if (phase === 1 && !e.target.classList.contains("chosen")) {
        banned.appendChild(addChar);
        selected++;
      } else if (phase === 2 && !e.target.classList.contains("chosen")) {
        guobaRoster.appendChild(addChar);
        selected++;
      } else if (phase === 3 && !e.target.classList.contains("chosen")) {
        yuigueRoster.appendChild(addChar);
        selected++;
      } else if (phase === 0) {
        freeRoster.appendChild(addChar);
        selected++;
      }
      e.target.classList.add("chosen");
    }
  });
});

const removeCharacter = (e) => {
  character.forEach((element) => {
    if (element.src == e.target.src) {
      element.classList.remove("chosen");
    }
  });
  e.target.remove();
  selected--;
};

function changePhase() {
  if (phase != 0 && selected < 2) {
    document.getElementById("error-prompt").innerHTML = "Pick more characters before proceeding";
  } else {
    const selectedChars = document.querySelectorAll(".selected-char");
    console.log(selectedChars);
    selectedChars.forEach((element) => {
      element.removeEventListener("click", removeCharacter);
    });
    guobaPrompt.innerHTML = "Team Guoba";
    yuiguePrompt.innerHTML = "Team Yuigue";
    turn++;
    switch (turn) {
      case 1:
        guobaPrompt.innerHTML += " [Ban 1]";
        yuiguePrompt.innerHTML += " [Next: Ban 2]";
        phase = 1;
        selected = 1;
        break;
      case 2:
        guobaPrompt.innerHTML += " [Next: Ban 1]";
        yuiguePrompt.innerHTML += " [Ban 2]";
        selected = 0;
        break;
      case 3:
        guobaPrompt.innerHTML += " [Ban 1]";
        yuiguePrompt.innerHTML += " [Next: Pick 1]";
        selected = 1;
        break;
      case 4:
        guobaPrompt.innerHTML += " [Next: Pick 2]";
        yuiguePrompt.innerHTML += " [Pick 1]";
        phase = 3;
        selected = 1;
        break;
      case 5:
        guobaPrompt.innerHTML += " [Pick 2]";
        yuiguePrompt.innerHTML += " [Next: Pick 2]";
        phase = 2;
        selected = 0;
        break;
      case 6:
        guobaPrompt.innerHTML += " [Next: Pick 2]";
        yuiguePrompt.innerHTML += " [Pick 2]";
        phase = 3;
        selected = 0;
        break;
      case 7:
        guobaPrompt.innerHTML += " [Pick 2]";
        yuiguePrompt.innerHTML += " [Next: Pick 2]";
        phase = 2;
        selected = 0;
        break;
      case 8:
        guobaPrompt.innerHTML += " [Next: Pick 1]";
        yuiguePrompt.innerHTML += " [Pick 2]";
        phase = 3;
        selected = 0;
        break;
      case 9:
        guobaPrompt.innerHTML += " [Pick 1]";
        yuiguePrompt.innerHTML += " [Next: Ban 1]";
        phase = 2;
        selected = 1;
        break;
      case 10:
        guobaPrompt.innerHTML += " [Next: Ban 2]";
        yuiguePrompt.innerHTML += " [Ban 1]";
        phase = 1;
        selected = 1;
        break;
      case 11:
        guobaPrompt.innerHTML += " [Ban 2]";
        yuiguePrompt.innerHTML += " [Next: Ban 1]";
        selected = 0;
        break;
      case 12:
        guobaPrompt.innerHTML += " [Next: Pick 1]";
        yuiguePrompt.innerHTML += " [Ban 1]";
        selected = 1;
        break;
      case 13:
        guobaPrompt.innerHTML += " [Pick 1]";
        yuiguePrompt.innerHTML += " [Next: Pick 2]";
        phase = 2;
        selected = 1;
        break;
      case 14:
        guobaPrompt.innerHTML += " [Next: Pick 2]";
        yuiguePrompt.innerHTML += " [Pick 2]";
        phase = 3;
        selected = 0;
        break;
      case 15:
        guobaPrompt.innerHTML += " [Pick 2]";
        yuiguePrompt.innerHTML += " [Next: Pick 2]";
        phase = 2;
        selected = 0;
        break;
      case 16:
        guobaPrompt.innerHTML += " [Next: Pick 2]";
        yuiguePrompt.innerHTML += " [Pick 2]";
        phase = 3;
        selected = 0;
        break;
      case 17:
        guobaPrompt.innerHTML += " [Pick 2]";
        yuiguePrompt.innerHTML += " [Next: Pick 1]";
        phase = 2;
        selected = 0;
        break;
      case 18:
        yuiguePrompt.innerHTML += " [Pick 1]";
        phase = 3;
        selected = 1;
        break;
    }
  }
}
