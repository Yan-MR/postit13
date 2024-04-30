let margem_aleatorias = ["-5px", "1px", "5px", "10px", "7px"];
let cores_aleatorias = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
let inclinacao_aleatoria = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
let index = 0;

window.onload = document.querySelector("#user-input").select();

document.querySelector("#add-note").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "block";
});

document.querySelector("#hide").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});

document.querySelector("#user-input").addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    const text = document.querySelector("#user-input");
    createStickyNote(text.value);
  }
});

createStickyNote = (text) => {
  let note = document.createElement("div");
  let details = document.createElement("div");
  let noteText = document.createElement("h1");

  note.className = "note";
  details.className = "details";
  noteText.textContent = text;

  details.appendChild(noteText);
  note.appendChild(details);

  if(index > cores_aleatorias.length - 1)
    index = 0;

  note.setAttribute("style", `margin:${margem_aleatorias[Math.floor(Math.random() * margem_aleatorias.length)]}; background-color:${cores_aleatorias[index++]}; transform:${inclinacao_aleatoria[Math.floor(Math.random() * inclinacao_aleatoria.length)]}`);

  note.addEventListener("dblclick", () => {
    note.remove();
  })

  document.querySelector("#all-notes").appendChild(note);
}