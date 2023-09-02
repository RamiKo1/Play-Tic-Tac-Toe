//Open Modal
function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // from button Edit + '1' => 1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  configErrorsParagraphElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target); // Save All inputs

  // get an name from form input
  const enteredPlayerName = formData.get("playername").trim(); // trim() '    Rami Kot    ' => 'Rami Kot' || '       ' => ''

  /** Valid input* */

  // enteredPlayername === '
  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    configErrorsParagraphElement.textContent = "Please enter a valid name!";
    return; //Stop this function savePlayerConfig
  }
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  //   if (editedPlayer === 1) {
  //     players[0].name = enteredPlayerName;
  //   } else {
  //     players[1].name = enteredPlayerName;
  //   }
  closePlayerConfig();
}
