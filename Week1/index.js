alert("Welcome");

let b = document.getElementsByTagName("button");

b[0].addEventListener("click", () => {
    alert("Button got clicked!!");
    b[0].className = "after"; 
})