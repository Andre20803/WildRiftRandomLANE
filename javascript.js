
function carregado(){
    console.log('carregou');
}



function random(){

    var op = document.getElementById('select').value;

    if(op == 2){
      imagens = Array();
    imagens[0] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg'/>";
    imagens[1] = "<img src='jarvan.jpg'/>";
    imagens[2] = "<img src='rengar.jpg'/>";
    imagens[3] = "<img src='vi.jpg'/>";
    imagens[4] = "<img src='zhao.jpg'/>";
    imagens[5] = "<img src='eve.jpg'/>";
    imagens[6] = "<img src='khazix.jpg'/>";
    imagens[7] = "<img src='wukong.jpg'/>";


    aleatorio = Math.floor(Math.random()*imagens.length);
    document.getElementById("header").innerHTML = imagens[aleatorio];
}

if(op == 3){
    imagens = Array();
    imagens[0] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg'/>";
    imagens[1] = "<img src='https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt6107ce5231820af2/5f7f7a6cbe9b6d0f296355b3/nami_skin01.jpg'/>";
    imagens[2] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg'/>";
    imagens[3] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg'/>";
    imagens[4] = "<img src='https://s2.glbimg.com/jTBOdkhQR1xdTg6T1StFHcx_O1E=/0x0:1215x717/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/P/G/mGkQ6ZQsarjfMdzM9K3Q/lux-splash-art.jpg'/>";

    aleatorio = Math.floor(Math.random()*imagens.length);
    document.getElementById("header").innerHTML = imagens[aleatorio];
}
if(op == 4){
    imagens = Array();
    imagens[0] = "<img src='https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt7dd0d87e957da6c0/6089daa62d1d221032192ee2/Diana_Skin01_(1).jpg'/>";
    imagens[1] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg'/>";
    imagens[2] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg'/>";
    imagens[3] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg'/>";
    imagens[4] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg'/>";

    aleatorio = Math.floor(Math.random()*imagens.length);
    document.getElementById("header").innerHTML = imagens[aleatorio];
}
if(op == 5){
    imagens = Array();
    imagens[0] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg'/>";
    imagens[1] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg'/>";
    imagens[2] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg'/>";
    imagens[3] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg'/>";
    imagens[4] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg'/>";

    aleatorio = Math.floor(Math.random()*imagens.length);
    document.getElementById("header").innerHTML = imagens[aleatorio];
}
if(op == 1){
    imagens = Array();
    imagens[0] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg'/>";
    imagens[1] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg'/>";
    imagens[2] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg'/>";
    imagens[3] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg'/>";
    imagens[4] = "<img src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg'/>";

    aleatorio = Math.floor(Math.random()*imagens.length);
    document.getElementById("header").innerHTML = imagens[aleatorio];
}

if(op == 0){
    alert('Rota Inválida');
}
}

  





    
