// Récupération des éléments "interactifs"
const resultPage = document.querySelector(".result");
const resultWindow = document.querySelector(".result_window");
const closeResult = document.querySelector(".close_modale");
const submitForm = document.querySelector(".submit");
const form = document.querySelector("form");
const titreModale = document.querySelector(".result_window_title");
const textModale = document.querySelector(".result_window_text");

submitForm.addEventListener('click', function (event) {
    event.preventDefault();
    const nbPoints = verifyAnswers();
    displayResultWindow(nbPoints);
});

// Le bouton doit cacher la modale "Résultat"
closeResult.addEventListener("click",  function() {
    hideResultWindow();
});

// Fonction qui affiche la modale
function displayResultWindow (points) {
    resultPage.style.display = "block";
    if ( points === 3){
        resultWindow.classList.toggle("correct");
        titreModale.textContent = "Bravo";
        textModale.textContent = `Vous avez eu 3 points !`;
    }
    else {
        resultWindow.classList.toggle("incorrect");
        titreModale.textContent = "Dommage...";
        if (points < 2) {
            textModale.textContent = `Vous avez eu ${points} point !`;
        }
        else {
        textModale.textContent = `Vous avez eu ${points} points !`;
        }
    }
};

// Fonction qui cache la modale
function hideResultWindow () {
    resultPage.style.display = "none";
    resultWindow.className = "result_window";
};

// Fonction qui vérifie le nombre de points obtenus :
function verifyAnswers () {
    let points = 0;
    if ( form["option"].value==="Khorne"){
        points++;
        console.log("Bing 1");
    }
    // form["car"][0].value = "Renault", etc
    if ((form["car"][0].checked) && (form["car"][2].checked) && (form["car"][3].checked) && (!(form["car"][1].checked)) && (!(form["car"][4].checked)) && (!(form["car"][5].checked))){
        points++;
    }
    if ( form["timbre"].value==="La philatélie"){
        points++;
    }
    return points;
};

// Constructeur de Questions
/* On a besoin de :
- Le type : [CheckBox - Radio]
- Un intitulé
- Les réponses : Unique ou Array
*/
/*
function Question(type, question, answer) {
    this.type = type;
    this.question = question;
    this.answer = answer;
    
    this.verify = function (array){
        if (array.equals)
    }
};

function verifyQuestion() {

};*/