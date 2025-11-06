//  We will style the document using JavaScript 

// Styling the body of my document
document.body.style.backgroundColor ="gray";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.margin = "0";
document.body.style.padding = "20px";
document.body.style.color = "black";
document.body.style.display= "flex";
document.body.style.flexDirection= "column";
document.body.style.justifyContent= "center";
document.body.style.alignItems= "center";


 // Styling my heading
const h3 = document.querySelector("h3");
h3.style.fontSize = "3em";
h3.style.color = "white";
h3.style.textShadow= "0 4px rgba(29, 234, 432)"

// Styling the options list.

const list = document.getElementById("myList")
list.style.listStyleType = "decimal"; // Use decimal for numbered list
list.style.padding = "0";
list.style.margin = "0";
list.style.textAlign = "left"; // Ensure left alignment

const listContainer = document.getElementById("listContainer")

listContainer.style.display = "flex";
listContainer.style.flexDirection= "column";
listContainer.style.alignItems= "flex-start";

// Styling the paragraph
const paragraph = document.getElementById("p")

    paragraph.style.color ="white";
    paragraph.style.textAlign ="center";
    paragraph.style.fontWeight ="bold";
    paragraph.style.fontSize ="20px";
    paragraph.style.padding ="10px";
    paragraph.style.textShadow = "0 1px rgba(29, 234, 432)";


  

const par = document.getElementById("resultElement");
par.style.color ="black";
par.style.textAlign ="center";
par.style.fontWeight ="bold";
par.style.fontSize ="20px";
par.style.padding ="10px";
par.style.borderRadius ="10px";
par.style.backgroundColor ="white";
par.style.boxShadow= "0 0 10px rgba(29, 234, 432, 1)";

const submitContainer = document.getElementById("submit-container");
submitContainer.style.backgroundColor = "lightgray";
submitContainer.style.padding = "40px";
submitContainer.style.borderRadius = "10px";
submitContainer.style.display = "inline-block";
submitContainer.style.boxShadow = "4px 4px 4px 5px";

const submitBtn = document.getElementById("submit-button");
submitBtn.style.color = "black";
submitBtn.style.backgroundColor = "white";
submitBtn.style.fontWeight = "bold";
submitBtn.style.margin = "8px";
submitBtn.style.borderRadius = "6px"
submitBtn.style.padding = "4px";
submitBtn.style.boxShadow = "0 0 13px rgba(29, 234, 432)"

// Creating a hover on my submit button
submitBtn.addEventListener('mouseover', () =>{
    submitBtn.style.background = "gray"
    submitBtn.style.color = " black"
});

submitBtn.addEventListener('mouseout', () =>{
    submitBtn.style.background = "white"
    submitBtn.style.color = 'black'
})


const inputField = document.getElementById("inputField");
inputField.style.marginBottom = "10px";
inputField.style.borderRadius = "4px";
inputField.style.padding= "4px";

//Styling my home page
const introContainer = document.getElementById("intro-container");
if (introContainer) {
  introContainer.style.backgroundColor = "lightblue";
  introContainer.style.padding = "20px";
  introContainer.style.borderRadius = "8px";
  introContainer.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
}

//Styling my back to home page link
const homeLink = document.getElementById("home-link");
        homeLink.style.color = "white";
        homeLink.style.fontFamily= "nevada"
        homeLink.style.fontWeight = "bold"
        homeLink.style.padding = "4px";
        homeLink.style.background = "black";
        homeLink.style.border = "3px solid"; 
        homeLink.style.borderRadius = "0 15px 8px";
        homeLink.style.boxShadow = "0 10px 5px";

// Creating a hover on my back to home page link
homeLink.addEventListener('mouseover', () =>{
    homeLink.style.background = "gray"
    homeLink.style.color = " black"
});

homeLink.addEventListener('mouseout', () =>{
    homeLink.style.background = "white"
    homeLink.style.color = 'black'
})        

 
// The logic for the whole program
const option = document.getElementById("inputField");
const resultElement = document.getElementById("resultElement");

submitBtn.onclick = function() {

    const option = Number(inputField.value);

    if (option == " ") {
        resultElement.textContent= `You can't submit an empty field`;
    }else if (isNaN(option)) {
        resultElement.textContent= `Your option should be a number (integer)`
    }else if (option == 1) {
        resultElement.textContent= `Gabriel Chidziya`
    }else if (option == 2) {
        resultElement.textContent= `24`
    }else if (option == 3) {
        resultElement.textContent= `Audi`
    }else if (option == 4) {
        resultElement.textContent= `Navy`
    }else if (option == 5) {
        resultElement.textContent= `Rice and beans`
    }else if (option == 6) {
        resultElement.textContent= `Reading, Fifa, movies, martial arts`
    }else if (option == 7) {
        resultElement.textContent= `Christianity, A genuine believer`
    }else if (option == 8) {
        resultElement.textContent= `Atomic habits`
    }else if (option == 9) {
        resultElement.textContent= `Soccer`
    }else if (option == 10) {
        resultElement.textContent= `Lion`
    }else if (option == 11) {
        resultElement.textContent= `None`
    }else if (option == 12) {
        resultElement.textContent= `Jessica Bickling, lol`
    }else if (option == 13) {
        resultElement.textContent= `Winter`
    }else if (option == 14) {
        resultElement.textContent= `Gospel`
    }else if (option == 15) {
        resultElement.textContent= `Theophilus Sunday, Ace Hood`
    }
    else if (option == 16) {
        resultElement.textContent= `Tom Cruise`
    }else if(option == 17) {
        resultElement.textContent= `Zimbabwean`
    }
    else if (option == 18) {
        resultElement.textContent= `
        To know God and have a deeper relationship with Him.`
    }else if (option == 19) {
        resultElement.textContent= `Software Engineering and Cctvs and alarm systems Installation engineer`
    }else if (option == 20) {
        resultElement.textContent= `
        I prioritize my relationship with God above all else, seeking guidance and wisdom from Him.
        I value relationships and experiences that align with God's principles and bring me closer to Him.
        I strive to grow in my faith and career as a software engineer, seeking out opportunities for development
        and self improvement. 
        I value relationships that foster growth, encouragement, and mutual support in both faith and career.
        I believe life has a deeper purpose beyond the ordinary. I seek to live a life that honors God and 
        makes a meaningful impact in the world.
        I appreciate individuals who are driven, motivated, and passionate about their goals.
        `
    }else if (option == 21) {
        resultElement.textContent=`
        The presence of God.
        Hearing the voice of God.
        Realizing my purpose in God and on earth.
        Fulfilling my God given assignment on earth.
        Becoming a great problem solver and innovative software engineer.
        Seeing my family and friends living the lives they desire and worshiping God.
        `
    }else if (option == 22) {
        resultElement.textContent=`
        My joy comes from God and His word. That means even when things are not going well in my
        life, i don't focus much on problems but on what God said about me and my life. I pray a lot,
        and most of the times after prayer i feel joy.
        I know sometimes it is hard to believe in God when things are not going so well but i try so hard to be
        joyful and continue believing in God. 
        `
    }else if (option == 23) {
        resultElement.textContent=`
        I pray and read the word on my own.
        Share what's bothering me with my closest friends then pray about it.
        `
    }else if (option == 24) {
        resultElement.textContent=`
        I desire most to have a closer relationship with God to a point where i'm able to hear Him clearly without any doubts,
        and my plan to get there is listening to sermons, praying and reading His word everyday.
        I want to become a software Engineer who solves small and big problems that individuals or organizations are facing,
        I'll get there by coding,get help from my mentor, reading tech books and building projects everyday.
        I want to help people financially and spiritually so i'll work hard and also pray a lot everyday.
        `
    }else if (option == 25) {

        resultElement.textContent=`
        My definition of success is when I'm able to hear God clearly and fulfill my purpose on earth.
        When I'm able to provide for myself and my family.
        When I'm able to solve problems spiritually and using software.
        When I'm able to travel to any place in this world.
        When I'm able to help other people reach their goals and destinies.
        `
    }else if (option == 26) {
        resultElement.textContent=`
        Topics about God, technology, money, self-development, mindset, AI, software engineering, coding.

        `
    } else if (option == 27) {
        resultElement.textContent=`
        God, Videos, books, research from other people.
        `

    }else if (option == 28) {
       resultElement.textContent= `
        coding and meditation
        `
    }else if (option == 29) {
        resultElement.textContent=`
        Self love to me means living a life that pleases God.
        Taking good care of my body, soul and spirit everyday.
        Working hard so that i can have the life i desire, not depending on other people all the time.
        `
    }else if (option == 30) {
        resultElement.textContent=`
        Most importantly, I want to be remembered as someone who loved God and never gave up on Him even 
        situations forced me to.
        I want to be remembered as a problem solver  (Spiritual, Financial and software).

        `
    }

    else {
        resultElement.textContent= `Please choose a valid option!`
    }
   


}

