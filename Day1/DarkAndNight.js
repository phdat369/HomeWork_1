let body = document.getElementsByTagName("body")[0];
let btn = document.getElementsByClassName("button")[0];
let container = document.getElementsByClassName("container")[0];
let h1 = document.getElementsByClassName("title")[0];
let card = document.getElementsByClassName("card")[0];
let h2 = document.getElementsByTagName("h2")[0];
const render = () => {
    let getTheme = localStorage.getItem("Theme");
    if (getTheme == "light") {
        h1.style.color = "black";
        h2.style.color = "black";
        card.style.backgroundColor = "white";
        body.style.backgroundColor = "white";
        btn.textContent = "☀️";
    }
    else if (getTheme == "dark") {
        h1.style.color = "white";
        h2.style.color = "white";
        card.style.backgroundColor = "black";
        body.style.backgroundColor = "black";
        btn.textContent = "🌙";
    }
}
const changeTheme = () => {
    let statusTheme = localStorage.getItem("Theme");
    if (statusTheme == "light") {
        localStorage.setItem("Theme" , "dark");
    }
    else if (statusTheme == "dark") {
        localStorage.setItem("Theme", "light");
    }
    render();
}
btn.addEventListener("click", changeTheme)
render();