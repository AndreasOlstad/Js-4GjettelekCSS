var tall = Math.round(Math.random() * 100);

function checkGuess() {
  var tekst = parseInt(document.getElementById("guess").value);

  if (tekst === tall) {
    alert("Gratulerer! Du gjettet riktig!");
  } else if (tekst < tall) {
    alert("Skriv et tall som er høyere.");
  } else {
    alert("Skriv et tall som er lavere.");
  }
}
