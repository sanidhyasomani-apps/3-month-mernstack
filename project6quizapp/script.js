const questions = [
  {
    question: "What is HTML?",
    options: ["Language", "Markup Language", "Database", "Framework"],
    answer: "Markup Language"
  },
  {
    question: "What is CSS?",
    options: ["Styling", "Database", "Language", "Compiler"],
    answer: "Styling"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of these"],
    answer: "All of these"
  },
  {
    question: "Which method is used to select an element by ID?",
    options: ["querySelector", "getElementById", "getElementsByClassName", "findElement"],
    answer: "getElementById"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Document Order Model", "Display Object Management"],
    answer: "Document Object Model"
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    answer: "push()"
  },
  {
    question: "Which storage keeps data even after the browser is closed?",
    options: ["Session Storage", "Cookies", "Local Storage", "Cache"],
    answer: "Local Storage"
  }
];
    const container=document.querySelector(".quiz-box")
    const questionE1=document.getElementById("question");
    const optionE1=document.getElementById("options")
    const nextbtn=document.getElementById("nextBtn")
    const scores=document.getElementById("score")
    const restartBtn=document.getElementById("restartBtn")
    const result=document.getElementById("result")
    let currentquestion=0;
    let score=0;
    let ans="";
    function renderfun(){
        const questionaccess=questions[currentquestion]
        questionE1.textContent=questionaccess.question;
        optionE1.innerHTML=""
        questionaccess.options.forEach(option=>{
            const opbtn=document.createElement("button");
            opbtn.textContent=option;
            optionE1.appendChild(opbtn);
            opbtn.addEventListener("click",()=>{
                ans=option;
                 
  document.querySelectorAll("#options button")
    .forEach(btn => {
        btn.style.backgroundColor = "";
    });

    opbtn.style.backgroundColor = "#324561";
                })
})}
function scorefun(){
    container.classList.add("hidden")
    result.classList.remove("hide")
    scores.innerHTML=`${score}/${questions.length}`
}
nextbtn.addEventListener("click",()=>{
    if(ans==questions[currentquestion].answer){
            score++
        }
    currentquestion++;
    
    if(currentquestion < questions.length){
        
    renderfun();
    }
    else{
    
     scorefun();
    }
})
restartBtn.addEventListener("click",()=>{
    currentquestion=0;
    score=0;
    container.classList.remove("hidden")
    result.classList.add("hide")
    renderfun();
    
})
    renderfun();
