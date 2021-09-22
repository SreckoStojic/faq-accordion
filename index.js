const dropDownButton1 = document.querySelector("#id1");
const dropDownButton2 = document.querySelector("#id2");
const dropDownButton3 = document.querySelector("#id3");
const dropDownButton4 = document.querySelector("#id4");
const dropDownButton5 = document.querySelector("#id5");


asnwer1 = {
    qID : "question1",
    aID : "answer1",
    text : "10."
}

asnwer2 = {
    qID : "question2",
    aID : "answer2",
    text : `No more than 2GB. All files in your account must first your <br>
            allotted storage space.`
}

asnwer3 = {
    qID : "question3",
    aID : "answer3",
    text : `Very easy, just click on forgot password<br> and follow instructions.`
}

asnwer4 = {
    qID : "question4",
    aID : "answer4",
    text : "Yes."
}

asnwer5 = {
    qID : "question5",
    aID : "answer5",
    text : "Yes, my lord."
}

function createAnswerTemplate(obj){
    answerTemplate = `
        <div class="css-answer" id="${obj.aID}">
            ${obj.text}   
        </div>
        `;    
    return answerTemplate
}


dropDownButton1.addEventListener("click", function(){
    questionDiv = document.getElementById(asnwer1.qID);
    questionP = document.querySelector(`#${asnwer1.qID} p`);
    if(document.getElementById(asnwer1.aID) === null){
        questionDiv.classList.remove("css-question-border-bot");
        questionP.classList.add("css-question-bold");
        dropDownButton1.classList.add("css-button-rotate");    
        template = createAnswerTemplate(asnwer1);
        target = document.getElementById(asnwer1.qID);
        target.insertAdjacentHTML('afterend', template);
    } else {
        document.getElementById(asnwer1.aID).remove();
        questionDiv.classList.add("css-question-border-bot");
        questionP.classList.remove("css-question-bold");
        dropDownButton1.classList.remove("css-button-rotate");    
    }
});

dropDownButton2.addEventListener("click", function(){
    questionDiv = document.getElementById(asnwer2.qID);
    questionP = document.querySelector(`#${asnwer2.qID} p`);
    if(document.getElementById(asnwer2.aID) === null){
        questionDiv.classList.remove("css-question-border-bot");
        questionP.classList.add("css-question-bold");
        dropDownButton2.classList.add("css-button-rotate");
        template = createAnswerTemplate(asnwer2);
        target = document.getElementById(asnwer2.qID);
        target.insertAdjacentHTML('afterend', template);
    } else {
        document.getElementById(asnwer2.aID).remove();
        questionDiv.classList.add("css-question-border-bot");
        questionP.classList.remove("css-question-bold");
        dropDownButton2.classList.remove("css-button-rotate");
    }
});

dropDownButton3.addEventListener("click", function(){
    questionDiv = document.getElementById(asnwer3.qID);
    questionP = document.querySelector(`#${asnwer3.qID} p`);
    if(document.getElementById(asnwer3.aID) === null){    
        questionDiv.classList.remove("css-question-border-bot");
        questionP.classList.add("css-question-bold");
        dropDownButton3.classList.add("css-button-rotate");
        template = createAnswerTemplate(asnwer3);
        target = document.getElementById(asnwer3.qID);
        target.insertAdjacentHTML('afterend', template);
    } else {
        document.getElementById(asnwer3.aID).remove();
        questionDiv.classList.add("css-question-border-bot");
        questionP.classList.remove("css-question-bold");
        dropDownButton3.classList.remove("css-button-rotate"); 
    }
});

dropDownButton4.addEventListener("click", function(){
    questionDiv = document.getElementById(asnwer4.qID);
    questionP = document.querySelector(`#${asnwer4.qID} p`);
    if(document.getElementById(asnwer4.aID) === null){    
        questionDiv.classList.remove("css-question-border-bot");
        questionP.classList.add("css-question-bold");
        dropDownButton4.classList.add("css-button-rotate");
        template = createAnswerTemplate(asnwer4);
        target = document.getElementById(asnwer4.qID);
        target.insertAdjacentHTML('afterend', template);
    } else {
        document.getElementById(asnwer4.aID).remove();
        questionDiv.classList.add("css-question-border-bot");
        questionP.classList.remove("css-question-bold");
        dropDownButton4.classList.remove("css-button-rotate"); 
    }
});

dropDownButton5.addEventListener("click", function(){
    questionDiv = document.getElementById(asnwer5.qID);
    questionP = document.querySelector(`#${asnwer5.qID} p`);
    if(document.getElementById(asnwer5.aID) === null){
        questionDiv.classList.remove("css-question-border-bot");
        questionP.classList.add("css-question-bold");
        dropDownButton5.classList.add("css-button-rotate");
        template = createAnswerTemplate(asnwer5);
        target = document.getElementById(asnwer5.qID);
        target.insertAdjacentHTML('afterend', template);
    } else {
        document.getElementById(asnwer5.aID).remove();
        questionDiv.classList.add("css-question-border-bot");
        questionP.classList.remove("css-question-bold");
        dropDownButton5.classList.remove("css-button-rotate"); 
    }
});