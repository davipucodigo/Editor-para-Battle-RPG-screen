var valor_HP_enemy;
var HP_base_enemy = 1000;

function SetHPbaseEnemy() {
    HP_base_enemy = prompt("Colocar HP de referência ENEMY:");
    document.getElementById("hp_enemy").innerHTML = "HP: "+valor_HP_enemy+"/"+HP_base_enemy;
    if (valor_HP_enemy > 0.7*HP_base) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 100%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy > 0.5*HP_base_enemy && valor_HP_enemy <= 0.7*HP_base_enemy) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 70%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy > 0.2*HP_base_enemy && valor_HP_enemy <= 0.5*HP_base_enemy) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 50%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy <= 0.2*HP_base_enemy) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 20%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy <= 0) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 0%, rgb(38, 38, 44) 0%)";
    }
}

function SetHPEnemy(){
    valor_HP_enemy = prompt("HP enemy:");
    document.getElementById("hp_enemy").innerHTML = "HP: "+valor_HP_enemy+"/"+HP_base_enemy;
    if (valor_HP_enemy > 0.7*HP_base) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 100%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy > 0.5*HP_base_enemy && valor_HP_enemy <= 0.7*HP_base_enemy) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 70%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy > 0.2*HP_base_enemy && valor_HP_enemy <= 0.5*HP_base_enemy) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 50%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy <= 0.2*HP_base_enemy) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 20%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy <= 0) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 0%, rgb(38, 38, 44) 0%)";
    }
}

function SetImageEnemy() {
    let url;
    url = prompt("Coloque a URL da imagem: ");
    document.getElementById("Enemyimg").src = url;
    if (url == null || url == "") {
    url = "./assets/action.png";
    document.getElementById("Enemyimg").src = url;
    }
}

function attackEnemy () {
    valor_HP_enemy -= Number(prompt("Player ataque no Inimigo dano:"));
    document.getElementById("hp_enemy").innerHTML = "HP: "+valor_HP_enemy+"/"+HP_base_enemy;
    if (valor_HP_enemy > 0.7*HP_base) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 100%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy > 0.5*HP_base_enemy && valor_HP_enemy <= 0.7*HP_base_enemy) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 70%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy > 0.2*HP_base_enemy && valor_HP_enemy <= 0.5*HP_base_enemy) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 50%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy <= 0.2*HP_base_enemy) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 20%, rgb(38, 38, 44) 0%)";
    }
    if (valor_HP_enemy <= 0) {
        document.getElementById("hp_enemy").style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 0%, rgb(38, 38, 44) 0%)";
    }
}

function Description () {
        let text = prompt("Descrição:");
        if (text == null || text == "") {
            document.getElementById("Text").innerText = "...";
        }else {
            
            document.getElementById("Text").innerText = text;
        }
}