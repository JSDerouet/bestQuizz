// Récupération des éléments "interactifs"
const resultPage = document.querySelector(".result");
const resultWindow = document.querySelector(".resultwindow");
const closeResult = document.querySelector(".closemodale");
const submitForm = document.querySelector("#submit");
const form = document.querySelector("form");
const titreModale = document.querySelector(".resultwindowtitle");
const textModale = document.querySelector(".resultwindowtext");

submitForm.addEventListener('click', function (event) {
    event.preventDefault();
    const nbPoints = verifyAnswers();
    displayResultWindow(nbPoints);
})

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
    resultWindow.className = "resultwindow";
}

// Fonction qui vérifie le nombre de points obtenus :
function verifyAnswers () {
    let points = 0;
    if ( form["option"].value==="Khorne"){
        points++;
    }
    if ((form["car"][0].checked) && (form["car"][2].checked) && (form["car"][3].checked) && !(form["car"][1].checked) && !(form["car"][4].checked) && !(form["car"][5].checked)){
        points++;
    }
    if ( form["timbre"].value==="Philatélie"){
        points++;
    }
    return points;
}