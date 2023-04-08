var NumberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<NumberofDrumButtons; i++)


document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
});
        
    {}
    document.addEventListener('keypress',function(event){
        makeSound(event.key)
    });
    
    function makeSound (key){
        switch (key) {
            case "w":
                var Siren = new Audio('sounds/808Siren.wav');
                Siren.play();
                break;
    
                case "a":
                    var Kick = new Audio("sounds/SouthsideKick.wav");
                    Kick.play();
                    break;
                    
                    case 's':
                        var Snare = new Audio ("sounds/MetroSnare.wav");
                        Snare.play();
                        break;
    
                        case 'd':
                    var Clap = new Audio("sounds/MetroClap.wav");
                    Clap.play();
                    break;
    
                    case 'j':
                    var HiHat = new Audio("sounds/MetroHiHat.wav");
                    HiHat.play();
                    break;
    
                    case 'k':
                    var Southside808 = new Audio("sounds/Southside808.wav");
                    Southside808.play();
                    break; 
    
                    case 'l':
                    var Cymbol = new Audio("sounds/CartelCymbol.wav");
                    Cymbol.play();
                    break;
    }}