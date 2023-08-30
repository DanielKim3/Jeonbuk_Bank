const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//saveToDOs가 할일은 toDos array를 localStorage에 집어넣는것.
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//saveToDo가 할일은 toDos array를 localSorage에 집어넣는것.
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  /* console.dir(event.target.parentElement); //target은 클릭된 HTML element. 모든 HTML element에는 하나 이상의 property가 존재. parentElement는 클릭된 element의 부모 */
  const li = event.target.parentElement;
  li.remove();
  console.log(typeof li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li는 span이라는 자식을 가지게 됐다.
  li.appendChild(button);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}

//밑에 있는 함수는 greetings에 있는 함수랑 똑같다
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/* function sayHello(item){
    console.log("this is the turn of", item);
} */

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
//만약 savedToDos가 localStorage에 존재하면 parsedToDos 라는
// variable을 만들어서<localStorage에서 온 string을 가지고
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => console.log("this is the turn of", item));
}
