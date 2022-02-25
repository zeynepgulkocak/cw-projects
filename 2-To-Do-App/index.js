let btn_add = document.getElementById("btn-add");
let content_box = document.getElementById("content_box");
let input = document.getElementById("txt");
let txt_box=document.querySelector(".txt-box");
let removeAll=document.querySelector("#removeAll");

// display to local storage
window.addEventListener("load", () => {
  content_box.innerHTML = content_box.innerHTML == "" && localStorage.getItem("list_box");
  completedTaskCount();
});


// create elements event
btn_add.addEventListener("click", () => {
  if (input.value != "") {
    let newElement=document.createElement("div");
    newElement.innerHTML=addElement();
    content_box.prepend(newElement);
  completedTaskCount();
    input.value = "";
    localStorageAdd();
  } else alert("Please write a task!");
});
input.addEventListener("keypress", (e)=>{
  if(e.key==="Enter"){
    if (input.value != "") {
      let newElement=document.createElement("div");
    newElement.innerHTML=addElement();
    content_box.prepend(newElement);
  completedTaskCount();
      input.value = "";
      localStorageAdd();
    } else alert("Please write a task!");
  }
});

// create elements function
function addElement() {
  return ` <div class="list-box">
  <a class="btn-del"><i class="fas fa-backspace fa-lg"></i></i></a>
  <div class="check-box">
    <span class="check" style="visibility: hidden">✔</span>
  </div>
  <label class="lbl-note">${input.value[0].toUpperCase() + input.value.slice(1)}</label>
</div>`
}

// checked event
content_box.addEventListener("click", (e) => {
  if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove();
    completedTaskCount();
    localStorageAdd();
  } else if (e.target.tagName === "LABEL") {
    let check=e.target.parentElement.querySelector(".check");
    if (e.target.style.textDecoration == "line-through") {
     check.style.visibility =
        "hidden";
      e.target.style.textDecoration = "none";
      e.target.classList = "lbl-note";
      completedTaskCount();
      localStorageAdd();
    } else {
      e.target.style.textDecoration = "line-through";
      e.target.classList = "lbl-note checked";
     check.style.visibility =
        "visible";
      completedTaskCount();
      localStorageAdd();
    }
  }
});

// completed task count
const completedTaskCount = () => {
  let checkedCount = content_box.getElementsByClassName("checked").length;
  let taskCount = content_box.getElementsByClassName("list-box").length;
  const checkedTasks = document.getElementById("checkedTasks");
  const allTasks = document.getElementById("allTasks");
  checkedTasks.innerText = checkedCount;
  allTasks.innerText = taskCount;
};
completedTaskCount();

// remove all local storage
removeAll.addEventListener("click", ()=>{
content_box.innerHTML="";
  localStorage.removeItem("list_box");
completedTaskCount();
});

// local storage add function
let localStorageAdd= ()=>{
  let list_box = document.querySelector(".list-box");
  localStorage.setItem(
    "list_box",
    list_box.parentElement.parentElement.innerHTML
  );
}