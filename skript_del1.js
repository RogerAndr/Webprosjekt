var teller = 0;
function skriv(){
    var tekst = document.getElementById('tekstFraBruker').value;
    var tekstLengde = tekst.length;

    teller ++;

    document.getElementById('overskrift').innerHTML = tekst;
    document.getElementById('tellingAvAntTrykk').innerHTML = teller;
    document.getElementById('tellingAvTekstLengde').innerHTML = tekstLengde;

    if (tekstLengde > 10){
        document.getElementById('langTekst').innerHTML = 'Denne teksten er for lang!'
    }
    else {
        document.getElementById('langTekst').innerHTML = ''
    }
}
var klikk = 0;

function tilbakestill(){
    klikk = 0;
    document.getElementById('nummer1').innerHTML ='';
    document.getElementById('nummer2').innerHTML ='';
    document.getElementById('nummer3').innerHTML ='';
}


function registrer(){
    klikk ++;
    var tekst = document.getElementById('tekstFraBruker').value;

    if (klikk == 1) document.getElementById('nummer1').innerHTML = tekst;
    else if (klikk == 2) document.getElementById('nummer2').innerHTML = tekst;
    else document.getElementById('nummer3').innerHTML = tekst;
}

