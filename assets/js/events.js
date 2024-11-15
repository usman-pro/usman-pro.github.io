function disableAll(){
    document.getElementById("hero").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("stats").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("resume").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("testimonials").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

disableAll();
document.getElementById("hero").style.display = "block";

document.getElementById("homeBtn").addEventListener("click", ()=>{
    disableAll();
    document.getElementById("hero").style.display = "block";    
});

document.getElementById("aboutBtn").addEventListener("click", ()=>{
    disableAll();
    document.getElementById("about").style.display = "block";
    document.getElementById("skills").style.display = "block";
});

document.getElementById("resumeBtn").addEventListener("click", ()=>{
    disableAll();
    document.getElementById("resume").style.display = "block";
});

document.getElementById("portfolioBtn").addEventListener("click", ()=>{
    disableAll();
    document.getElementById("portfolio").style.display = "block";
});

document.getElementById("servicesBtn").addEventListener("click", ()=>{
    disableAll();
    document.getElementById("services").style.display = "block";
    document.getElementById("testimonials").style.display = "block";
});

document.getElementById("contactBtn").addEventListener("click", ()=>{
    disableAll();
    document.getElementById("contact").style.display = "block";
});