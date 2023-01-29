for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var element=this.innerHTML;
        makes(element);
        ani(element);
        
    });}
    document.addEventListener("keydown",function(event){
        makes(event.key);
        ani(event.key);
    });
    
    function makes(element){
        switch(element){
            case "w":
                var cash1=new Audio("sounds/crash.mp3");
                cash1.play();
                break;
            case "a":
                var cash2=new Audio("sounds/kick-bass.mp3");
                cash2.play();
                break;
            case "s":
                var cash3=new Audio("sounds/snare.mp3");
                cash3.play();
                break;
            case "d":
                var cash4=new Audio("sounds/tom-1.mp3");
                cash4.play();
                break;
            case "j":
                var cash5=new Audio("sounds/tom-2.mp3");
                cash5.play();
                break;
            case "k":
                var cash6=new Audio("sounds/tom-3.mp3");
                cash6.play();
                break;
            case "l":
                var cash7=new Audio("sounds/tom-4.mp3");
                cash7.play();
                break;
            default:
                console.log(element);
        }}
    function ani(curkey){
        var qry=document.querySelector("."+curkey);
        qry.classList.add("pressed");
        setTimeout(function(){
            qry.classList.remove("pressed");
        },100);
    }