const toggleButton = document.getElementById("toggle-button");
const body = document.body;


if (localStorage.getItem("light-mode") === "enabled"){
    body.classList.add("light-mode");
}



toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
if (body.classList.contains("light-mode")){
    localStorage.setItem("light-mode", "enabled");
}
    else {localStorage.setItem("light-mode", "disabled")}

});

