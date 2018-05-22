const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

//Fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//loop thru empties and call drag events
for (const empty of empties) {
  empty.addEventListener("dragover", DragOver);
  empty.addEventListener("dragenter", DragEnter);
  empty.addEventListener("dragleave", DragLeave);
  empty.addEventListener("drop", DragDrop);
}

//Drag functions
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function DragOver(e) {
  e.preventDefault();
}

function DragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function DragLeave() {
  this.className = "empty";
}

function DragDrop() {
  this.className = "empty";
  this.append(fill);
}
