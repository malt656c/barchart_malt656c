/* definitioner */
const list = document.querySelector("ul");
const current = document.querySelector("span");
let rNumber;

/* bar og farvefunktion */
function generateBarChart() {
    /* generér random tal */
  rNumber = Math.floor(Math.random() * 101);

  /* laver li element og påsætter det på vores liste */
  const li = document.createElement("li");
  list.appendChild(li);
  /* sætter css property "--height", som bestemmer farver og højde på li elementet */
  li.style.setProperty("--height", `${rNumber}`);

  /* sætter css property "--color", som bestemmer farver på tæller og rammer og viser tallet*/
  list.style.setProperty("--color", `${rNumber}`);
  current.style.setProperty("--color", `${rNumber}`);
  current.textContent = rNumber;

  /* tjekker mængden af elementer i listen og fjerner det ældste "barn" i listen når mængden af "børn" når over 20 */
  if (list.children.length > 20) {
    list.removeChild(list.children[0]);
  }
}
/* køre funktionen hvert sekund */
setInterval(generateBarChart, 1000);
