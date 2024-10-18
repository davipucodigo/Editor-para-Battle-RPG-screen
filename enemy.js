var valor_HP_enemy = 0;
var HP_base_enemy = 1000;

function SetHPbaseEnemy() {
    HP_base_enemy = prompt("Colocar HP de referência ENEMY:");
    document.getElementById("hp_enemy").innerHTML = "HP: "+valor_HP_enemy+"/"+HP_base_enemy;
    HP_Visual_Effects(valor_HP_enemy,"hp_enemy",HP_base_enemy);
}

function SetHPEnemy(){
    valor_HP_enemy = prompt("HP enemy:");
    document.getElementById("hp_enemy").innerHTML = "HP: "+valor_HP_enemy+"/"+HP_base_enemy;
    HP_Visual_Effects(valor_HP_enemy,"hp_enemy",HP_base_enemy);
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
    HP_Visual_Effects(valor_HP_enemy,"hp_enemy",HP_base_enemy);
}

function Description () {
        let text = prompt("Descrição:");
        if (text == null || text == "") {
            document.getElementById("Text").innerText = "...";
        }else {
            
            document.getElementById("Text").innerText = text;
        }
}