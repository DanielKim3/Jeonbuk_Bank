const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault();
/*     const username= loginInput.value;
    if(username ===""){
        alert("please wrtie your name");
    }else if(username.length > 15){
        alert("Your name is too long")
    } */
/*    const username = loginInput.value; */
   console.log(loginInput.value);
}

//username 변수는 유저가 input에 입력한 유저명이고 이걸 local Storage에 저장하고있고 그리고 동시에 paintGreetings 함수의 인자로 사용하고 있다.
function onLoginSubmit(event){
 event.preventDefault();    //event가 원래하는 행동 멈춰!
 loginForm.classList.add(HIDDEN_CLASSNAME) //form 숨기기!!
 const username = loginInput.value;  //logininput.value를 usernam 이라는 변수로 저장
 localStorage.setItem(USERNAME_KEY, username);//username 값을 username이라는 key와 함께 local sotrage에 저장
paintGreetings(username); //paintGreetings 함수 호출
// 유저가 form 안에 있는 input에 입력한 유저명을 받고 있다.
}



function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; //paingGreetings함수는 username이라는 인자를 하나받고 있고 이 함수가 하는일은 비어있는 h1요소 안에 `Hello ${username}`라는 텍스트를 추가
    greeting.classList.remove(HIDDEN_CLASSNAME); //그 다음에 h1요소로부터 "hidden"클래스명을 제거
}


const savedUsername = localStorage.getItem(USERNAME_KEY); //usernamekey를 가지고 local storage를 확인.. 하지만 대부분의 유저는 들어가면 key랑 value값이 없으니까 밑에 saverdUsername === null이 된다//조건이 참이면 form에서 HIDDEN_CLASSNAME을 지워야 되니까 html에 class hidden이 지워져서 보일테고 그다음에는 addEventLister에서 form이 submit 되기를 기다리고 submit이 발생하면 onLoginSubmit 함수를 호출한다
if(savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
   
}else{  
    paintGreetings(savedUsername);
}


