const question =[
    {
        question:" Q1.What does HTML stand for?",
        Option1:"High-Level Text Manipulation Language",
        Option2:"Hyper Text Markup Language",
        Option3:"Hyperlink and Text Markup Language",
        Option4:"Home Tool Markup Language",
        outof:"0/5",
        yes:"b"
        
    },
    {
        question:"Q2.What is the purpose of JavaScript in web development?",
        Option1:"To style web pages",
        Option2:" To create interactive and dynamic content",
        Option3:"To define the layout of a webpage",
        Option4:"To create interactive and dynamic content",
        outof:"1/5",
        yes:"d"

    },
    {
        question:"Q3.What does CSS stand for in web development?",
        Option1:"Creative Style Sheets",
        Option2:"Computer Style Sheets",
        Option3:"Cascading Style Sheets",
        Option4:"Colorful Style Sheets",
        outof:"2/5",
        yes:"c"

    },
    {
        question:"Q4.Which of the following is a CSS framework used for responsive web design?",
        Option1:" Bootstrap",
        Option2:"jQuery",
        Option3:"Angular",
        Option4:"React",
        outof:"3/5",
        yes:"a"
    },
    {
        question:"Q5. Which of the following is a markup language?",
        Option1:"JavaScript",
        Option2:"HTML",
        Option3:"Python",
        Option4:"Java",
        outof:"4/5",
        yes:"b"
    }

]

let options=document.querySelectorAll("label");
let submit=document.querySelector(".btn");
let que=document.querySelector(".que1");
let opt1=document.querySelector(".opt1");
let opt2=document.querySelector(".opt2");
let opt3=document.querySelector(".opt3");
let opt4=document.querySelector(".opt4");
let outof1=document.querySelector(".outof1")
let resultbox=document.querySelector(".resultbox");
let outof=document.querySelector(".outof");
let box=document.querySelector(".box");
let retry=document.querySelector(".retry");
let opt=document.querySelectorAll(".opt");
let allinput=document.querySelectorAll("input[type='radio']")
let msg=document.querySelector(".appreciation")


let score=0;
let correct=0,total=question.length,incorrect=0;
window.addEventListener('DOMContentLoaded',function(){
    selectQuestion();
 });

 function selectQuestion(){
    if(total===score){
        showresult();
    }
    if(score===total-1){
        submit.textContent="SUBMIT QUIZ"
    }
    reset();
    let item=question[score];
    que.innerHTML=item.question;
    opt1.textContent=item.Option1;
    opt2.textContent=item.Option2;
    opt3.textContent=item.Option3;
    opt4.textContent=item.Option4;
    outof1.textContent=item.outof;

 }
 
 
 
        
    



 submit.addEventListener("click",function(){
    let item=question[score]
    const ans=getanswer();
    if(ans===item.yes){
        correct++;

    }else{
        incorrect++;
    }
    score++;
    selectQuestion();
   
 })


 function getanswer(){
    let ans;
    allinput.forEach((opt)=>{
        if(opt.checked){
            ans=opt.value;
           
        }
    })
    return ans;
 }

 function showresult(){
    box.classList.add("hide");
    outof.classList.add("hide");
    resultbox.classList.remove("hide");
    msg.textContent=`Your score is ${correct}    outof  ${total}`
        
 }
 function reset(){
    allinput.forEach((opt)=>{
       opt.checked=false;
    })
 }

 retry.addEventListener("click",function(){
    box.classList.remove("hide");
    outof.classList.remove("hide");
    resultbox.classList.add("hide");
    submit.textContent="SUBMIT";
    score=0;
    correct=0;
    selectQuestion();
 })

 
