//config
var HP_base = 100;
//Player
var valor_HP_p1 = 0;
var valor_HP_p2 = 0;
var valor_HP_p3 = 0;
var valor_HP_p4 = 0;
var valor_HP_p5 = 0;

function Wallpaper_turn() {
    var wp_url;
    wp_url = prompt("Turn Wallpeper with URL");
    document.body.style.backgroundImage = "url('"+wp_url+"')";
}

function HP_Visual_Effects(variable_value_player,id_player,baseHP,play) {
    if (variable_value_player > 0.7*baseHP) {
        document.getElementById(id_player).style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 100%, rgb(38, 38, 44) 0%)";
        if (play != "none") {
            document.getElementById(play).classList.add("player_card");
            document.getElementById(play).classList.remove("player_card_dead");
        }
    }
    if (variable_value_player > 0.5*baseHP && variable_value_player <= 0.7*baseHP) {
        document.getElementById(id_player).style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 70%, rgb(38, 38, 44) 0%)";
        if (play != "none") {
            document.getElementById(play).classList.add("player_card");
            document.getElementById(play).classList.remove("player_card_dead");
        }
    }
    if (variable_value_player > 0.2*baseHP && variable_value_player <= 0.5*baseHP) {
        document.getElementById(id_player).style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 50%, rgb(38, 38, 44) 0%)";
        if (play != "none") {
            document.getElementById(play).classList.add("player_card");
            document.getElementById(play).classList.remove("player_card_dead");
        }
    }
    if (variable_value_player <= 0.2*baseHP) {
        document.getElementById(id_player).style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 20%, rgb(38, 38, 44) 0%)";
        if (play != "none") {
            document.getElementById(play).classList.add("player_card");
            document.getElementById(play).classList.remove("player_card_dead");
        }
    }
    if (variable_value_player <= 0 ) {
        document.getElementById(id_player).style.backgroundImage = "linear-gradient(to right, rgb(201, 30, 30) 0%, rgb(38, 38, 44) 0%)";
        if (play != "none") {
            document.getElementById(play).classList.add("player_card_dead");
            document.getElementById(play).classList.remove("player_card");
        }
    }
    // Dead Player
    //if (variable_value_player <= -1) {
    //}
}

function SetHPbase() {
    HP_base = prompt("Colocar HP de referência:");
    document.getElementById("hp_p1").innerHTML = "HP: "+valor_HP_p1+"/"+HP_base;
    document.getElementById("hp_p2").innerHTML = "HP: "+valor_HP_p2+"/"+HP_base;
    document.getElementById("hp_p3").innerHTML = "HP: "+valor_HP_p3+"/"+HP_base;
    document.getElementById("hp_p4").innerHTML = "HP: "+valor_HP_p4+"/"+HP_base;
    document.getElementById("hp_p5").innerHTML = "HP: "+valor_HP_p5+"/"+HP_base;
}

function SetHP(num){
    switch (num) {
        case 1:
            valor_HP_p1 = prompt("HP player 1:");
            document.getElementById("hp_p1").innerHTML = "HP: "+valor_HP_p1+"/"+HP_base;
            HP_Visual_Effects(valor_HP_p1,"hp_p1",HP_base,"play1");
            break;
        
        case 2:
            valor_HP_p2 = prompt("HP player 2:");
            document.getElementById("hp_p2").innerHTML = "HP: "+valor_HP_p2+"/"+HP_base;
            
            HP_Visual_Effects(valor_HP_p2,"hp_p2",HP_base,"play2");
            break;
        case 3:
            valor_HP_p3 = prompt("HP player 3:");
            document.getElementById("hp_p3").innerHTML = "HP: "+valor_HP_p3+"/"+HP_base;
            HP_Visual_Effects(valor_HP_p3,"hp_p3",HP_base,"play3");
            break;
        
        case 4:
            valor_HP_p4 = prompt("HP player 4:");
            document.getElementById("hp_p4").innerHTML = "HP: "+valor_HP_p4+"/"+HP_base;
            HP_Visual_Effects(valor_HP_p4,"hp_p4",HP_base,"play4");
            break;
        case 5:
            valor_HP_p5 = prompt("HP player 5:");
            document.getElementById("hp_p5").innerHTML = "HP: "+valor_HP_p5+"/"+HP_base;
            HP_Visual_Effects(valor_HP_p5,"hp_p5",HP_base,"play5");
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
            HP_Visual_Effects(valor_HP_p1,"hp_p1",HP_base,"play1");
            break;
        case 2:
            valor_HP_p2 -= Number(prompt("Dano no player 2:"));
            document.getElementById("hp_p2").innerHTML = "HP: "+valor_HP_p2+"/"+HP_base;
            HP_Visual_Effects(valor_HP_p2,"hp_p2",HP_base,"play2");
            break;
        case 3:
            valor_HP_p3 -= Number(prompt("Dano no player 3:"));
            document.getElementById("hp_p3").innerHTML = "HP: "+valor_HP_p3+"/"+HP_base;
            HP_Visual_Effects(valor_HP_p3,"hp_p3",HP_base,"play3");
            break;
        case 4:
            valor_HP_p4 -= Number(prompt("Dano no player 4:"));
            document.getElementById("hp_p4").innerHTML = "HP: "+valor_HP_p4+"/"+HP_base;
            HP_Visual_Effects(valor_HP_p4,"hp_p4",HP_base,"play4");
            break;
            case 5:
                valor_HP_p5 -= Number(prompt("Dano no player 5:"));
                document.getElementById("hp_p5").innerHTML = "HP: "+valor_HP_p5+"/"+HP_base;
                HP_Visual_Effects(valor_HP_p5,"hp_p5",HP_base,"play5");
                break;
        default:
            break;
    }
}

function URL(url,idimg) {
    url = prompt("Coloque a URL da imagem: ");
    document.getElementById(idimg).src = url;
    if (url == null || url == "") {
        url = "./assets/action.png";
        document.getElementById(idimg).src = url;
    }
}

function SetImagePlayer() {
    let url;
    let num = Number(prompt("Numero player URL: example 1, 2, 3, 4 ou 5"));
    switch (num) {
        case 1:
            URL(url,"imgp1");
            break;
        case 2:
            URL(url,"imgp2");
            break;
        case 3:
            URL(url,"imgp3");
            break;
        case 4:
            URL(url,"imgp4");
            break;
        case 5:
            URL(url,"imgp5");
                break;
        default:
            alert("Seleção Invalida");
            break;
    }
}

//

function SetImagePlayerFILE() {
            let num = Number(prompt("Numero player FILE: example 1, 2, 3, 4 ou 5"));
            let fileInput;
        switch (num) {
            case 1:
                fileInput = document.getElementById('inputImg1'); // Referência ao input de arquivo
                fileInput.addEventListener('change', function(event) {
                    const file = event.target.files[0];  // Pega o primeiro arquivo selecionado
                    if (file) {
                        const reader = new FileReader();  // Usa FileReader para ler o conteúdo do arquivo
                        
                        // Quando o FileReader terminar de ler o arquivo
                        reader.onload = function(e) {
                            // Atribui a URL gerada pela leitura como a fonte da imagem
                            document.getElementById("imgp1").src = e.target.result;
                        };
                        
                        // Lê o arquivo como uma URL de dados (data URL)
                        reader.readAsDataURL(file);
                    }
                });
                fileInput.click();

            break;
        case 2:
                fileInput = document.getElementById('inputImg2'); // Referência ao input de arquivo
                fileInput.addEventListener('change', function(event) {
                    const file = event.target.files[0];  // Pega o primeiro arquivo selecionado
                    if (file) {
                        const reader = new FileReader();  // Usa FileReader para ler o conteúdo do arquivo
                        
                        // Quando o FileReader terminar de ler o arquivo
                        reader.onload = function(e) {
                            // Atribui a URL gerada pela leitura como a fonte da imagem
                            document.getElementById("imgp2").src = e.target.result;
                        };
                        
                        // Lê o arquivo como uma URL de dados (data URL)
                        reader.readAsDataURL(file);
                    }
                });
                fileInput.click();                       
            break;
        case 3:
            fileInput = document.getElementById('inputImg3'); // Referência ao input de arquivo
                fileInput.addEventListener('change', function(event) {
                    const file = event.target.files[0];  // Pega o primeiro arquivo selecionado
                    if (file) {
                        const reader = new FileReader();  // Usa FileReader para ler o conteúdo do arquivo
                        
                        // Quando o FileReader terminar de ler o arquivo
                        reader.onload = function(e) {
                            // Atribui a URL gerada pela leitura como a fonte da imagem
                            document.getElementById("imgp3").src = e.target.result;
                        };
                        
                        // Lê o arquivo como uma URL de dados (data URL)
                        reader.readAsDataURL(file);
                    }
                });
                fileInput.click();   
            break;
        case 4:
            fileInput = document.getElementById('inputImg4'); // Referência ao input de arquivo
                fileInput.addEventListener('change', function(event) {
                    const file = event.target.files[0];  // Pega o primeiro arquivo selecionado
                    if (file) {
                        const reader = new FileReader();  // Usa FileReader para ler o conteúdo do arquivo
                        
                        // Quando o FileReader terminar de ler o arquivo
                        reader.onload = function(e) {
                            // Atribui a URL gerada pela leitura como a fonte da imagem
                            document.getElementById("imgp4").src = e.target.result;
                        };
                        
                        // Lê o arquivo como uma URL de dados (data URL)
                        reader.readAsDataURL(file);
                    }
                });
                fileInput.click();   
            break;
        case 5:
            fileInput = document.getElementById('inputImg5'); // Referência ao input de arquivo
                fileInput.addEventListener('change', function(event) {
                    const file = event.target.files[0];  // Pega o primeiro arquivo selecionado
                    if (file) {
                        const reader = new FileReader();  // Usa FileReader para ler o conteúdo do arquivo
                        
                        // Quando o FileReader terminar de ler o arquivo
                        reader.onload = function(e) {
                            // Atribui a URL gerada pela leitura como a fonte da imagem
                            document.getElementById("imgp5").src = e.target.result;
                        };
                        
                        // Lê o arquivo como uma URL de dados (data URL)
                        reader.readAsDataURL(file);
                    }
                });
                fileInput.click();   
                break;
        default:
            alert("Seleção Invalida");
            break;
    }
}

function Wallpaper_turnFILE() {
    const fileInput = document.getElementById('inputWall');

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.body.style.backgroundImage = `url(${event.target.result})`;
                document.body.style.backgroundSize = 'cover'; // Para cobrir todo o fundo
                document.body.style.backgroundPosition = 'center'; // Centralizar a imagem
            };
            reader.readAsDataURL(file);
        }
    });
    fileInput.click();
}