var num = document.querySelectorAll(".drum").length;
for(var i = 0 ; i<num ; i ++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // alert(document.querySelectorAll(".drum")[i].innerHTML);
        var name = this.innerHTML;
        sound(name);  
        animation(name);
    })
}
document.addEventListener("keypress",function(event){
    sound(event.key);
    animation(event.key);
})
function sound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        default:
            break;
}
}
function animation(_num){
    var activeButton = document.querySelector("." + _num);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}