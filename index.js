const resultWindow = document.querySelector(".result");
const closeResult = document.querySelector("#close_modale")

closeResult.addEventListener("click",  function() {
    resultWindow.style.display = "none";
});


function displayResultWindow () {
    resultWindow.style.display = "block";
};

function hideResultWindow () {
    resultWindow.style.display = "none";
}