function start(){
document.getElementById("allall").style.visibility = "hidden";
if(document.cookie.indexOf("tebija=dasai")!=-1){
document.getElementById("allall2").style.display = "none";
document.getElementById("allall2").style.opacity = "0";
document.getElementById("allall").style.visibility = "visible";
return;
}else{
alert("ログインしてください");
document.getElementById("allall").style.visibility = "hidden";

}

function check(){
if(document.getElementById("text1").value=="1" &&
document.getElementById("text2").value=="1" &&
document.getElementById("text3").value == "1"){
document.cookie = "tebija=dasai";
alert("ログインしました");
document.getElementById("allall2").style.display = "none";
document.getElementById("allall2").style.opacity = "0";
document.getElementById("allall").style.visibility = "visible";
}else{
alert("ログインできませんでした");

}
}
