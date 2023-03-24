// Récupérer les éléments du DOM :
const quests = document.querySelectorAll(".quest");
const newQuestions = document.querySelector(".new_questions");
const form = document.querySelector("form");
const submitForm = document.querySelector(".submit");
const resultPage = document.querySelector(".result");
const resultWindow = document.querySelector(".result_window");
const closeResult = document.querySelector(".close_modale");
const titreModale = document.querySelector(".result_window_title");
const textModale = document.querySelector(".result_window_text");

// Variables
let nbQuestions = quests.length;
let chosenOnes;
displayNewQuestions();
const bonnesReponses = [
    "Miss Teigne",
    "Epic games",
    "Waterpolo",
    "Ski de fond",
    "Oui",
    "Île Notre-Dame",
    "Patience",
    "Noire",
    "Tremplin",
    "4 ans",
    "Crazy Train",
    "Minecraft",
    "AC/DC",
    "Seinen",
    ["Overlord", "Fantazy Lazy Life", "Konosuba"],
    ["Pique","Trefle"],
    ["Jaune","Rouge","Bleu","Vert","Noir"],
    ["Étoiles", "Mynthos", "Baghera Jones" ],
    ["Citron", "Nain","à joues blanches" , "Pélerin"],
    ["La peinture", "Le dessin", "Le tricot", "La poterie", "La couture"],
    ["La sculpture","Le scrapbooking","La couture", "Le tricot", "La calligraphie" ],
    ["World of Warcraft", "Call of Duty", "Diablo"],
    ["Piano", "Violoncelle", "Guitare"],
    ["Hatha", "Ashtanga", "Bikram", "Kundalini"],
];
const nomReponses = [
    "harry",
    "Fortnite",
    "ballonEau",
    "ski",
    "tennis",
    "Gille",
    "Solitaire",
    "billard",
    "piscine",
    "ete",
    "ozzy",
    "Hole",
    "Metal",
    "manga",
    "isekai",
    "carte",
    "couleur",
    "lundi",
    "shark",
    "hobby",
    "objet",
    "Blizzard",
    "instrument",
    "yoga"
];

// Gestion du Submit du formulaire
submitForm.addEventListener("click", function (event){
    event.preventDefault();
    checkAnswers();
});

// Fonction qui tire 3 chiffres différents au hasard entre 0 et X
function questionsRandom ( x ) {
    let nombresTires = [];
    for ( let i = 0; i < 3; i++){
        let pick = Math.random()*x;
        pick = Math.floor(pick);
         if (isInArray(pick, nombresTires)){
             while(isInArray(pick, nombresTires)){
                 pick = Math.random()*x;
                 pick = Math.floor(pick);
             }
         }
        nombresTires.push(pick);
    }
    return nombresTires;
};

// Fonction qui vérifie si un chiffre ( num ) est dans un tableau ( tab )
function isInArray (num, tab) {
    for ( let i = 0; i < tab.length;  i++ ){
        if ( num === tab[i]){
            return true;
        }
    }
    return false;
};

// Fonction qui vérifie les réponses de Checkbox :
// function verifyCheckbox (nameCheck){
//     const checkboxes = form[nameCheck];
//     console.log(checkboxes);
// };

//Fonction qui prend en argument un tableau avec 3 valeurs et affiche les questions aux positions du tableau;
function showQuestions(tab){
    for (let i = 0; i < tab.length; i++){
        quests[tab[i]].classList.toggle("show");
    }
};

// Fonction qui regroupe le nouveau calcul de questions à montrer et les affiche
function displayNewQuestions () {
    chosenOnes = questionsRandom(nbQuestions);
    showQuestions(chosenOnes);
};

// QUand on clique sur le bouton New Questions, ça affiche de nouvelles questions
newQuestions.addEventListener("click", function() {
    hideQuestions();
    displayNewQuestions();
});

// Fonction qui cache les questions
function hideQuestions(){
    for (let i = 0; i < quests.length; i++){
        quests[i].className = "quest";
    };
};

// Fonction qui doit vérifier les bonnes réponses :
function checkAnswers(){
    let goodAnswers = 0;
    for (let i = 0; i < chosenOnes.length; i++){
        if ( answerIsCorrect(chosenOnes[i])){
            goodAnswers++;
        }
    }
    displayResultWindow(goodAnswers);
};

// Vérifie si une question a bien été répondue :
function answerIsCorrect(x){
    switch (typeof(bonnesReponses[x])){
        case 'string':
            return (form[nomReponses[x]].value == bonnesReponses[x]);
        case 'object':
            const answersCheck = checkboxToArray(x);
            return checkArray(answersCheck, bonnesReponses[x])
    };
}

// Fonction qui compare 2 arrays :
// Même longueur et même valeur :
function checkArray (tab1, tab2){
    if (tab1.length != tab2.length){
        return false;
    }
    else {
        for (let i = 0; i < tab1.length; i++){
            if ( !(isInArray(tab1[i], tab2))){
                return false;
            }
        }
        return true;
    }
};

// Transformer une liste de checkbox en tableau
function checkboxToArray(x){
    const checkboxList = form[nomReponses[x]];
    const returnList = [];
    for ( let i = 0; i < checkboxList.length; i++){
        if (checkboxList[i].checked)
        returnList.push(checkboxList[i].value);
    };
    console.log(returnList);
    return returnList;
};

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

// Le bouton doit cacher la modale "Résultat"
closeResult.addEventListener("click",  function() {
    hideResultWindow();
});

// Fonction qui cache la modale
function hideResultWindow () {
    resultPage.style.display = "none";
    resultWindow.className = "result_window";
};