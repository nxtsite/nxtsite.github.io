var varsta = 14;
//console.log(varsta);

var nxt = {
    nume: "Dominic",
    familie: "Esanu",
    varsta: 14,
    jocuri_preferate: {
        joc1: "GTA5",
        joc2: "PUBG"
    }
}

nxt.varsta = 15;


var mgh = {
    nume: "Marin",
    familie: "Novitchi",
    varsta: 26,
    jocuri_preferate: {
        joc1: "GTA5",
        joc2: "PUBG"
    }
}

function presentYourself(player){
    var introducere = "Hello, my name is " + player.nume + " " + player.familie + ". I am " + player.varsta + ". My favourite games are " + player.jocuri_preferate.joc1 + " and " + player.jocuri_preferate.joc2;
    console.log(introducere);
}

presentYourself(nxt);
presentYourself(mgh);