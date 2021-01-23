var valgtTyskland = document.getElementById('Tyskland');
var valgtUSA = document.getElementById('USA');
var valgtIndia = document.getElementById('India');

function beskjed(){

    var tysklandErValgt = valgtTyskland.checked;
    var USAErValgt = valgtUSA.checked;
    var indiaErValgt = valgtIndia.checked;

    if (tysklandErValgt){
        document.getElementById('melding').innerHTML = 'Du har valgt Tyskland'
    } else if (USAErValgt){
        document.getElementById('melding').innerHTML = 'Du har valgt USA'
    } else if (indiaErValgt){
        document.getElementById('melding').innerHTML = 'Du har valgt India'
    } else if (tysklandErValgt && indiaErValgt){
        document.getElementById('melding').innerHTML = 'Du har valgt Tyskland og India'
    }
}