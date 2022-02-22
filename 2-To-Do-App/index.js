let btn_add = document.getElementById("btn-add");
let content_box = document.getElementById("content_box");
let input = document.getElementById("txt");

btn_add.addEventListener("click", () => {
  if (input.value != "") {
    addElement();
    input.value = "";
  } else alert("Please write a task!");
});

function addElement() {
  // create new elements
  let list_box = document.createElement("div");
  let check = document.createElement("span");
  let lbl_note = document.createElement("label");
  let btn_del = document.createElement("a");
  let icon = document.createElement("i");
  let check_box = document.createElement("div");

  // add class
  list_box.classList.add("list-box");
  check_box.classList.add("check-box");
  check.classList.add("check");
  check.style.visibility = "hidden";
  lbl_note.classList.add("lbl-note");
  btn_del.classList.add("btn-del");
  icon.classList.add("fas" ,"fa-trash", "fa-lg");
  // insert elements
  list_box.appendChild(btn_del);
  list_box.appendChild(check_box);
  list_box.appendChild(lbl_note);
  btn_del.appendChild(icon);
  check_box.appendChild(check);
  content_box.insertBefore(list_box, content_box.firstChild);
  check.innerHTML = "&#x2714;";

  lbl_note.innerText = input.value[0].toUpperCase() + input.value.slice(1);
}

content_box.addEventListener("click", (e) => {
  if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.tagName === "LABEL") {
    if (e.target.style.textDecoration == "line-through") {
      e.target.parentElement.childNodes[1].firstChild.style.visibility =
        "hidden";
      e.target.style.textDecoration = "none";
    } else {
      e.target.style.textDecoration = "line-through";
      e.target.parentElement.childNodes[1].firstChild.style.visibility =
        "visible";
    }
  }
});
