function calculateMonths(years) {
    let months = years * 12;
    return months;
}
function saveData() {
    let userName = document.getElementById("name").value;
    let userAge = document.getElementById("age").value;
}
function showContent(){
    let name = localStorage.getItem("savedName");
    let age = localStorage.getItem("savedAge");
    if (name == null || age == null) {
        return; 
    }   
    document.getElementById("hero-section").style.display = "none";
    document.getElementById("main-title").style.display = "none";
    document.getElementById("main-desc").style.display = "none";
    document.getElementById("output-section").style.display = "block";
    document.getElementById("greeting").innerHTML = `Hello, ${name}!`;    
}