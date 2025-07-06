    function couleur(){
      alert("vous allez changer la couleur de la page")
      const col=document.querySelectorAll(".fa-phone")
      document.body.classList.toggle("active")
    }
    const toggle = document.getElementById("menu-toggle");
    const navList = document.querySelector(".nav-liste");

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      navList.classList.toggle("active");
    });
 const but1 = document.querySelector(".btn1"); 

 const but3 = document.querySelector(".btn3"); 

const but5= document.querySelector(".btn5"); 

 const but7 = document.querySelector(".btn7"); 

 const but9 = document.querySelector(".btn9"); 

 const but11= document.querySelector(".btn11"); 
 const but13 = document.querySelector(".btn13"); 

 const but15 = document.querySelector(".btn15"); 

const but17= document.querySelector(".btn17"); 

 const but19 = document.querySelector(".btn19"); 

 const but21 = document.querySelector(".btn21"); 

 const but23= document.querySelector(".btn23"); 


 const p1 =document.querySelector(".p1") 
 const p2=document.querySelector(".p2") 
 const p3 =document.querySelector(".p3") 
 const p4 =document.querySelector(".p4") 
 const p5=document.querySelector(".p5") 
 const p6 =document.querySelector(".p6") 

 const p7 =document.querySelector(".p7") 
 const p8=document.querySelector(".p8") 
 const p9 =document.querySelector(".p9") 
 const p10 =document.querySelector(".p10") 
 const p11=document.querySelector(".p11") 
 const p12 =document.querySelector(".p12") 


but1.addEventListener('click', () => {
 p1.classList.toggle("active1");
});
but3.addEventListener('click', () => {
 p2.classList.toggle("active2");
});
but5.addEventListener('click', () => {
 p3.classList.toggle("active3");
});
but7.addEventListener('click', () => {
 p4.classList.toggle("active4");
});
but9.addEventListener('click', () => {
 p5.classList.toggle("active5");
});
but11.addEventListener('click', () => {
 p6.classList.toggle("active6");
});
but13.addEventListener('click', () => {
 p7.classList.toggle("active7");
});
but15.addEventListener('click', () => {
 p8.classList.toggle("active8");
});
but17.addEventListener('click', () => {
 p9.classList.toggle("active9");
});
but19.addEventListener('click', () => {
 p10.classList.toggle("active10");
});
but21.addEventListener('click', () => {
 p11.classList.toggle("active11");
});
but23.addEventListener('click', () => {
 p12.classList.toggle("active12");
});
    