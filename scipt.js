let questionDiv = Array.from(document.querySelectorAll(".questiondiv"))
 
for(let i = 0; i < questionDiv.length; i++){
  let oneDiv = questionDiv[i];
  let question = oneDiv.querySelector("#question");
  let answer = oneDiv.querySelector("#answer");
  let image = oneDiv.querySelector("img");
  question.addEventListener("click", () => {
    if(answer.style.display == "block"){
      answer.style.display = "none";
      question.style.fontWeight = "normal";
      image.src = "images/icon-arrow-down.svg";
    } else{
      answer.style.display = "block";
      question.style.fontWeight = "700";
      image.src = "images/Path 2.svg";
      image.classList.add("arrow");
    }
  })
}
 

 





