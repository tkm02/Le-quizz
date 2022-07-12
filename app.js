const form = document.querySelector('.container');
let tableauResultats = [];
const reponses = ['c','a','b','a','c'];
const emojip = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultat h2');
const noteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const toutesLesQuestion = document.querySelectorAll('.quizz');
let verifTableau = [];


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    for (let i = 1; i < 6; i++) {
        tableauResultats.push( document.querySelector(`input[name="q${i}"]:checked`).value);
    }

    verifierResponse(tableauResultats);
    tableauResultats=[];


});


function verifierResponse(tabResultats){
    for( let j=0 ; j < 5; j++){

        if(tabResultats[j] === reponses[j]){
            verifTableau.push(true);
        }
        else{
            verifTableau.push(false);
        }
    }
    // console.log(verifTableau);
    afficherResultat(verifTableau);
    couleurFonction(verifTableau)
    verifTableau = [];
}


function afficherResultat(tabCheck) {
    const nbDeFaute = tabCheck.filter(el => el !== true).length;
    switch(nbDeFaute){
        case 0:
            titreResultat.innerText = "✔️Bravo, c'est un sans faute !✔️";
            aideResultat.innerText = "";
            noteResultat.innerText = '5/5';
        break;

        case 1:
            titreResultat.innerText = "✨vous y etes presque !✨";
            aideResultat.innerText = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = '4/5';
        break;

        case 2:
            titreResultat.innerText = "✨Encore un effort ...👀";
            aideResultat.innerText = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = '3/5';
        break;

        case 3:
            titreResultat.innerText = "👀il reste quelques erreurs !😭";
            aideResultat.innerText = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = '2/5';
        break;

        case 4:
            titreResultat.innerText = "😭Peux mieux faire !😭";
            aideResultat.innerText = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = '1/5';
        break;

        case 5:
            titreResultat.innerText = "👎Peux mieux faire !👎";
            aideResultat.innerText = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = '0/5';
        break;

        default:
            'oops, cas innatendu.';
    }
}


function couleurFonction(tabvalBool){

    for(let i = 0; i < tableauResultats.length ; i++){
        if(tabvalBool[i] === true){
            toutesLesQuestion[i].style.background = "lightgreen";
        }
        else{
            toutesLesQuestion[i].style.background = "#ffb8b8";
            toutesLesQuestion[i].classList.add('echec');

            setTimeout(()=>{
                toutesLesQuestion[i].classList.remove('echec');
                
            },500)
        }
        
    }

    toutesLesQuestion.forEach(item => {
        item.addEventListener('click',()=>{
            item.style.background = 'white';
        })
    })
}