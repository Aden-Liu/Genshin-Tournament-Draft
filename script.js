const guobaInput = document.getElementById("guoba-input");
const yuigueInput = document.getElementById("yuigue-input");
const guobaContainer = document.getElementById("guoba-container");
const yuigueContainer = document.getElementById("yuigue-container");

function addGuoba() {
  if (guobaInput.value === "") {
    alert("Name cannot be empty");
  } else {
    let teamMember = document.createElement("li");
    teamMember.innerHTML = guobaInput.value;
    guobaContainer.appendChild(teamMember);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    teamMember.appendChild(span);
  }
  guobaInput.value = "";
  saveData();
}

function addYuigue() {
  if (yuigueInput.value === "") {
    alert("Name cannot be empty");
  } else {
    let teamMember = document.createElement("li");
    teamMember.innerHTML = yuigueInput.value;
    yuigueContainer.appendChild(teamMember);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    teamMember.appendChild(span);
  }
  yuigueInput.value = "";
  saveData();
}

guobaContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

yuigueContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("guobaData", guobaContainer.innerHTML);
  localStorage.setItem("yuigueData", yuigueConatiner.innerHTML);
}

function showTeams() {
  guobaContainer.innerHTML = localStorage.getItem("guobaData");
  yuigueContainer.innerHTML = localStorage.getItem("yuigueData");
}
showTeams();
