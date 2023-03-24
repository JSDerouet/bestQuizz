// Récupérer les éléments du DOM :
const quests = document.querySelectorAll(".quest");
const newQuestions = document.querySelector(".new_questions");
const form = document.querySelector("form");
let nbQuestions = quests.length;
let chosenOnes;
displayNewQuestions();
const bonnesRéponses = [
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
function verifyCheckbox (nameCheck){
    const checkboxes = form[nameCheck];
    console.log(checkboxes);
};

//Fonction qui prend en argument un tableau avec 3 valeurs et affiche les questions aux positions du tableau;
function showQuestions(tab){
    for (let i = 0; i < tab.length; i++){
        quests[tab[i]].classList.toggle("show");
    }
};

// Fonction qui regroupe le nouveau calcul de questions à montrer et les affiche
function displayNewQuestions () {
    chosenOnes = questionsRandom(nbQuestions);
    console.log(chosenOnes);
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