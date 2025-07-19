let toggle=document.getElementById("toggle");
let x=0;
let menu=document.querySelector("menu");
toggle.onclick=()=>{
    x++;
    console.log(x);
    if(x%2==1){
    document.body.style.backgroundColor="rgba(0,0,0,0.8)";
    document.body.style.color="white";
    menu.color="white";
}
else{
    document.body.style.backgroundColor="bisque";
    document.body.style.color="black";
        menu.color="black";

}
return;
}
let login=document.querySelector('.login');
login.onclick=()=>{
    alert("Login Failed!");
}