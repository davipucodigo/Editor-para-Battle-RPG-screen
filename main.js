//config
var HP_base = 100;
//Player
var valor_HP_p1;
var valor_HP_p2;
var valor_HP_p3;
var valor_HP_p4;

function Wallpaper_turn() {
    var wp_url;
    wp_url = prompt("Turn Wallpeper with URL");
    document.body.style.backgroundImage = "url('"+wp_url+"')";
}

function SetHPbase() {
    HP_base = prompt("Colocar HP de referência:");
    document.getElementById("hp_p1").innerHTML = "HP: "+valor_HP_p1+"/"+HP_base;
    document.getElementById("hp_p2").innerHTML = "HP: "+valor_HP_p2+"/"+HP_base;
    document.getElementById("hp_p3").innerHTML = "HP: "+valor_HP_p3+"/"+HP_base;
    document.getElementById("hp_p4").innerHTML = "HP: "+valor_HP_p4+"/"+HP_base;
}

function SetHP(num){
    switch (num) {
        case 1:
            valor_HP_p1 = prompt("HP player 1:");
            document.getElementById("hp_p1").innerHTML = "HP: "+valor_HP_p1+"/"+HP_base;
            if (valor_HP_p1 > 0.7*HP_base) {
                document.getElementById("hp_p1").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 100%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p1 > 0.5*HP_base && valor_HP_p1 <= 0.7*HP_base) {
                document.getElementById("hp_p1").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 70%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p1 > 0.2*HP_base && valor_HP_p1 <= 0.5*HP_base) {
                document.getElementById("hp_p1").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 50%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p1 <= 0.2*HP_base) {
                document.getElementById("hp_p1").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 20%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p1 <= 0) {
                document.getElementById("hp_p1").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 0%, rgb(38, 38, 44) 0%)";
            }
            break;
        
        case 2:
            valor_HP_p2 = prompt("HP player 2:");
            document.getElementById("hp_p2").innerHTML = "HP: "+valor_HP_p2+"/"+HP_base;
            if (valor_HP_p2 > 0.7*HP_base) {
                document.getElementById("hp_p2").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 100%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p2 > 0.5*HP_base && valor_HP_p2 <= 0.7*HP_base) {
                document.getElementById("hp_p2").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 70%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p2 > 0.2*HP_base && valor_HP_p2 <= 0.5*HP_base) {
                document.getElementById("hp_p2").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 50%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p2 <= 0.2*HP_base) {
                document.getElementById("hp_p2").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 20%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p2 <= 0) {
                document.getElementById("hp_p2").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 0%, rgb(38, 38, 44) 0%)";
            }
            break;
        case 3:
            
        break;
        
        case 4:
            
            break;
    
        default:
            break;
    }
}