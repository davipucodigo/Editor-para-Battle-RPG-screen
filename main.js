//config
var HP_base = 100;
//Player
var valor_HP_p1 = 0;
var valor_HP_p2 = 0;
var valor_HP_p3 = 0;
var valor_HP_p4 = 0;

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
            valor_HP_p3 = prompt("HP player 3:");
            document.getElementById("hp_p3").innerHTML = "HP: "+valor_HP_p3+"/"+HP_base;
            if (valor_HP_p3 > 0.7*HP_base) {
                document.getElementById("hp_p3").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 100%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p3 > 0.5*HP_base && valor_HP_p3 <= 0.7*HP_base) {
                document.getElementById("hp_p3").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 70%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p3 > 0.2*HP_base && valor_HP_p3 <= 0.5*HP_base) {
                document.getElementById("hp_p3").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 50%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p3 <= 0.2*HP_base) {
                document.getElementById("hp_p3").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 20%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p3 <= 0) {
                document.getElementById("hp_p3").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 0%, rgb(38, 38, 44) 0%)";
            }
            break;
        
        case 4:
            valor_HP_p4 = prompt("HP player 4:");
            document.getElementById("hp_p4").innerHTML = "HP: "+valor_HP_p4+"/"+HP_base;
            if (valor_HP_p4 > 0.7*HP_base) {
                document.getElementById("hp_p4").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 100%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p4 > 0.5*HP_base && valor_HP_p4 <= 0.7*HP_base) {
                document.getElementById("hp_p4").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 70%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p4 > 0.2*HP_base && valor_HP_p4 <= 0.5*HP_base) {
                document.getElementById("hp_p4").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 50%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p4 <= 0.2*HP_base) {
                document.getElementById("hp_p4").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 20%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p4 <= 0) {
                document.getElementById("hp_p4").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 0%, rgb(38, 38, 44) 0%)";
            }
            break;
    
        default:
            break;
    }
}

function SetName (idname) {
    let nome = prompt("Nome player:");
    if (nome == null || nome == "") {
        document.getElementById(idname).innerText = "Name player";
        if (idname == "enemyname") {  
            document.getElementById(idname).innerText = "Name Enemy";
        }
    }
    else {
        document.getElementById(idname).innerText = nome;
    }
}

function HitPlayer(num) {
    switch (num) {
        case 1:
            valor_HP_p1 -= Number(prompt("Dano no player 1:"));
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
            valor_HP_p2 -= Number(prompt("Dano no player 2:"));
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
            valor_HP_p3 -= Number(prompt("Dano no player 3:"));
            document.getElementById("hp_p3").innerHTML = "HP: "+valor_HP_p3+"/"+HP_base;
            if (valor_HP_p3 > 0.7*HP_base) {
                document.getElementById("hp_p3").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 100%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p3 > 0.5*HP_base && valor_HP_p3 <= 0.7*HP_base) {
                document.getElementById("hp_p3").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 70%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p3 > 0.2*HP_base && valor_HP_p3 <= 0.5*HP_base) {
                document.getElementById("hp_p3").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 50%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p3 <= 0.2*HP_base) {
                document.getElementById("hp_p3").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 20%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p3 <= 0) {
                document.getElementById("hp_p3").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 0%, rgb(38, 38, 44) 0%)";
            }
            break;
        case 4:
            valor_HP_p4 -= Number(prompt("Dano no player 4:"));
            document.getElementById("hp_p4").innerHTML = "HP: "+valor_HP_p4+"/"+HP_base;
            if (valor_HP_p4 > 0.7*HP_base) {
                document.getElementById("hp_p4").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 100%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p4 > 0.5*HP_base && valor_HP_p4 <= 0.7*HP_base) {
                document.getElementById("hp_p4").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 70%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p4 > 0.2*HP_base && valor_HP_p4 <= 0.5*HP_base) {
                document.getElementById("hp_p4").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 50%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p4 <= 0.2*HP_base) {
                document.getElementById("hp_p4").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 20%, rgb(38, 38, 44) 0%)";
            }
            if (valor_HP_p4 <= 0) {
                document.getElementById("hp_p4").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 0%, rgb(38, 38, 44) 0%)";
            }
            break;
    
        default:
            break;
    }
}

function SetImagePlayer() {
    let url;
    let num = Number(prompt("Numero player: example 1, 2, 3 ou 4"));
    switch (num) {
        case 1:
            url = prompt("Coloque a URL da imagem: ");
            document.getElementById("imgp1").src = url;
            if (url == null || url == "") {
            url = "./assets/action.png";
            document.getElementById("imgp1").src = url;
            }
            break;
        case 2:
            url = prompt("Coloque a URL da imagem: ");
            document.getElementById("imgp2").src = url;
            if (url == null || url == "") {
            url = "./assets/action.png";
            document.getElementById("imgp2").src = url;
            }
            break;
        case 3:
            url = prompt("Coloque a URL da imagem: ");
            document.getElementById("imgp3").src = url;
            if (url == null || url == "") {
            url = "./assets/action.png";
            document.getElementById("imgp3").src = url;
            }
            break;
        case 4:
            url = prompt("Coloque a URL da imagem: ");
            document.getElementById("imgp4").src = url;
            if (url == null || url == "") {
            url = "./assets/action.png";
            document.getElementById("imgp4").src = url;
            }
            break;
        default:
            alert("Seleção Invalida");
            break;
    }
}