function calculateMonths(years) {
    let months = years * 12;
    return months;
}
function saveData() {
    let userName = document.getElementById("name").value;
    let userAge = document.getElementById("age").value;
    localStorage.setItem("savedName", userName);
    localStorage.setItem("savedAge", userAge);
    showContent();
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
    let ageInMonths = calculateMonths(age);
    document.getElementById("months-text").innerHTML = `You are ${ageInMonths} months old.`;
    if (age >= 18) {
        document.getElementById("adult-text").innerHTML = "You are over 18. You can access adult content.";
    } else {
        document.getElementById("adult-text").innerHTML = "You are under 18. You are too young for adult content.";
    }
    let quoteHTML = "";
    for (let i = 0; i < 5; i++) {
        quoteHTML = quoteHTML + "<p>Keep pushing forward! You can do it!</p>";
    }
    document.getElementById("quotes-area").innerHTML = quoteHTML;
}
showContent();