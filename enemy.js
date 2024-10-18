var valor_HP_enemy = 0;
var HP_base_enemy = 1000;

function SetHPbaseEnemy() {
    HP_base_enemy = prompt("Colocar HP de referência ENEMY:");
    document.getElementById("hp_enemy").innerHTML = "HP: "+valor_HP_enemy+"/"+HP_base_enemy;
    HP_Visual_Effects(valor_HP_enemy,"hp_enemy",HP_base_enemy,"none");
}

function SetHPEnemy(){
    valor_HP_enemy = prompt("HP enemy:");
    document.getElementById("hp_enemy").innerHTML = "HP: "+valor_HP_enemy+"/"+HP_base_enemy;
    HP_Visual_Effects(valor_HP_enemy,"hp_enemy",HP_base_enemy,"none");
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

function SetImageEnemyFILE() {
    fileInput = document.getElementById('inputEnemy'); // Referência ao input de arquivo
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];  // Pega o primeiro arquivo selecionado
        if (file) {
            const reader = new FileReader();  // Usa FileReader para ler o conteúdo do arquivo
            
            // Quando o FileReader terminar de ler o arquivo
            reader.onload = function(e) {
                // Atribui a URL gerada pela leitura como a fonte da imagem
                document.getElementById("Enemyimg").src = e.target.result;
            };
            
            // Lê o arquivo como uma URL de dados (data URL)
            reader.readAsDataURL(file);
        }
    });
    fileInput.click();
}

function attackEnemy () {
    valor_HP_enemy -= Number(prompt("Player ataque no Inimigo dano:"));
    document.getElementById("hp_enemy").innerHTML = "HP: "+valor_HP_enemy+"/"+HP_base_enemy;
    HP_Visual_Effects(valor_HP_enemy,"hp_enemy",HP_base_enemy,"none");
}

function Description () {
        let text = prompt("Descrição:");
        if (text == null || text == "") {
            document.getElementById("Text").innerText = "...";
        }else {
            
            document.getElementById("Text").innerText = text;
        }
}