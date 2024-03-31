"use strict";
let music = new Audio("./resources/music.mp3");
music.loop = true;
window.addEventListener("click", () => {
    music.play();
});
let canvas = document.querySelector(".effectsCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
let headerSpan = document.querySelector(".headerSpan");
let mainDiv = document.querySelector(".mainDiv");
let pageDiv = document.querySelector(".pageDiv");
let creditsDiv = document.querySelector(".creditsDiv");
let pageSpan = document.querySelector(".pageSpan");
let navigatorDiv = document.querySelector(".navigatorDiv");
let navigatorImg = document.querySelector(".navigatorImg");
pageDiv.style.display = "none";
navigatorDiv.style.display = "none";
class Page {
    constructor(title, description, imageSrc) {
        this.title = title;
        this.description = description;
        this.imageSrc = imageSrc;
    }
}
let pages = [
    new Page("Your Story", `
    The Your Story project is an introductory project using static HTML and CSS to ease students into the world of computer science.<br />
    I thought that it was a fun way to try out our new programming skills we acquired through training on Codecademy.
    `, "resources/Capture0.PNG"),
    new Page("Your Own Translator", `
    The Your Own Translator project is a project that replicates the Create Performance Task of the AP CSP Exam.<br />
    It allows students to practice programming, video, and written responses in preparation for the exam.<br />
    I thought that the project was really helpful for us because it gave me an idea of what the exam was going to be like.
    `, "resources/Capture1.PNG"),
    new Page("Number Systems and Algorithms", `
    Throughout the year, students learn concepts such as binary and decimal numbers, variables, arrays, iteration, and more.<br />
    I thought that it was interesting to learn about the fundamentals of programming and how it connects to building web applications.
    `, "resources/Capture2.PNG"),
    new Page("HTML, CSS, JS", `
    To build websites, students learn a markup language called HTML, a sheet style language called CSS, and a programming language called JavaScript.<br />
    Students learn HTML and CSS through an online learning website called Codecademy and learn JS through Mr. Hoffert's Nearpod lessons.<br />
    I thought that it was cool to see what we learned in action through projects such as Your Own Translator and the Create Performance Task.
    `, "resources/Capture3.PNG"),
    new Page("AP Exam", `
    The exam this year came in two parts: The Create Performance Task and the multiple choice portion.<br />
    The Create Performance Task was a unique part of both the exam and AP CSP because it allows you to express your creativity while demonstrating your understanding of lists, functions, iteration, and more.<br />
    The multiple choice section tests both your understanding of programming and its impacts on the world at large.<br />
    Studying for this section helped me understand concepts such as fault tolerance and the digital divide.
    `, "resources/Capture4.PNG"),
    new Page("Reflection", `
    AP CSP comes with a lot of benefits. It allows you to learn programming fundamentals and building web pages.<br />
    In reality, being able to make a website can help tremendously with whatever field you go into, whether it's computer science, chemistry, journalism, or even art.<br />
    Computer science can also be utilized anywhere, whether you want to program molecular models, publish your art on the web, or automate some of your daily tasks.<br />
    You also learn concepts such as the digital divide and citizen science so that you understand the impact of computing in the world at large.<br /><br />
    
    In the future, I'll use computer science to develop machine learning algorithms and make websites for my friends and family.<br />
    I'll also reach out and assist others in my community who is in need of computer science related assistance.
    `, "resources/Capture5.PNG"),
    new Page("Credits", `
    Credits to https://dev.to/ for the Number Systems and Algorithms image.<br />
    Credits to https://blog.knoldus.com/ for the HTML, CSS, JS image.<br />
    Credits to https://www.aralia.com/ for the AP Exam image.<br />
    Credits to https://www.dreamstime.com/ for the Reflection image.<br />
    Credits to https://www.gpb.org/ for the Credits image. <br />
    Credits to https://www.flaticon.com/ for the previous and next button images.<br />
    Credits to https://www.freeiconspng.com/ for the no image image.<br />
    Credits to https://hensleyhomes.com/ for the home button image.<br />
    Credits to MorningLightMusic on YouTube for the music.<br /><br />
    Credits to Mr. Hoffert for teaching us AP CSP!
    `, "resources/Capture6.PNG")
];
let currentPageIndex = 0;
window.addEventListener("mousemove", (event) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.beginPath();
    ctx.arc(event.clientX, event.clientY, 20, 0, 2 * Math.PI);
    ctx.closePath();
    console.log(event.screenX);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.stroke();
});
function home() {
    mainDiv.style.display = "flex";
    creditsDiv.style.display = "flex";
    pageDiv.style.display = "none";
    navigatorDiv.style.display = "none";
    headerSpan.innerHTML = "My AP CSP Story";
}
function previous() {
    if (currentPageIndex > 0) {
        handleClick(currentPageIndex - 1);
    }
}
function next() {
    if (currentPageIndex < 6) {
        handleClick(currentPageIndex + 1);
    }
}
function handleClick(pageIndex) {
    mainDiv.style.display = "none";
    creditsDiv.style.display = "none";
    pageDiv.style.display = "flex";
    navigatorDiv.style.display = "flex";
    if (pages[pageIndex] !== undefined) {
        headerSpan.innerHTML = pages[pageIndex].title;
        pageSpan.innerHTML = pages[pageIndex].description;
        navigatorImg.src = pages[pageIndex].imageSrc;
    }
    else {
        headerSpan.innerHTML = "No title";
        pageSpan.innerHTML = "No description";
        navigatorImg.src = "resources/noImage.png";
    }
    currentPageIndex = pageIndex;
}
