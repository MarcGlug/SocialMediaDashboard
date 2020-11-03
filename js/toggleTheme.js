window.onload = function(){

btn = document.querySelector(".slider");
checkbox = document.querySelector("#box");

btn.addEventListener("click", function(){
    
    if(checkbox.checked == false){
        list = document.body.classList;
        list.add("darktheme");
        console.log("Dark Mode on");
    }else{
        list.remove("darktheme");
        console.log("Light mode on");
    }
})


    
}