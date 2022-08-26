function start(){
if(document.cookie.indexOf("tebija=dasai")!=-1){
return;
}else{
alert("ログインしてください");
location.href="https://matsuoka18.github.io/soccer/index.html";
}
}
